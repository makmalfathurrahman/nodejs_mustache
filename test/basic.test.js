import mustache from "mustache";

test("Basic Mustache Test", async () => {
  const data = mustache.render("Hello {{name}}", { name: "World!" });
  expect(data).toBe("Hello World!");
});
