import mustache from "mustache";
import * as fs from "node:fs/promises";

test("List Object Test", async () => {
  const template = await fs.readFile("./templates/list-object.mustache", "utf-8");

  const data = mustache.render(template, {
    list: [
      {
        status: 200,
        method: "GET",
      },
      {
        status: 201,
        method: "CREATED",
      },
    ],
  });
  console.info(data);
  expect(data).toContain("GET");
  expect(data).toContain("CREATED");
  expect(data).toContain("200");
});
