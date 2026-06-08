"use client";
import Image from "next/image";
import { useState } from "react";
import ButtonNavbar from "./ButtonNavbar";

export default function Navbar() {
	const [menu, setMenu] = useState(false);

	return (
		<div className="header fixed w-full p-3">
			<div className="-md:container lg:w-290 mx-auto  relative py-2 rounded-2xl bg-white border border-accent ">
				<nav className="navbar flex justify-between items-center px-4  ">
					<div className="nav-logo flex items-center gap-2 ">
						<Image src="/OctaSys.png" alt="logoNAV" width={40} height={40} />
						<h2 className="font-bold text-xl uppercase">Firyan Syah</h2>
					</div>
					<div className="nav-link gap-5 *:capitalize text-lg font-semibold *:text-dark hidden sm:flex">
						<a href="#">home</a>
						<a href="#">about</a>
						<a href="#">experience</a>
						<a href="#">projects</a>
						<div className="sosmed-button"></div>
					</div>
					<button
						className="sm:hidden nav-menu "
						onClick={() => {
							setMenu(!menu);
						}}
					>
						<i className="ri-menu-line ri-2x"></i>
					</button>
				</nav>
				<div
					className={`absolute w-full rounded-2xl sm:hidden border border-accent ${menu ? "top-18 bg-white opacity-100" : "-top-75 opacity-0"}  transition-all duration-600 sm:transition-none `}
				>
					<div className="grid grid-cols-2 gap-2 font-semibold p-3">
						<div className="flex flex-col *:w-full *:py-1 *:pl-2 capitalize gap-2 " onClick={() => setMenu(!menu)}>
							<a href="#">home</a>
							<a href="#">about</a>
							<a href="#">experience</a>
							<a href="#">projects</a>
						</div>
						<div className="flex flex-col gap-2 text-center *:mx-2 *:py-1 *:rounded-xl *:bg-secondary-200 p-1">
							<ButtonNavbar />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
