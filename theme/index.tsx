import { useEffect } from "preact/hooks"
import { useSignal } from "@preact/signals";

type ThemeType = "light" | "dark"

function isSytemeThemeDark() {
	if (typeof window === "undefined")
		return undefined
	return globalThis.matchMedia("(prefers-color-scheme: dark)").matches
}

function getSystemTheme() : ThemeType {
	return isSytemeThemeDark() ? "dark" : "light"
}

function initTheme() : ThemeType {
	let theme :ThemeType = getSystemTheme()

	if (typeof window === "undefined")
		return theme
	if ("theme" in localStorage)
		theme = localStorage.theme
	if (theme === "dark")
		document.documentElement.classList.add("dark")
	return theme
}

function useTheme() {
	const theme = useSignal<ThemeType>(initTheme())
	
	useEffect(() => {
		if (typeof window === "undefined")
			return
		const media = globalThis.matchMedia("(prefers-color-scheme: dark)")
		media.addEventListener("change", handleSystemTheme)
		return () => media.removeEventListener("change", handleSystemTheme)
	})

	function handleSystemTheme() {
		if (typeof window === "undefined")
			return
		if ("theme" in localStorage)
			return
		theme.value = theme.value === "light" ? "dark" : "light"
		document.documentElement.classList.toggle("dark")
	}

	function toggleTheme() {
		theme.value = theme.value === "light" ? "dark" : "light"
		if (typeof document !== "undefined") {
			document.documentElement.classList.toggle("dark")
			localStorage.theme = theme.value;
		}
	}

	return [theme, toggleTheme] as const
}

export {useTheme}