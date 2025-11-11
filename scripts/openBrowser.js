const http = require("http");
const { exec } = require("child_process");

const targetUrl = process.env.OPEN_URL || "http://localhost:3000";
const pollIntervalMs = Number(process.env.OPEN_INTERVAL_MS || 1000);
const maxWaitMs = Number(process.env.OPEN_TIMEOUT_MS || 20000);

let elapsed = 0;
let hasOpened = false;

const openBrowser = () => {
  if (hasOpened) {
    return;
  }

  hasOpened = true;

  const commandByPlatform = {
    darwin: `open "${targetUrl}"`,
    win32: `start "" "${targetUrl}"`,
    linux: `xdg-open "${targetUrl}"`,
  };

  const command = commandByPlatform[process.platform];

  if (!command) {
    console.warn(
      `Unsupported platform "${process.platform}". Please open ${targetUrl} manually.`
    );
    return;
  }

  exec(command, (error) => {
    if (error) {
      console.warn(
        `Failed to open browser automatically. Please open ${targetUrl} manually.`
      );
    }
  });
};

const tryFetch = () => {
  const request = http.get(targetUrl, (response) => {
    if (response.statusCode >= 200 && response.statusCode < 500) {
      clearInterval(poller);
      response.resume();
      openBrowser();
    } else {
      response.resume();
    }
  });

  request.on("error", () => {
    // Ignore errors until timeout reached
  });
};

const poller = setInterval(() => {
  elapsed += pollIntervalMs;

  if (hasOpened) {
    clearInterval(poller);
    return;
  }

  if (elapsed >= maxWaitMs) {
    clearInterval(poller);
    openBrowser();
    return;
  }

  tryFetch();
}, pollIntervalMs);

tryFetch();

