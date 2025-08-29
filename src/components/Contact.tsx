// components/Contact.tsx
"use client";

export default function Contact() {
	return (
		<section id="contact" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
			<div className="grid md:grid-cols-2 gap-10">
				<div>
					<h2 className="text-2xl md:text-3xl font-semibold">
						Let’s talk
					</h2>
					<p className="mt-2 text-neutral-700">
						Have a project in mind? I’ll reply within one business
						day.
					</p>
					<ul className="mt-6 space-y-2 text-sm text-neutral-700">
						<li>📍 Richmond, VA</li>
						<li>✉️ hello@elevatedevworks.com</li>
						<li>📞 (555) 000-0000</li>
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
						className="rounded-xl px-5 py-3 text-white font-medium"
						style={{ background: "#2175a2" }}
					>
						Send
					</button>
				</form>
			</div>
		</section>
	);
}
