"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

// Toggle between "personal" and "agency" to switch copy & tone
const MODE: "personal" | "agency" = "personal";

const copy = {
	personal: {
		brand: "Chris Owens",
		tagline: "Websites that help small businesses grow.",
		sub: "I build fast, modern sites that look great and bring results.",
		cta: "Work with me",
		aboutTitle: "About Me",
		aboutBody:
			"I'm Chris — a full‑stack developer helping local businesses with clean, SEO‑focused websites that convert.",
		servicesTitle: "Services",
		services: [
			{
				title: "Custom Websites",
				body: "Custom-built on Next.js or WordPress with accessibility-first, conversion-focused design. Includes sitemap, content migration, and a launch checklist.",
				points: [
					"Discovery workshop & sitemap",
					"Wireframes → polished UI",
					"Responsive, mobile-first build",
					"Accessibility (WCAG) & performance",
					"Content migration & redirects",
				],
			},
			{
				title: "Hosting & Maintenance",
				body: "Managed hosting with SSL/CDN, automated backups, and proactive updates. Includes uptime & security monitoring plus a monthly health report.",
				points: [
					"Managed hosting (SSL/CDN/backups)",
					"Core/theme/plugin updates",
					"Uptime & security monitoring",
					"Bug fixes & small tweaks",
					"Monthly report (traffic & SEO)",
				],
			},
			{
				title: "SEO & Growth",
				body: "Search visibility and measurement done right—keyword mapping, on‑page SEO, Core Web Vitals tuning, and analytics/goals so you know what’s working.",
				points: [
					"Keyword research & page mapping",
					"On‑page SEO (titles, meta, schema)",
					"Core Web Vitals & performance",
					"Analytics & goals setup",
					"Quarterly strategy check‑in",
				],
			},
		],
		portfolioIntro: "Recent demos & client work",
		contactTitle: "Let’s talk",
		contactBody:
			"Have a project in mind? I’ll reply within one business day.",
		footerNote:
			"© " +
			new Date().getFullYear() +
			" Chris Owens • Powered by Elevate DevWorks",
	},
	agency: {
		brand: "Elevate DevWorks",
		tagline: "Websites that elevate your business.",
		sub: "We design, build, and host high‑performing websites for small businesses.",
		cta: "Free website assessment",
		aboutTitle: "Why Choose Us",
		aboutBody:
			"Boutique studio led by Chris Owens. We ship fast, secure, SEO‑ready websites focused on ROI.",
		servicesTitle: "Services & Plans",
		services: [
			{
				title: "Design & Development",
				body: "Modern, fast, and accessible sites built to convert. From sitemap and wireframes to polished UI and launch hardening.",
				points: [
					"Sitemap, wireframes, content planning",
					"Component‑driven UI (Next.js)",
					"Responsive & accessible (WCAG)",
					"QA, redirects, launch checklist",
					"Training & handoff",
				],
			},
			{
				title: "Hosting & Care Plans",
				body: "Reliable hosting plus ongoing care—security patches, updates, backups, uptime monitoring, and a monthly report.",
				points: [
					"Managed hosting (SSL/CDN/backups)",
					"Updates & security hardening",
					"Uptime & performance monitoring",
					"Content & bug‑fix support",
					"Monthly insights report",
				],
			},
			{
				title: "SEO & Analytics",
				body: "Increase qualified traffic and measure outcomes—on‑page SEO, schema, Core Web Vitals, and dashboards that track leads.",
				points: [
					"Keyword & content strategy",
					"On‑page SEO & schema",
					"Performance tuning (CWV)",
					"GA4 & goal tracking",
					"Quarterly reviews",
				],
			},
		],
		portfolioIntro: "Industries we serve",
		contactTitle: "Start your project",
		contactBody:
			"Tell us about your goals and we’ll propose the right plan.",
		footerNote:
			"© " +
			new Date().getFullYear() +
			" Elevate DevWorks • Founded by Chris Owens",
	},
}[MODE];

