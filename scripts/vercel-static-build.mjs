import { mkdir, rm, copyFile, cp, writeFile } from "node:fs/promises";

const outputRoot = ".vercel/output";
const staticRoot = `${outputRoot}/static`;

await rm(outputRoot, { recursive: true, force: true });
await mkdir(staticRoot, { recursive: true });

await copyFile("index.html", `${staticRoot}/index.html`);
await copyFile("code.html", `${staticRoot}/code.html`);
await cp("public", `${staticRoot}/public`, { recursive: true });

await writeFile(
  `${outputRoot}/config.json`,
  JSON.stringify(
    {
      version: 3,
      routes: [
        { handle: "filesystem" },
        { src: "/(.*)", dest: "/index.html" },
      ],
    },
    null,
    2,
  ),
);
