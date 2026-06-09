"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
	const [menu, setMenu] = useState(false);

	return (
		<div className="header w-full 3 fixed text-text pt-5 px-3 ">
			<div className="container lg:w-330 mx-auto bg-panel sm:py-1 rounded-xl relative">
				<div className="flex justify-between items-center px-8 ">
					<div className="nav-title flex gap-2 items-center">
						<Image src={"/FIROCTASYS.png"} alt="LOGOPAGE" width={25} height={25} className="" />
						<a href="#">
							<h2 className=" font-bold lg:text-xl text-lg tracking-widest text-nowrap">FIRYAN SYAH</h2>
						</a>
					</div>

					<div className="group-action-link flex items-center gap-5">
						<div className="navlink  capitalize gap-2 md:flex hidden font-semibold *:sm:hover:bg-secondary *:p-1.5 *:rounded-ee-2xl *:rounded-ss-2xl *:hover:outline *:transition-all *:duration-500 *:ease-in-out">
							<a href="#">Home</a>
							<a href="#">about</a>
							<a href="#">experience</a>
							<a href="#">project</a>
						</div>

						<div className="button-link-sosmed hidden md:flex items-center gap-2 ">
							<div className="group-logo-sosmed ri-3x *:hover:text-secondary">
								<a href="https://github.com/FiryanSyah23">
									<i className="ri-github-fill"></i>
								</a>
							</div>
							<button className=" rounded-ee-2xl rounded-ss-2xl bg-primary hover:bg-secondary outline p-2 duration-300 active:translate-y-1 shadow-[2px_6px_8px_1px_rgba(0,0,0)] active:shadow-none text-sm text-nowrap">
								CV Firyan Syah
							</button>
						</div>
					</div>

					<button
						className="menu-bar md:hidden"
						onClick={() => {
							setMenu(!menu);
						}}
					>
						<i className="ri-menu-line ri-2x"></i>
					</button>
				</div>

				<div className={`absolute md:hidden bg-panel/70 ${menu ? "top-16 opacity-100" : "-top-105 opacity-0 "} p-5 w-full rounded-xl  duration-500`}>
					<div className="flex flex-col gap-2">
						<div className="nav-panel-link flex flex-col *:py-2 text-center  *:rounded-xl  *:hover:bg-secondary *:hover:outline *:duration-500">
							<a href="#">Home</a>
							<a href="#">about</a>
							<a href="#">experience</a>
							<a href="#">project</a>
						</div>
						<div className="button-link-sosmed flex flex-col border-t border-t-secondary gap-2 items-center">
							<div className="group-logo-sosmed ri-3x *:hover:text-secondary">
								<a href="https://github.com/FiryanSyah23">
									<i className="ri-github-fill"></i>
								</a>
							</div>
							<button className="bg-primary p-1 rounded-xl hover:bg-secondary self-stretch duration-500">CV Firyan Syah</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
