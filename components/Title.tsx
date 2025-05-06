import { ComponentChildren } from "preact"
import { JSXElement } from "/types/JSXElement.ts";

interface TitleProps {
	icon?: JSXElement
	children?: ComponentChildren
}

export function Title(props : TitleProps) {
	return (
		<div class="flex gap-x-1 justify-center items-center font-semibold text-lg text-subtitle fill-current">
			{ props.icon && 
				<div class="text-subtitle/60 fill-current h-6 w-6">
					<props.icon />
				</div>
			}
			{props.children}
		</div>
	)
}