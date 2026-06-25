"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SosmedLogoLink from "../../ui/SosmedLogoLink";

export default function NavbarProject() {
	const [menu, setMenu] = useState(false);
	return (
		<div className="header w-full  fixed text-text pt-5 px-3 z-9999">
			<nav className="container xl:w-290 mx-auto bg-panel/98  md:py-2 rounded-xl relative outline-white outline-1">
				<div className="flex justify-between items-center px-8 ">
					<Link href="/" rel="noopener noreferrer" className="nav-title flex gap-2 items-center">
						<Image
							src={"/FISOCTASYM.png"}
							alt="Fisoctasym logo mini"
							width={50}
							height={50}
							className="w-8 h-auto"
						/>
						<span className="font-bold lg:text-2xl text-lg tracking-widest text-nowrap">FISOCTASYM </span>
					</Link>

					<div className="hidden md:flex items-center gap-5">
						<div className=" text-4xl *:hover:text-secondary flex gap-2  ">
							<SosmedLogoLink />
						</div>
						<a
							href="/files/CV_Firyan_Syah.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className=" rounded-lg bg-primary hover:bg-secondary active:bg-secondary outline p-2 duration-300 active:translate-y-1 shadow-[2px_4px_1px_.5px_rgba(0,0,0)] active:shadow-none text-sm text-nowrap"
						>
							View my CV
						</a>
					</div>

					<button
						className="menu-bar md:hidden"
						onClick={() => {
							setMenu((prev) => !prev);
						}}
					>
						<i className="ri-menu-line ri-2x"></i>
					</button>
				</div>
				<div
					className={`absolute md:hidden bg-panel/98 ${menu ? "top-14 opacity-100" : "-top-105 opacity-0 "} p-5 w-full rounded-xl duration-500`}
					onClick={() => setMenu(false)}
				>
					<div className="flex flex-col gap-2">
						<div className="button-link-sosmed flex flex-col gap-2 items-center ">
							<div className="group-logo-sosmed text-4xl  *:hover:text-secondary *:active:text-secondary flex gap-5 pt-2">
								<SosmedLogoLink />
							</div>

							<a
								href="/files/CV_Firyan_Syah.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-primary p-1 rounded-xl hover:bg-secondary active:bg-secondary self-stretch  text-center outline-2 hover:outline-offset-3 active:outline-offset-3"
							>
								View my CV
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
