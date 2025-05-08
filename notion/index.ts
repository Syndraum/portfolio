import { Client, isFullPage } from "@notionhq/client"
import { ProjectType } from "../types/ProjectType.ts";
import { decodeNotionProject, NotionProjectDTO } from "./dto.ts";

const notionAPI = new Client({
	auth: Deno.env.get("NOTION_BEARER_TOKEN")
})

function getlistProjects() {
	return notionAPI.databases.query({
		database_id: Deno.env.get("NOTION_ID_DATABASE") || "", // 
		filter: {
			property: "is_publish",
			checkbox: {
				equals: true
			}
		},
		sorts: [
			{
				property: "create_at",
				direction: "descending"
			}
		]
	}).then((res) => {
		return res.results.filter((page) =>
			isFullPage(page)
		).map((page) => 
			decodeNotionProject(page.properties as NotionProjectDTO)
		)
	})
	.catch(() => {
		return [] as ProjectType[]
	})
}

export { notionAPI as default, getlistProjects}