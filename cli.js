import { resolve } from "path";
process.argv.splice(2, 0, resolve("script.js"));
await import("@octoherd/cli");
