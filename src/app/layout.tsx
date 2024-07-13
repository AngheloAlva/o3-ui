import type { Metadata } from "next"
import { inter } from "@/config"

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
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
