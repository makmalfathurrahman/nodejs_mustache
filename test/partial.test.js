import mustache from "mustache";
import * as fs from "node:fs/promises";

test("List Object Test", async () => {
  const headerTemplate = await fs.readFile("./templates/header.mustache", "utf-8");
  const contentTemplate = await fs.readFile("./templates/content.mustache", "utf-8");
  const footerTemplate = await fs.readFile("./templates/footer.mustache", "utf-8");

  const data = mustache.render(
    contentTemplate,
    {
      content: "This is partial Mustache",
    },
    {
      header: headerTemplate,
      footer: footerTemplate,
    }
  );
  console.info(data);
  expect(data).toContain("This is partial Mustache");
  expect(data).toContain("HEADER");
  expect(data).toContain("FOOTER");
});
