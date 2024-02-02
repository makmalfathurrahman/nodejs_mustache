import mustache from "mustache";

test("Cache Mustache Test", async () => {
  mustache.parse("Hello {{name}}");

  const data = mustache.render("Hello {{name}}", { name: "World!" });
  expect(data).toBe("Hello World!");
});
