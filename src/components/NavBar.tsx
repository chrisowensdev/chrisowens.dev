"use client";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "motion/react";
import Link from "next/link";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/services", label: "Services" },
	{ href: "/portfolio", label: "Portfolio" },
	{ href: "/contact", label: "Contact" },
];

export default function NavBar() {
	const [open, setOpen] = useState(false);

	return (
		<nav className="bg-white shadow fixed w-full z-20">
			<div className="container mx-auto px-6 py-4 flex justify-between items-center">
				<div className="text-xl font-bold">Chris Owens</div>
				<div className="hidden md:flex space-x-6">
					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="hover:text-blue-500 transition"
						>
							{link.label}
						</Link>
					))}
				</div>
				<button
					onClick={() => setOpen(!open)}
					className="md:hidden focus:outline-none"
				>
					{open ? <HiX size={24} /> : <HiMenu size={24} />}
				</button>
			</div>
			<motion.div
				initial={{ height: 0 }}
				animate={{ height: open ? "auto" : 0 }}
				transition={{ duration: 0.3 }}
				className="overflow-hidden md:hidden bg-white"
			>
				<div className="px-6 pt-2 pb-4 space-y-2">
					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="block hover:text-blue-500 transition"
						>
							{link.label}
						</Link>
					))}
				</div>
			</motion.div>
		</nav>
	);
}
