type Theme = "" | "dark"

export const changeTheme = (theme: Theme) => {
	document.querySelector("html")?.setAttribute("data-theme", theme)
}
