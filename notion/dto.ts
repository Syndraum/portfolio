import { ProjectType } from "../types/ProjectType.ts";
import { 
	CheckboxProperties, 
	DateProperties, 
	FileProperties, 
	MultiSelectProperties, 
	RichTextItems, 
	RichTextProperties, 
	TitleProperties, 
	UrlProperties
} from "./type.ts"

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

function extractRichTextItem(items : RichTextItems) {
	return items.map(item => item.plain_text).join(" ")
}

function getRichText(property: RichTextProperties) {
	return extractRichTextItem(property.rich_text)
}

function getTitle(property: TitleProperties) {
	return extractRichTextItem(property.title)
}

function getMultiSelectText(property: MultiSelectProperties) {
	return property.multi_select.map(elmt => elmt.name)
}

function getUrlFileProperties(property: FileProperties) {
	if (property.files.length === 0)
		return undefined
	const file = property.files[0]
	if (file.type === "file")
		return file.file.url
	else if (file.type === "external")
		return file.external.url
	return undefined
}

function getDateProperties(property: DateProperties) {
	if (property.date === null)
		return undefined
	return (new Date(property.date.start))
}

function getUrlProperty(property: UrlProperties) {
	if (property.url === null)
		return undefined
	return (property.url)
}

function decodeNotionProject(dto: NotionProjectDTO) : ProjectType {
	return {
		slug: getRichText(dto.slug),
		title: getTitle(dto.name),
		tags: getMultiSelectText(dto.tags),
		description: getRichText(dto.description),
		image: getUrlFileProperties(dto.photo),
		github: getUrlProperty(dto.github),
		url: getUrlProperty(dto.url),
		create_at: getDateProperties(dto.create_at) || new Date() //
	}
}

export {type NotionProjectDTO, decodeNotionProject}