import { JSXElement } from "/types/JSXElement.ts";
import { ProjectType } from "/types/ProjectType.ts";
import { IconCodeTag, IconGithub, IconLink } from "#icons";

interface ProjectCardProps {
	project: ProjectType
}

export function ProjectCard({project} : ProjectCardProps) {
	return (
			<div class="flex flex-col gap-y-5">
				<div class="flex flex-col gap-y-3">
					<div class="flex flex-col">
						<div class="text-2xl font-bold text-title">{project.title}</div>
						<div class="flex items-center gap-1 text-sm font-medium text-subtitle">
							<div class="h-4 min-w-4 fill-current">
								<IconCodeTag />
							</div>
							{project.tags.join(" · ")}
						</div>
					</div>
					<div class="text-(--color-card-text) text-base/5">
						{project.description}
					</div>
				</div>
				{ project.image !== undefined && 
					<div class="relative overflow-hidden lg:w-4/5 bg-gray-50 border border-primary/10 rounded-xl shadow-lg">
						<img
							class="w-full" 
							src={project.image}
						/>
					</div>
				}
				<div class="flex justify-between items-center gap-x-4">
					<div class="text-xs font-light text-(--color-card-subtext)">
						{project.create_at?.toLocaleDateString("FR-fr", {
							month: "short",
							year: "numeric"
						}).toUpperCase().replace(".", "") || "EN COUR"}
					</div>
					<div class="flex-1 border-b border-(--color-card-subtext)/30" />
					<div class="flex gap-x-3">
						{ project.github !== undefined &&
							<ProjectLink 
								text="GitHub"
								icon={IconGithub} 
								url={project.github}
							/>
						}
						{ project.url !== undefined &&
							<ProjectLink 
								text="Lien"
								icon={IconLink} 
								url={project.url}
							/>
						}
					</div>
				</div>
			</div>
	)
}

interface ProjectLinkProps {
	url: string
	icon: JSXElement
	text: string
}

function ProjectLink(props : ProjectLinkProps) {
	return (
		<a 
			class="flex items-center gap-1 text-sm text-primary" 
			href={props.url}
			target="_blank"
		>
			<div class="h-4 min-w-4 fill-current">
				<props.icon />
			</div>
			{props.text}
		</a>
	)
}