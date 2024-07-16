import ThemePicker from "./ThemePicker"

export default function Navbar(): React.ReactElement {
	return (
		<nav className="flex w-full items-center justify-between px-4 py-2.5">
			<p className="text-text text-2xl font-bold">O3-ui</p>

			<div>
				<ThemePicker />
			</div>
		</nav>
	)
}
