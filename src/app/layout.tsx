import type { Metadata } from "next";
import "./globals.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-jakarta",
});

export const metadata: Metadata = {
	title: "ChrisOwensDev",
	description: "Building High-Quality Websites for Business",
	themeColor: "#2175a2",
	icons: {
		// If you prefer explicit control in addition to app/icon.png:
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
		other: [
			{
				rel: "mask-icon",
				url: "/safari-pinned-tab.svg",
				color: "#2175a2",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${plusJakarta.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
