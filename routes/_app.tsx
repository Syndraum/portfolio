import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alvarez Romain - Portfolio</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" type="image/svg+xml" href={asset("/favicon.svg")} />
      </head>
      <body>
        <div id="app" class="flex items-center">
          <main class="container px-4 md:px-0 xl:px-[100px] my-4 md:my-0">
            <Component />
          </main>
        </div>
      </body>
    </html>
  );
}
