const { app, BrowserWindow } = require("electron"); // Importando a Electron

/**
 * Create a new Browsaer Window
 */
const createWindow = () => {
  // Creado una nueva instancia de BrowserWindow
  // para crear una ventana
  const mainwin = new BrowserWindow({
    width: 800, // Ancho
    height: 600, // Alto
    minWidth: 400, // Minimo de Ancho
    minHeight: 400, // Minumo de Alto
    // webPreferences: {
    //   preload: path.join(__dirname, "preload.js"),
    // },
  });

  mainwin.loadFile("index.html");
};

// Eventos
app.whenReady().then(() => {
  createWindow();
});

// setMainMenu(mainwin);
// app.on("open-file").then(() => {});

// const { setMainMenu } = require("./menu.js");
// const path = require("path");
