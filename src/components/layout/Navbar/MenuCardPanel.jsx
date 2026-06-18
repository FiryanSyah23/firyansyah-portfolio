import SectionsLink from "../../ui/SectionsLink";
import SosmedLogoLink from "../../ui/SosmedLogoLink";

export default function MenuCardPanel({ menu, setMenu }) {
	return (
		<div
			className={`absolute md:hidden bg-panel/98 ${menu ? "top-20 opacity-100" : "-top-105 opacity-0 "} p-5 w-full rounded-xl duration-500`}
			onClick={() => setMenu(false)}
		>
			<div className="flex flex-col gap-2">
				<div className="nav-panel-link flex flex-col *:py-2 text-center  *:rounded-xl  *:hover:bg-secondary *:hover:outline *:duration-500 capitalize *:active:bg-secondary *:active:outline  ">
					<SectionsLink />
				</div>

				<div className="button-link-sosmed flex flex-col border-t border-t-secondary gap-2 items-center ">
					<div className="group-logo-sosmed text-4xl  *:hover:text-secondary *:active:text-secondary flex gap-5 pt-2">
						<SosmedLogoLink />
					</div>

					<button
						className="bg-primary p-1 rounded-xl hover:bg-secondary active:bg-secondary self-stretch duration-500"
						onClick={() => {
							window.location.href = "/files/CV_Firyan_Syah.pdf";
						}}
					>
						View my CV
					</button>
				</div>
			</div>
		</div>
	);
}
