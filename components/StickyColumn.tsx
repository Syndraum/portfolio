import { ComponentChildren } from "preact";

interface StickyColumnProps {
	children?: ComponentChildren
	h_screen: boolean
}

export function StickyColumn({children, h_screen}: StickyColumnProps) {

	return (
		<div>
			<div class={`md:sticky top-0 md:py-10 ${ h_screen ? "md:h-screen" : ""}`}>
				{children}
			</div>
		</div>
	)
}