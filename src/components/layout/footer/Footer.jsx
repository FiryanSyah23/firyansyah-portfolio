"use client";
import React from "react";
import LogoLinkDetail from "@/components/ui/LogoLinkDetail";
import SectionsLink from "@/components/ui/SectionsLink";
import Badge from "@/components/ui/Badge";

export default function Footer() {
	return (
		<div className="w-full bg-black/55 text-white ">
			<div className="container mx-auto py-10 flex gap-20 max-sm:gap-5 flex-wrap [&_h2]:font-bold max-sm:[&_h2]:text-3xl max-sm:px-2  ">
				<div className="flex flex-col ">
					<div className="w-100 max-sm:w-full mb-1">
						<h2 className="text-4xl ">Firyan Syah</h2>
						<p className="mb-2">Full-Stack Developer | IoT Enthusiast</p>
						<p className="border-b-2 border-b-white">
							Interested in working together or discussing a project? Feel free to reach out.
						</p>
					</div>
					<div className="flex flex-col gap-1 *:p-0.5 *:hover:bg-secondary *:w-56 *:rounded-lg items-start">
						<LogoLinkDetail />
					</div>
				</div>
				<div className="w-55 max-sm:w-full flex flex-col">
					<h2 className="text-4xl border-b-2 border-b-white mb-2">Section</h2>
					<div className="flex flex-col *:text-start *:p-1 *:w-full *:hover:bg-secondary gap-1 *:rounded-lg">
						<SectionsLink />
					</div>
				</div>
				<div className="w-90 max-sm:w-full">
					<h2 className="text-4xl border-b-2 border-b-white mb-2">Tech Stack</h2>
					<div className="flex gap-2 flex-wrap">
						<Badge>Next.js </Badge>
						<Badge>React </Badge>
						<Badge>Node.js </Badge>
						<Badge>MongoDB </Badge>
						<Badge>Tailwind CSS </Badge>
					</div>
				</div>
				<div className="w-75 max-sm:w-full">
					<h2 className="text-4xl border-b-2 border-b-white mb-2">Address & Status</h2>
					<div className="flex flex-col gap-3 text-sm text-gray-300">
						<div className="flex items-center gap-2">
							<span className="w-4 h-4 bg-green-400 rounded-full animate-pulse shrink-0"></span>
							<span>Available for Freelance & Full-time</span>
						</div>

						<div className="flex items-center gap-2">
							<i className="ri-map-pin-line text-secondary text-base"></i>
							<span>Banda Aceh, Indonesia</span>
						</div>

						<div className="flex items-center gap-2">
							<i className="ri-earth-line text-secondary text-base"></i>
							<span>WIB — UTC+7</span>
						</div>

						<div className="flex items-center gap-2">
							<i className="ri-briefcase-line text-secondary text-base"></i>
							<span>Open to Work</span>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center py-3 border-t border-t-white">
				© 2026 Firyan Syah. All rights reserved. Built with Next.js & Tailwind CSS.
			</div>
		</div>
	);
}
