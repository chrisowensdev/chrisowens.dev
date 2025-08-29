// components/Work.tsx
"use client";

import FadeIn from "./FadeIn";

export default function Work() {
	const items = [
		{ title: "HVAC Demo", tag: "Home Services" },
		{ title: "Law Firm", tag: "Professional Services" },
		{ title: "Boutique Fitness", tag: "Local Business" },
	];
	return (
		<section id="work" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
			<div className="flex items-end justify-between gap-6">
				<h2 className="text-2xl md:text-3xl font-semibold">Our Work</h2>
				<a href="#" className="text-sm underline underline-offset-4">
					See all
				</a>
			</div>
			<p className="mt-2 text-neutral-600">Industries we serve</p>
			<div className="mt-8 grid md:grid-cols-3 gap-6">
				{items.map((card, i) => (
					<FadeIn key={card.title} delay={i * 0.05}>
						<div className="group rounded-2xl overflow-hidden border bg-white shadow-sm">
							<div
								className="bg-neutral-200"
								style={{ aspectRatio: "4 / 3" }}
							/>
							<div className="p-4">
								<div className="flex items-center justify-between">
									<h3 className="font-semibold">
										{card.title}
									</h3>
									<span className="text-xs rounded-full border px-2 py-1 text-neutral-600">
										{card.tag}
									</span>
								</div>
								<p className="mt-1 text-sm text-neutral-600">
									Clean, conversion-focused, mobile-first.
								</p>
							</div>
						</div>
					</FadeIn>
				))}
			</div>
		</section>
	);
}
