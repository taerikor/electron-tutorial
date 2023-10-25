const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");

const size = {
  width: 800,
  height: 600,
};

const createWindow = () => {
  const win = new BrowserWindow({
    ...size,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  ipcMain.handle("size", () => size);
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
