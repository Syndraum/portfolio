import { Head } from "$fresh/runtime.ts";
import { IconWeb } from "#icons";
import { Pastille } from "/components/Pastille.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="flex flex-col gap-20 justify-center items-center h-screen">
      <div class="flex flex-col items-center gap-6">
        <div class="flex flex-col items-center">
          <div class="text-9xl font-bold text-subtitle">
            404
          </div>
          <div class="text-lg text-(--color-card-text)">
            Vous vous êtes perdu !
          </div>
        </div>
        <Pastille href="/" icon={IconWeb}>
          Retour à l'accueil
        </Pastille>
      </div>
      <div class="text-xs font-ligther text-(--color-card-subtext) fixed bottom-20">
        Il est beau mon gradient, hein ?
      </div>
    </div>
    </>
  );
}
