import mustache from "mustache";

test("Tags Mustache Test", async () => {
  mustache.parse("Hello {{name}}");

  const data = mustache.render("Hello {{name}}. This is from {{{data}}}", {
    name: "World!",
    data: "<b>Tags</b>",
  });
  expect(data).toBe("Hello World!. This is from <b>Tags</b>");
});
