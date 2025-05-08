import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"

type PageProperties = PageObjectResponse["properties"]
type PagePropertiesTypes = PageProperties[string]["type"]
type ExtractPageProperties<T extends PagePropertiesTypes> = Extract<PageProperties[string], {type: T}>

export type DateProperties			= ExtractPageProperties<"date">
export type RichTextProperties		= ExtractPageProperties<"rich_text">
export type CheckboxProperties		= ExtractPageProperties<"checkbox">
export type FileProperties			= ExtractPageProperties<"files">
export type MultiSelectProperties	= ExtractPageProperties<"multi_select">
export type UrlProperties			= ExtractPageProperties<"url">
export type TitleProperties			= ExtractPageProperties<"title">

export type RichTextItems = RichTextProperties["rich_text"]