// components/Work.tsx
"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

import Container from "./Container";

import hvac from "../../public/hvac.png";
import law from "../../public/law.png";
import invoiceways from "../../public/invoiceways.png";

export default function Work() {
	const items = [
		{
			title: "HVAC Demo",
			tag: "Home Services",
			img: hvac,
			alt: "HVAC website demo",
			desc: "Fast, mobile-first site with a quote-request funnel, service-area pages, and reviews to drive calls.",
		},
		{
			title: "Law Firm",
			tag: "Professional Services",
			img: law,
			alt: "Law firm website",
			desc: "Trust-first layout with clear practice areas, intake form, and badges—built to convert consultations.",
		},
		{
			title: "Invoice Ways",
			tag: "Mobile App",
			img: invoiceways,
			alt: "InvoiceWays Landing Page",
			desc: "Cross-platform invoicing app (Web/iOS/Android) with estimates, branded PDFs, and Stripe-powered payments.",
		},
	];
	return (
		<section id="work">
			<Container className="mx-auto max-w-7xl px-4 py-16 md:py-24">
				<div className="flex items-end justify-between gap-6">
					<h2 className="text-2xl md:text-3xl font-semibold">
						My Work
					</h2>
					{/* <a
						href="#"
						className="text-sm underline underline-offset-4"
					>
						See all
					</a> */}
				</div>
				<p className="mt-2 text-neutral-600">Industries we serve</p>
				<div className="mt-8 grid md:grid-cols-3 gap-6">
					{items.map((card, i) => (
						<FadeIn key={card.title} delay={i * 0.05}>
							<div className="group rounded-2xl overflow-hidden border bg-white shadow-sm">
								<div
									className="relative"
									style={{ aspectRatio: "4 / 3" }}
								>
									<Image
										src={card.img} // static import object
										alt={card.alt}
										fill
										placeholder="blur" // ✅ blur works with static imports
										className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										priority={i === 0}
									/>
								</div>
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
										{card.desc}
									</p>
								</div>
							</div>
						</FadeIn>
					))}
				</div>
			</Container>
		</section>
	);
}
