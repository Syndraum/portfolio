import { IconGithub, IconLinkedin, IconSendEmail } from "#icons";
import { Pastille } from "./Pastille.tsx";


export function Contact() {
	return (
		<div class="flex flex-wrap-reverse gap-2">
			<Pastille href="https://github.com/Syndraum" icon={IconGithub} extern/>
			<Pastille href="https://linkedin.com/in/roalvare" icon={IconLinkedin} extern/>
			<Pastille href="mailto:hello@roalvare.dev" icon={IconSendEmail}>
				Envoyez-moi un mail !
			</Pastille>
		</div>
	)
}
