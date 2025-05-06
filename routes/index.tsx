import { Logo } from "#icons"
import { StickyColumn } from "/components/StickyColumn.tsx";
import { Title } from "/components/Title.tsx";
import { PresentationCard } from "/components/PresentationCard.tsx";
import { Contact } from "/components/Contact.tsx";
import { ProjectCard } from "/components/ProjectCard.tsx";
import ThemeButton from "/islands/ThemeButton.tsx";
import { ProjectType, ProjectDTO } from "/types/ProjectType.ts";
import data from "/data/projectList.json?" with { type: "json" }

function decodeProject(dto: ProjectDTO) : ProjectType {
	return {
		...dto,
		create_at: new Date(dto.create_at)
	}
}

export default function Home() {
  const projects = data.map(project => decodeProject(project))

	return (
		<div class="grid grid-cols-1 md:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_2fr_1fr] gap-x-5 gap-y-6">
			<StickyColumn h_screen>
				<div class="flex flex-col gap-y-5 h-full md:justify-between">
					<div class="flex flex-col gap-y-5">
						<div class="flex justify-between items-center">
							<Title>
								<Logo width="80px"/>
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
					<div class="text-(--color-card-text)">
						Inspiré par <a href="https://nerdy.dev/" target="_blank">Adam Argyle</a> et <a href="https://natalie.sh" target="_blank">Natalie</a>
					</div>
				</div>
			</StickyColumn>
			<div class="flex flex-col gap-y-5 md:py-10">
				<div class="flex items-center h-[44px]">
					<Title>
						Mes projets
					</Title>
				</div>
				<div class="flex flex-col gap-y-3">
					{ projects.map(project => (
						<ProjectCard key={project.slug} project={project}/>
					))}
				</div>
			</div>
		</div>
	);
}
