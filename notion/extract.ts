import { 
	DateProperties,
	FileProperties,
	MultiSelectProperties,
	RichTextItems,
	RichTextProperties,
	TitleProperties,
	UrlProperties
} from "./type.ts";

function _extractRichTextItem(items : RichTextItems) {
	return items.map(item => item.plain_text).join(" ")
}

export function extractRichText(property: RichTextProperties) {
	return _extractRichTextItem(property.rich_text)
}

export function extractTitle(property: TitleProperties) {
	return _extractRichTextItem(property.title)
}

export function extractMultiSelectText(property: MultiSelectProperties) {
	return property.multi_select.map(elmt => elmt.name)
}

export function extractUrlFileProperties(property: FileProperties) {
	if (property.files.length === 0)
		return undefined
	const file = property.files[0]
	if (file.type === "file")
		return file.file.url
	else if (file.type === "external")
		return file.external.url
	return undefined
}

export function extractDateProperties(property: DateProperties) {
	if (property.date === null)
		return undefined
	return (new Date(property.date.start))
}

export function extractUrlProperty(property: UrlProperties) {
	if (property.url === null)
		return undefined
	return (property.url)
}
