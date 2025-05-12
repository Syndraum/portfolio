import { IconAtom, IconHeart, Logo } from "#icons"
import { StickyColumn } from "/components/StickyColumn.tsx";
import { Title } from "/components/Title.tsx";
import { PresentationCard } from "/components/PresentationCard.tsx";
import { Contact } from "/components/Contact.tsx";
import { ProjectCard } from "/components/ProjectCard.tsx";
import ThemeButton from "/islands/ThemeButton.tsx";
import { ProjectType } from "/types/ProjectType.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getlistProjects } from "/notion/index.ts";

interface HomeProps {
	projects: ProjectType[]
}

export const handler: Handlers = {
	async GET(_req, ctx) {
		const projects = await getlistProjects()
		return ctx.render({projects})
	}
}

export default function Home(props: PageProps<HomeProps>) {
	return (
		<div class="grid grid-cols-1 md:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_2fr_1fr] gap-x-5 gap-y-6">
			<StickyColumn h_screen>
				<div class="flex flex-col gap-y-5 h-full md:justify-between">
					<div class="flex flex-col gap-y-5">
						<div class="flex justify-between items-center">
							<Title>
								<Logo width={80}/>
							</Title>
							<div class="flex gap-x-2">
								<ThemeButton />
							</div>
						</div>
						<div class="flex flex-col gap-y-5">
							<PresentationCard />
							<Contact />
						</div>
					</div>
					<div class="flex flex-col text-(--color-card-text)">
						<div class="flex gap-x-1 items-center">
							Conçu avec <div class="h-4 w-4 text-rose-700 fill-current"><IconHeart /></div> par moi.
						</div>
						<div>
							Inspiré par <a href="https://nerdy.dev/" target="_blank">Adam Argyle</a> et <a href="https://natalie.sh" target="_blank">Natalie</a>.
						</div>
					</div>
				</div>
			</StickyColumn>
			<div class="flex flex-col gap-y-5 md:py-10">
				<div class="flex items-center h-[44px]">
					<Title icon={IconAtom}>
						Mes projets
					</Title>
				</div>
				<div class="flex flex-col gap-y-3">
					{ props.data.projects.map(project => (
						<ProjectCard key={project.slug} project={project}/>
					))}
				</div>
			</div>
		</div>
	);
}
