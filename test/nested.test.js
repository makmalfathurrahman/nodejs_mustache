import mustache from "mustache";

test("Nested Object Mustache Test", async () => {
  mustache.parse("Hello {{data.name}}");

  const data = mustache.render("Hello {{data.name}}", {
    data: {
      name: "World!",
    },
  });
  expect(data).toBe("Hello World!");
});
