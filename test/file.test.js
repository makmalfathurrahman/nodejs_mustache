import mustache from "mustache";
import * as fs from "node:fs/promises";

test("File Mustache Test", async () => {
  const template = await fs.readFile("./templates/index.mustache", "utf-8");

  const data = mustache.render(template, {
    title: "Hello World!",
  });
  console.info(data);
  expect(data).toContain("Hello World!");
});
