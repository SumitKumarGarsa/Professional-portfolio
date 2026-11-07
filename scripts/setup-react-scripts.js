const fs = require("fs");
const path = require("path");

const binDir = path.join(__dirname, "..", "node_modules", ".bin");
const scriptSource = path.join(__dirname, "react-scripts.js");

if (!fs.existsSync(binDir)) {
  fs.mkdirSync(binDir, { recursive: true });
}

const targetFile = path.join(binDir, "react-scripts");

try {
  if (fs.existsSync(targetFile)) {
    try { fs.unlinkSync(targetFile); } catch {}
  }
  
  fs.copyFileSync(scriptSource, targetFile);
  try {
    fs.chmodSync(targetFile, 0o777);
  } catch {}

  const cmdFile = path.join(binDir, "react-scripts.cmd");
  fs.writeFileSync(cmdFile, `@echo off\nnode "%~dp0\\..\\..\\scripts\\react-scripts.js" %*\n`);

  console.log("Successfully created react-scripts build shim at", targetFile);
} catch (err) {
  console.warn("Could not create react-scripts shim:", err.message);
}
