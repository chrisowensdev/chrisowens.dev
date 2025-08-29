// components/Testimonials.tsx
"use client";

import FadeIn from "./FadeIn";

export default function Testimonials() {
	return (
		<section
			className="border-y"
			style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
		>
			<div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
				<h2 className="text-2xl md:text-3xl font-semibold">
					Testimonials
				</h2>
				<div className="mt-8 grid md:grid-cols-3 gap-6">
					{[1, 2, 3].map((i) => (
						<FadeIn key={i} delay={i * 0.05}>
							<figure className="rounded-2xl border bg-white p-6 shadow-sm">
								<blockquote className="text-neutral-800">
									“Our new site is fast, easy to use, and
									already bringing more leads.”
								</blockquote>
								<figcaption className="mt-3 text-sm text-neutral-600">
									Client Name • Company
								</figcaption>
							</figure>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}
