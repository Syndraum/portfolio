export type ProjectType = {
	slug: string
	title: string
	tags: string[]
	description: string
	image?: string
	github?: string
	url?: string
	create_at: Date
}

export type ProjectDTO = {
	slug: string
	title: string
	tags: string[]
	description: string
	image?: string
	github?: string
	url?: string
	create_at: string
}
