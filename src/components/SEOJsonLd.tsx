// components/SEOJsonLd.tsx
export default function SEOJsonLd() {
	const json = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: "Elevate DevWorks",
		url: "https://chrisowens.dev",
		image: "https://chrisowens.dev/logo.png",
		address: {
			"@type": "PostalAddress",
			addressLocality: "Richmond",
			addressRegion: "VA",
			addressCountry: "US",
		},
		areaServed: "US",
		sameAs: [
			"https://github.com/<you>",
			"https://www.linkedin.com/in/<you>",
		],
	};
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
		/>
	);
}
