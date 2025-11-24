import { ComponentChildren } from "preact"
import { JSXElement } from "/types/JSXElement.ts";

interface PastilleLinkProps {
	href?: string
	extern?: boolean
	children?: ComponentChildren
	class: string
}

interface PastilleButtonProps {
	onClick?: () => void
	children?: ComponentChildren
	class: string
}

interface PastilleProps {
	icon?: JSXElement
	children?: ComponentChildren
	href?: string
	extern?: boolean
	onClick?: () => void
}

export function Pastille(props: PastilleProps) {
	const Container = (
		props.href !== undefined 
			? PastilleLink
			: PastilleButton
	)

	const padding = props.children !== undefined ? "py-3 px-6" : "p-3"

	return (
		<Container
			{...props}
			class={`
				flex justify-center items-center gap-x-2 ${padding} 
				duration-300 ease-out-cubic rounded-full bg-(--color-card) 
				outline-1 outline-(--color-card-border) shadow-lg box-border 
				hover:bg-primary hover:outline-primary/30 hover:shadow-[0_0_40px_-8px] hover:shadow-primary/50
				active:outline-primary
				group/btn overflow-hidden
			`}
		>
			<div class="h-5 min-w-5 text-primary fill-current group-hover/btn:text-(--color-card) transition-inherit">
				{ props.icon &&
					<props.icon />
				}
			</div>
			{ props.children && (
				<div class="text-xs font-medium text-subtitle group-hover/btn:-translate-y-2/1 transition-inherit">
					<div data={props.children as string} class={`
							relative after:content-[attr(data)] after:absolute after:left-1/2
							after:translate-y-2/1 after:-translate-x-1/2 after:whitespace-nowrap
							after:text-(--color-card)
						`}>
						{props.children}
					</div>
				</div>
			)}
		</Container>
	)
}

function PastilleLink(props : PastilleLinkProps) {
	return (
		<a 
			class={props.class}
			href={props.href}
			target={ props.extern ? "_blank" : "_self"}
		>
			{props.children}
		</a>
	)
}

function PastilleButton(props : PastilleButtonProps) {
	return (
		<button 
			class={`cursor-pointer ${props.class}`}
			type="button"
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
}