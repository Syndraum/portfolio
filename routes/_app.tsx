import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alvarez Romain - Portfolio</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div id="app">
          <main class="px-4 md:px-6 lg:px-[100px] my-4 md:my-0">
            <Component />
          </main>
        </div>
      </body>
    </html>
  );
}
