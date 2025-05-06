import { IconSun, IconMoon } from "#icons";
import { Pastille } from "/components/Pastille.tsx";
import { useTheme } from "/theme/index.tsx";


export default function ThemeButton() {
	const [theme, toggleTheme] = useTheme()

	return(
		<Pastille onClick={toggleTheme} icon={theme.value === "light" ? IconSun : IconMoon}/>
	)
}