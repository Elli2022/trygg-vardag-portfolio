import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium, devices } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, "docs", "screenshots");
const baseUrl = process.env.SCREENSHOT_BASE_URL ?? "http://127.0.0.1:3000";

async function waitForServer(url, timeoutMs = 60_000) {
  const started = Date.now();

  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // Server not ready yet.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Server did not become ready at ${url}`);
}

async function capture() {
  await mkdir(outputDir, { recursive: true });
  const browser = await chromium.launch();
  const desktop = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });
  const mobile = await browser.newPage(devices["iPhone 13"]);

  const shots = [
    { page: desktop, name: "home-desktop.png", path: "/" },
    { page: desktop, name: "services-desktop.png", path: "/#tjanster" },
    { page: desktop, name: "contact-desktop.png", path: "/#kontakt" },
    { page: mobile, name: "home-mobile.png", path: "/" },
    { page: desktop, name: "thank-you-desktop.png", path: "/tack" },
  ];

  for (const shot of shots) {
    const [pathname, hash] = shot.path.split("#");
    await shot.page.goto(`${baseUrl}${pathname || "/"}`, {
      waitUntil: "networkidle",
    });

    if (hash) {
      await shot.page.locator(`#${hash}`).scrollIntoViewIfNeeded();
      await shot.page.waitForTimeout(400);
    }

    await shot.page.screenshot({
      path: path.join(outputDir, shot.name),
      fullPage: false,
    });
  }

  await browser.close();
}

const shouldStartServer = !process.env.SCREENSHOT_BASE_URL;
let serverProcess;

if (shouldStartServer) {
  serverProcess = spawn("npm", ["run", "start"], {
    cwd: rootDir,
    stdio: "inherit",
    env: { ...process.env, PORT: "3000" },
  });
  await waitForServer(baseUrl);
}

try {
  await capture();
  console.log(`Screenshots saved to ${outputDir}`);
} finally {
  if (serverProcess) {
    serverProcess.kill("SIGTERM");
  }
}
