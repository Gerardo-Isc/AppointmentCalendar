// Modules
const { app, BrowserWindow, screen } = require("electron"); // Importando a Electron
const path = require("path");

// Menu
const { setMainMenu } = require("./logic/menu.js");

/**
 * Create a new Browsaer Window
 */
const createWindow = () => {
  // Obteniendo el tamaño de la pantalla para inicializar la ventana
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  // Creado una nueva instancia de BrowserWindow
  // para crear una ventana
  const mainwin = new BrowserWindow({
    // fullscreen: true,
    // fullscreenable: true,
    // simpleFullscreen: true,
    width: width - 50, // Ancho
    height: height, // Alto
    minWidth: 400, // Minimo de Ancho
    minHeight: 400, // Minumo de Alto
    webPreferences: {
      preload: path.join(__dirname, "logic", "preload.js"),
    },
  });

  setMainMenu(mainwin);

  mainwin.loadFile("./src/views/index.html");
};

// Eventos
app.whenReady().then(() => {
  createWindow();
});

// app.on("open-file").then(() => {});
