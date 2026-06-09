import SectionsLink from "../../sections/SectionsLink";
import SosmedLogoLink from "../../sections/SosmedLogoLink";

export default function MenuCardPanel({ menu, setMenu }) {
	return (
		<div
			className={`absolute md:hidden bg-panel/70 ${menu ? "top-14 opacity-100" : "-top-105 opacity-0 "} p-5 w-full rounded-xl duration-500`}
			onClick={() => setMenu(!menu)}
		>
			<div className="flex flex-col gap-2">
				<div className="nav-panel-link flex flex-col *:py-2 text-center  *:rounded-xl  *:hover:bg-secondary *:hover:outline *:duration-500 capitalize">
					<SectionsLink />
				</div>

				<div className="button-link-sosmed flex flex-col border-t border-t-secondary gap-2 items-center ">
					<div className="group-logo-sosmed ri-2x *:hover:text-secondary flex gap-5 pt-2">
						<SosmedLogoLink />
					</div>

					<button className="bg-primary p-1 rounded-xl hover:bg-secondary self-stretch duration-500">CV Firyan Syah</button>
				</div>
			</div>
		</div>
	);
}
