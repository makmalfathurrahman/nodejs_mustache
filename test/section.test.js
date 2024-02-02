import mustache from "mustache";
import * as fs from "node:fs/promises";

test("Showed Section Test", async () => {
  const template = await fs.readFile("./templates/section.mustache", "utf-8");

  const data = mustache.render(template, {
    content: {
      name: "Section",
    },
  });
  console.info(data);
  expect(data).toContain("Hello from Section");
});

test("Not Showed Section Test", async () => {
  const template = await fs.readFile("./templates/section.mustache", "utf-8");

  const data = mustache.render(template, {});
  console.info(data);
  expect(data).not.toContain("Hello from Section");
});

test("Inverted Section Test", async () => {
  const template = await fs.readFile("./templates/section.mustache", "utf-8");

  const data = mustache.render(template, {});
  console.info(data);
  expect(data).toContain("Hello Section");
});
