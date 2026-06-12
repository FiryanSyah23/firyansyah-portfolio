import Image from "next/image";
import SosmedLogoLink from "./SosmedLogoLink";
import SectionsLink from "./SectionsLink";

export default function ContentNavbar({ setMenu }) {
	return (
		<div className="flex justify-between items-center px-8 py-2">
			<div className="nav-title flex gap-2 items-center">
				<Image src={"/FIROCTASYS.png"} alt="LOGOPAGE" width={200} height={200} className="w-8 h-auto" priority={true} />
				<a href="#">
					<h2 className=" font-bold lg:text-2xl text-lg tracking-widest text-nowrap">FIRYAN</h2>
				</a>
			</div>

			<div className="group-action-link flex items-center gap-5">
				<div className="navlink  capitalize gap-2 md:flex hidden font-semibold *:sm:hover:bg-secondary *:p-1.5 *:rounded-ee-2xl *:rounded-ss-2xl *:hover:outline *:transition-all *:duration-500 *:ease-in-out text-lg">
					<SectionsLink />
				</div>

				<div className="button-link-sosmed hidden md:flex items-center gap-5">
					<div className="group-logo-sosmed text-4xl *:hover:text-secondary flex gap-2  ">
						<SosmedLogoLink />
					</div>
					<button className=" rounded-ee-2xl rounded-ss-2xl bg-primary hover:bg-secondary outline p-2 duration-300 active:translate-y-1 shadow-[2px_4px_1px_.5px_rgba(0,0,0)] active:shadow-none text-sm text-nowrap">
						View my CV
					</button>
				</div>
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
	);
}
