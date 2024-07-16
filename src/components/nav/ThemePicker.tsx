"use client"

import { changeTheme } from "@/utils"

import { Button } from "@/components"

export default function ThemePicker(): React.ReactElement {
	return (
		<div className="flex items-center justify-center gap-2">
			<Button
				variant={"accent"}
				onClick={() => {
					changeTheme("dark")
				}}
			>
				Dark
			</Button>
			<Button
				variant={"secondary"}
				onClick={() => {
					changeTheme("")
				}}
			>
				Light
			</Button>
		</div>
	)
}
