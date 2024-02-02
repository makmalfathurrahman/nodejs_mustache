import mustache from "mustache";
import * as fs from "node:fs/promises";

test("Function Test", async () => {
  const parameter = {
    name: "World!",
    function: () => {
      return (text, render) => {
        return render(text).toUpperCase();
      };
    },
  };

  const data = mustache.render("Hello {{#function}}{{name}}{{/function}}", parameter);
  console.info(data);
  expect(data).toBe("Hello WORLD!");
});
