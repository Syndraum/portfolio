import { ProjectType } from "../types/ProjectType.ts";
import { extractDateProperties, extractMultiSelectText, extractRichText, extractTitle, extractUrlFileProperties, extractUrlProperty } from "./extract.ts";
import { CheckboxProperties, DateProperties, FileProperties, MultiSelectProperties, RichTextProperties, TitleProperties, UrlProperties } from "./type.ts"

type NotionProjectDTO = {
	is_publish: CheckboxProperties
	photo: FileProperties
	description: RichTextProperties
	slug: RichTextProperties
	create_at: DateProperties
	tags: MultiSelectProperties
	github: UrlProperties
	url: UrlProperties
	name: TitleProperties
}

function decodeNotionProject(dto: NotionProjectDTO) : ProjectType {
	return {
		slug: extractRichText(dto.slug),
		title: extractTitle(dto.name),
		tags: extractMultiSelectText(dto.tags),
		description: extractRichText(dto.description),
		image: extractUrlFileProperties(dto.photo),
		github: extractUrlProperty(dto.github),
		url: extractUrlProperty(dto.url),
		create_at: extractDateProperties(dto.create_at)
	}
}

export {type NotionProjectDTO, decodeNotionProject}