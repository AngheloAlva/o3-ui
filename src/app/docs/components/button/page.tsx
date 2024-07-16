import { Button } from "@/components"

export default function DocsPage(): React.ReactElement {
	return (
		<div className="flex items-center justify-center">
			<div className="flex flex-col gap-3">
				<Button>Button</Button>
				<Button size={"icon"}>O3</Button>
				<Button size={"lg"}>Button lg</Button>
				<Button size={"sm"}>Button sm</Button>
				<Button variant={"ghost"}>Ghost</Button>
				<Button variant={"link"}>Link</Button>
				<Button variant={"outline"}>Outline</Button>
				<Button variant={"secondary"}>Secondary</Button>
				<Button variant={"accent"}>Secondary</Button>
			</div>
		</div>
	)
}
