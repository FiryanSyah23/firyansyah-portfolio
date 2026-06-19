"use client";
import React from "react";
import LogoLinkDetail from "@/components/ui/LogoLinkDetail";
import SectionsLink from "@/components/ui/SectionsLink";
import Link from "next/link";

const linkListClass = "flex flex-col gap-1 *:p-0.5 *:hover:bg-secondary *:rounded-lg items-start";

export default function Footer() {
	return (
		<footer className="w-full bg-black/55 text-white">
			<div className="container mx-auto py-10 flex gap-10 max-sm:gap-5 flex-wrap [&_h2]:font-bold [&_h3]:font-bold max-sm:[&_h2]:text-3xl max-sm:[&_h3]:text-3xl max-sm:px-2">
				{/* Identity */}
				<div className="flex flex-col">
					<div className="max-sm:w-full mb-1">
						<h2 className="text-4xl">Firyan Syah</h2>
						<p className="mb-2">Full-Stack Developer | IoT Enthusiast</p>
						<p className="border-b-2 border-b-white pb-2">
							Interested in working together or discussing a project? Feel free to reach out.
						</p>
					</div>
					<div className={`${linkListClass} *:w-56`}>
						<LogoLinkDetail />
					</div>
				</div>

				{/* Section */}
				<div className="basis-52 max-sm:w-full flex flex-col">
					<h3 className="text-4xl border-b-2 border-b-white mb-2">Navigation</h3>
					<div className="flex flex-col *:text-start *:p-1 *:w-full *:hover:bg-secondary gap-1 *:rounded-lg">
						<SectionsLink />
					</div>
				</div>

				{/* Features */}
				<div className="basis-80 max-sm:w-full">
					<h3 className="text-4xl border-b-2 border-b-white mb-2">Explore</h3>
					<div className={`${linkListClass} *:w-56`}>
						<a href="#skillExperience" className="text-left">
							Hover Detail Skills
						</a>
						<Link href="/project">View All Project</Link>
					</div>
				</div>

				{/* Address & Status */}
				<div className="basis-72 max-sm:w-full">
					<h3 className="text-4xl border-b-2 border-b-white mb-2">Address & Status</h3>
					<div className="flex flex-col gap-3 text-sm text-gray-300">
						<div className="flex items-center gap-2">
							<i className="ri-map-pin-line text-secondary text-base" aria-hidden="true"></i>
							<span>Banda Aceh, Indonesia</span>
						</div>

						<div className="flex items-center gap-2">
							<span
								className="w-4 h-4 bg-green-400 rounded-full animate-pulse shrink-0"
								role="status"
								aria-label="Open to work"
							></span>
							<span>Open to Work</span>
						</div>

						<div className="flex items-center gap-2">
							<i className="ri-briefcase-line text-secondary text-base" aria-hidden="true"></i>
							<span>Available for Freelance & Full-time</span>
						</div>

						<div className="flex items-center gap-2">
							<i className="ri-earth-line text-secondary text-base" aria-hidden="true"></i>
							<span>WIB — UTC+7</span>
						</div>
					</div>
				</div>
			</div>

			<div className="text-center py-3 border-t border-t-white text-sm">
				© {new Date().getFullYear()} Firyan Syah. All rights reserved. Built with Next.js & Tailwind
				CSS.
			</div>
		</footer>
	);
}
