import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import fs from "fs/promises";
import * as path from "path";

const app = new Elysia().use(html());

const pages = await fs.readdir("./src/pages");

const createPageRoute = async (
  pageName: string,
  Page: any,
  metadata: Metadata
) => {
  app.get(pageName === "index" ? "/" : `/${pageName}`, ({ html }: any) =>
    html(<BaseHtml children={Page()} metadata={metadata}></BaseHtml>)
  );
};

for (const page of pages) {
  if (page.endsWith(".tsx") && !page.startsWith("layout")) {
    const pageName = path.parse(page).name;

    const { Page, metadata } = await import(
      `/home/olif/apps/beth-stack-test/src/pages/${pageName}.tsx`
    );

    createPageRoute(pageName, Page, metadata);
  }
}

const BaseHtml = ({
  children,
  metadata,
}: {
  children: elements.Children;
  metadata: Metadata;
}) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://unpkg.com/htmx.org@1.9.5"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/hyperscript.org@0.9.11"></script>
    <title>${metadata?.title ?? ""}</title>
    <meta name="description" content=${metadata?.description ?? ""}>
  </head>
  <body class="m-0 p-0 bg-black text-white">
    ${children}
  </body>
</html>
`;

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
