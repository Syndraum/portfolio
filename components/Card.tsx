import { ComponentChildren } from "preact"

interface CardProps {
	id?: string
	children?: ComponentChildren
}

export function Card({id, children} : CardProps) {
	return (
		<div id={id} class={`
				rounded-xl px-4 py-6
				bg-(--color-card)
				border border-(--color-card-border)
				shadow-lg 
				duration-600 ease-in-out
				hover:shadow-sm
			`
		}>
			{children}
		</div>
	)
}