export default function Home() {
	const [mobileOpen, setMobileOpen] = useState(false);
	useEffect(() => {
		if (mobileOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
		return () => document.body.classList.remove("overflow-hidden");
	}, [mobileOpen]);
	return (
		<main className="min-h-screen bg-neutral-50 text-neutral-900">
			{/* NAV */}
			<header
				className="sticky top-0 z-50 border-b backdrop-blur"
				style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
			>
				<div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div
							className="h-9 w-9 rounded-2xl bg-neutral-900"
							aria-hidden
						>
							<Image
								width={100}
								height={100}
								src="/navbar-profile.png"
								className="rounded-2xl"
								alt="profile-picture"
							/>
						</div>
						<span className="font-semibold">{copy.brand}</span>
					</div>
					<nav className="hidden md:flex gap-6 text-sm">
						<a href="#about" className="hover:opacity-70">
							About
						</a>
						<a href="#services" className="hover:opacity-70">
							Services
						</a>
						<a href="#work" className="hover:opacity-70">
							Work
						</a>
						<a href="#contact" className="hover:opacity-70">
							Contact
						</a>
					</nav>
					<div className="flex items-center gap-2">
						<a
							href="#contact"
							className="hidden md:inline-flex rounded-xl bg-[#2175a2] text-white px-3 py-2 text-sm hover:opacity-90 transition\"
						>
							{copy.cta}
						</a>
						<button
							className="md:hidden inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm"
							aria-expanded={mobileOpen}
							aria-controls="mobile-menu"
							aria-label="Toggle menu"
							onClick={() => setMobileOpen((v) => !v)}
						>
							<svg
								className={`${
									mobileOpen ? "hidden" : "block"
								} h-5 w-5`}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
							>
								<path
									strokeWidth="2"
									strokeLinecap="round"
									d="M4 7h16M4 12h16M4 17h16"
								/>
							</svg>
							<svg
								className={`${
									mobileOpen ? "block" : "hidden"
								} h-5 w-5`}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
							>
								<path
									strokeWidth="2"
									strokeLinecap="round"
									d="M6 6l12 12M18 6l-12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
			</header>

			{/* MOBILE OVERLAY MENU */}
			{mobileOpen && (
				<div className="md:hidden fixed inset-0 z-[60]">
					<div
						className="absolute inset-0"
						style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
						onClick={() => setMobileOpen(false)}
					/>
					<nav
						id="mobile-menu"
						className="absolute top-14 left-0 right-0 mx-4 rounded-2xl border bg-white p-4 shadow-lg"
					>
						<a
							href="#about"
							onClick={() => setMobileOpen(false)}
							className="block rounded-lg px-3 py-3 text-base hover:bg-neutral-50"
						>
							About
						</a>
						<a
							href="#services"
							onClick={() => setMobileOpen(false)}
							className="block rounded-lg px-3 py-3 text-base hover:bg-neutral-50"
						>
							Services
						</a>
						<a
							href="#work"
							onClick={() => setMobileOpen(false)}
							className="block rounded-lg px-3 py-3 text-base hover:bg-neutral-50"
						>
							Work
						</a>
						<a
							href="#contact"
							onClick={() => setMobileOpen(false)}
							className="mt-2 block rounded-xl bg-[#2175a2] px-4 py-3 text-center text-white font-medium hover:opacity-90\"
						>
							{copy.cta}
						</a>
					</nav>
				</div>
			)}

			{/* HERO */}
			<section className="relative overflow-hidden">
				<div
					className="absolute inset-0 -z-10"
					style={{
						background:
							"linear-gradient(to bottom, rgba(33,117,162,0.05), rgba(250,250,250,1), rgba(33,163,124,0.05))",
					}}
				/>
				<div className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
					<div>
						<h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
							{copy.tagline}
						</h1>
						<p className="mt-5 text-lg text-neutral-700">
							{copy.sub}
						</p>
						<div className="mt-8 flex gap-3">
							<a
								href="#contact"
								className="rounded-xl bg-[#2175a2] px-5 py-3 text-white font-medium hover:opacity-90\"
							>
								{copy.cta}
							</a>
							<a
								href="#work"
								className="rounded-xl border border-[#2175a2] text-[#2175a2] px-5 py-3 font-medium hover:bg-neutral-50\"
							>
								View work
							</a>
						</div>
						<div className="mt-8 flex items-center gap-6 text-sm text-neutral-600">
							<span>Fast • SEO‑ready • Mobile‑first</span>
							<span className="hidden md:inline">|</span>
							<span>Richmond, VA</span>
						</div>
					</div>
					<div className="relative">
						<div
							className="w-full rounded-3xl bg-white border border-neutral-200 shadow-lg overflow-hidden"
							style={{ aspectRatio: "4 / 3" }}
						>
							{/* Brand border accent */}
							<div
								className="absolute inset-0 pointer-events-none"
								style={{
									padding: 2,

									WebkitMask:
										"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
									WebkitMaskComposite: "xor" as any,
									maskComposite: "exclude",
								}}
							/>

							{/* Device frame */}
							<div
								className="h-full w-full grid place-items-center"
								style={{ backgroundColor: "rgba(0,0,0,0.02)" }}
							>
								<div
									className="relative w-[92%] rounded-xl border border-neutral-200 bg-black overflow-hidden"
									style={{ aspectRatio: "16 / 10" }}
								>
									{/* Replace /hero-demo.mp4 and /hero-poster.jpg with your assets in /public */}
									<video
										src="/hero-demo.mp4"
										poster="/hero-poster.jpg"
										autoPlay
										muted
										loop
										playsInline
										className="absolute inset-0 h-full w-full object-cover"
									/>
									{/* Optional top “camera” dot for a laptop vibe */}
									<div
										className="absolute top-2 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full"
										style={{
											backgroundColor:
												"rgba(255,255,255,0.6)",
										}}
									/>
								</div>
							</div>
						</div>

						{/* Floating brand chip (decorative) */}
						<div
							className="pointer-events-none absolute -bottom-6 -left-6 hidden md:block h-28 w-28 rounded-3xl"
							style={{
								background:
									"linear-gradient(135deg, #2175a2 0%, #21a37c 100%)",
								opacity: 0.6,
							}}
						/>
					</div>
					{/* <div className="relative">
						<div
							className="w-full rounded-3xl bg-white shadow-lg border border-neutral-200 grid place-items-center"
							style={{ aspectRatio: "4 / 3" }}
						>
							<div className="text-center">
								<div className="mx-auto h-12 w-12 rounded-full bg-neutral-200" />
								<p className="mt-3 text-sm text-neutral-500">
									Hero Visual Placeholder
								</p>
							</div>
						</div>
						<div
							className="pointer-events-none absolute -bottom-6 -left-6 hidden md:block h-28 w-28 rounded-3xl bg-neutral-200"
							style={{ opacity: 0.6 }}
						/>
					</div> */}
				</div>
			</section>

			{/* ABOUT */}
			<section
				id="about"
				className="mx-auto max-w-7xl px-4 py-16 md:py-24"
			>
				<div className="grid md:grid-cols-3 gap-10 items-start">
					<div className="md:col-span-1">
						<h2 className="text-2xl md:text-3xl font-semibold">
							{copy.aboutTitle}
						</h2>
					</div>
					<div className="md:col-span-2">
						<p className="text-neutral-700 leading-relaxed">
							{copy.aboutBody}
						</p>
						<ul className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
							{[
								"Core Web Vitals‑minded",
								"Next.js / WordPress",
								"Accessibility (WCAG)",
							].map((t) => (
								<li
									key={t}
									className="rounded-xl border bg-white px-4 py-3  style={{ borderColor: 'rgba(33,163,124,0.4)' }}"
								>
									{t}
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* SERVICES */}
			<section
				id="services"
				className="border-y"
				style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
			>
				<div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
					<h2 className="text-2xl md:text-3xl font-semibold">
						{copy.servicesTitle}
					</h2>
					<div className="mt-8 grid md:grid-cols-3 gap-6">
						{copy.services.map((s) => (
							<article
								key={s.title}
								className="rounded-2xl border bg-white p-6 shadow-sm border-t-4"
								style={{ borderTopColor: "#21a37c" }}
							>
								<h3 className="text-lg font-semibold">
									{s.title}
								</h3>
								<p className="mt-2 text-sm text-neutral-700">
									{s.body}
								</p>
								<ul className="mt-4 space-y-1 text-sm text-neutral-600">
									{(
										s.points ?? [
											"Discovery & planning",
											"Design & development",
											"Launch & support",
										]
									).map((pt) => (
										<li key={pt}>• {pt}</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* WORK */}
			<section
				id="work"
				className="mx-auto max-w-7xl px-4 py-16 md:py-24"
			>
				<div className="flex items-end justify-between gap-6">
					<h2 className="text-2xl md:text-3xl font-semibold">
						{MODE === "personal" ? "Portfolio" : "Our Work"}
					</h2>
					<Link
						href="#"
						className="text-sm underline underline-offset-4"
					>
						See all
					</Link>
				</div>
				<p className="mt-2 text-neutral-600">
					{MODE === "personal"
						? "Recent demos & client work"
						: "Industries we serve"}
				</p>
				<div className="mt-8 grid md:grid-cols-3 gap-6">
					{[
						{ title: "HVAC Demo", tag: "Home Services" },
						{ title: "Law Firm", tag: "Professional Services" },
						{ title: "Boutique Fitness", tag: "Local Business" },
					].map((card) => (
						<div
							key={card.title}
							className="group rounded-2xl overflow-hidden border bg-white shadow-sm"
						>
							<div
								className="bg-neutral-200"
								style={{ aspectRatio: "4 / 3" }}
							/>
							<div className="p-4">
								<div className="flex items-center justify-between">
									<h3 className="font-semibold">
										{card.title}
									</h3>
									<span className="text-xs rounded-full border border-[#21a37c] text-[#21a37c] px-2 py-1\">
										{card.tag}
									</span>
								</div>
								<p className="mt-1 text-sm text-neutral-600">
									Clean, conversion‑focused, mobile‑first.
								</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* TESTIMONIALS */}
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
							<figure
								key={i}
								className="rounded-2xl border bg-white p-6 shadow-sm"
							>
								<blockquote className="text-neutral-800">
									“Our new site is fast, easy to use, and
									already bringing more leads.”
								</blockquote>
								<figcaption className="mt-3 text-sm text-neutral-600">
									Client Name • Company
								</figcaption>
							</figure>
						))}
					</div>
				</div>
			</section>

			{/* CONTACT */}
			<section
				id="contact"
				className="mx-auto max-w-7xl px-4 py-16 md:py-24"
			>
				<div className="grid md:grid-cols-2 gap-10">
					<div>
						<h2 className="text-2xl md:text-3xl font-semibold">
							{copy.contactTitle}
						</h2>
						<p className="mt-2 text-neutral-700">
							{copy.contactBody}
						</p>
						<ul className="mt-6 space-y-2 text-sm text-neutral-700">
							<li>📍 Richmond, VA</li>
							<li>✉️ chris@chrisowens.dev</li>
							<li>📞 (804) 573‑9988</li>
						</ul>
					</div>
					<form className="rounded-2xl border bg-white p-6 shadow-sm grid gap-4">
						<div>
							<label className="text-sm">Name</label>
							<input
								className="mt-1 w-full rounded-lg border px-3 py-2"
								placeholder="Your name"
							/>
						</div>
						<div>
							<label className="text-sm">Email</label>
							<input
								type="email"
								className="mt-1 w-full rounded-lg border px-3 py-2"
								placeholder="you@example.com"
							/>
						</div>
						<div>
							<label className="text-sm">Message</label>
							<textarea
								className="mt-1 w-full rounded-lg border px-3 py-2"
								rows={4}
								placeholder="Tell me about your project"
							/>
						</div>
						<button
							type="submit"
							className="rounded-xl bg-neutral-900 px-5 py-3 text-white font-medium hover:opacity-90"
						>
							{copy.cta}
						</button>
					</form>
				</div>
			</section>

			{/* FOOTER */}
			<footer className="border-t bg-white">
				<div className="mx-auto max-w-7xl px-4 py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-4">
					<p>{copy.footerNote}</p>
					<div className="flex gap-4">
						<Link href="#" className="hover:opacity-70">
							Privacy
						</Link>
						<Link href="#" className="hover:opacity-70">
							Terms
						</Link>
					</div>
				</div>
			</footer>
		</main>
	);
}
