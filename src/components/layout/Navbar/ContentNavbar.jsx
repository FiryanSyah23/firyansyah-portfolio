import Image from "next/image";
import SosmedLogoLink from "../../ui/SosmedLogoLink";
import SectionsLink from "../../ui/SectionsLink";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ContentNavbar({ setMenu }) {
	return (
		<div className="flex justify-between items-center px-8 ">
			<div className="nav-title flex gap-2 items-center">
				<Image
					src={"/FISOCTASYM.png"}
					alt="Fisoctasym logo"
					width={200}
					height={200}
					className="w-8 h-auto"
				/>
				<Link href="/">
					<span className=" font-bold lg:text-2xl text-lg tracking-widest text-nowrap">FISOCTASYM </span>
				</Link>
			</div>

			<div className="group-action-link flex items-center gap-5">
				<div
					className={cn(
						"lg:flex hidden gap-2",
						"font-semibold capitalize text-lg",
						"*:sm:hover:bg-secondary *:hover:outline *:active:outline *:sm:active:bg-secondary",
						" *:p-1.5 *:rounded-ee-2xl *:rounded-ss-2xl *:transition-all *:duration-500 *:ease-in-out ",
					)}
				>
					<SectionsLink />
				</div>

				<div className="button-link-sosmed hidden lg:flex items-center gap-5">
					<div className="group-logo-sosmed text-4xl *:hover:text-secondary *:active:text-secondary flex gap-2  ">
						<SosmedLogoLink />
					</div>
					<button
						className=" rounded-lg bg-primary hover:bg-secondary active:bg-secondary outline p-2 duration-300 active:translate-y-1 shadow-[2px_4px_1px_.5px_rgba(0,0,0)] active:shadow-none text-sm text-nowrap"
						onClick={() => {
							window.location.href = "/files/CV_Firyan_Syah.pdf";
						}}
					>
						View my CV
					</button>
				</div>
			</div>

			<button
				className="menu-bar lg:hidden"
				onClick={() => {
					setMenu((prev) => !prev);
				}}
			>
				<i className="ri-menu-line ri-2x"></i>
			</button>
		</div>
	);
}
