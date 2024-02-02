import mustache from "mustache";
import * as fs from "node:fs/promises";

test("List Test", async () => {
  const template = await fs.readFile("./templates/list.mustache", "utf-8");

  const data = mustache.render(template, {
    list: ["one", "two", "three"],
  });
  console.info(data);
  expect(data).toContain("one");
  expect(data).toContain("two");
  expect(data).toContain("three");
});
