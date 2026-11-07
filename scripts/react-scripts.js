#!/usr/bin/env node
const { spawnSync } = require("child_process");

const args = process.argv.slice(2);
const command = args[0] || "build";

let nextBin;
try {
  nextBin = require.resolve("next/dist/bin/next");
} catch {
  nextBin = "next";
}

let nextArgs;
if (command === "build") {
  nextArgs = ["build", ...args.slice(1)];
} else if (command === "start") {
  nextArgs = ["start", ...args.slice(1)];
} else if (command === "test") {
  console.log("No tests specified");
  process.exit(0);
} else {
  nextArgs = args;
}

const child = spawnSync(process.execPath, [nextBin, ...nextArgs], {
  stdio: "inherit",
  env: process.env,
});

process.exit(child.status ?? 0);
