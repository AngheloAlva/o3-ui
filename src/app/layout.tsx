import type { Metadata } from "next"
import { inter } from "@/config"

import { Navbar } from "@/components"

import "./globals.css"

export const metadata: Metadata = {
	title: "O3 ui",
	description: "Design system",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" data-theme="dark">
			<body className={`${inter.className} bg-background`}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
