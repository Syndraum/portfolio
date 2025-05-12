import { Card } from "./Card.tsx";

export function PresentationCard() {
	return (
		<Card>
			<div class="flex flex-col gap-4">
				<div class="flex flex-col gap-2">
					<img
						class="h-20 w-20 rounded-full shadow-lg"
						src="/profile.jpg"
						alt="Photo de profile"
					/>
					<div class="text-xl font-bold text-primary">
						Salut ! Moi c'est Romain, <br/>Ingenieur Logiciel !
					</div>
				</div>
				<div class="text-base/5 text-(--color-card-text)">
				Je crée, conçois et code des sites web et logiciels. Si  mon travail vous plaît, n'hésitez pas à me contacter !
				</div>
			</div>
		</Card>
	)
}