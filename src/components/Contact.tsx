// components/Contact.tsx (excerpt)
"use client";
import { useEffect, useState } from "react";

export default function Contact() {
	const [status, setStatus] = useState<
		"idle" | "sending" | "success" | "error"
	>("idle");
	const [error, setError] = useState<string | null>(null);
	const [startedAt, setStartedAt] = useState<string>("");

	useEffect(() => setStartedAt(String(Date.now())), []);

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (status === "sending") return;
		setStatus("sending");
		setError(null);

		const form = e.currentTarget;
		const data = new FormData(form);
		data.set("startedAt", startedAt);

		try {
			const res = await fetch("/contact.php", {
				method: "POST",
				body: data,
			});
			const json = await res.json().catch(() => null);
			if (!res.ok || !json?.ok) {
				setError(json?.error ?? "Something went wrong.");
				setStatus("error");
				return;
			}
			form.reset();
			setStartedAt(String(Date.now()));
			setStatus("success");
		} catch {
			setError("Network error. Please try again.");
			setStatus("error");
		}
	}

	return (
		<form onSubmit={onSubmit} className="grid gap-4">
			{/* Honeypot (hidden) */}
			<input
				type="text"
				name="website"
				tabIndex={-1}
				autoComplete="off"
				className="hidden"
				aria-hidden="true"
			/>
			<input type="hidden" name="startedAt" value={startedAt} />
			{/* ... your fields and submit button ... */}
		</form>
	);
}
