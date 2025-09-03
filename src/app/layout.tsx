import type { Metadata } from "next";
import "./globals.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import SEOJsonLd from "@/components/SEOJsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-jakarta",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://chrisowens.dev"),
	title: { default: "ChrisOwensDev", template: "%s | ChrisOwensDev" },
	description: "Building High-Quality Websites for Business",
	openGraph: {
		type: "website",
		url: "https://chrisowens.dev",
		siteName: "Elevate DevWorks",
		images: [
			{
				url: "/og-default-1200x630.jpg",
				width: 1200,
				height: 630,
				alt: "Elevate DevWorks",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		images: ["/og-default-1200x630.jpg"],
	},
	alternates: { canonical: "https://chrisowens.dev" },
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
				<SEOJsonLd />
				{children}
			</body>
		</html>
	);
}
