"use client";
import { useState } from "react";
import MenuCardPanel from "./MenuCardPanel";
import ContentNavbar from "./ContentNavbar";

export default function Navbar() {
	const [menu, setMenu] = useState(false);
	return (
		<div className="header w-full  fixed text-text pt-5 px-3 z-9999">
			<nav className="container xl:w-290 mx-auto bg-panel/98  md:py-2 rounded-xl relative outline-white outline-1">
				<ContentNavbar setMenu={setMenu} menu={menu} />
				<MenuCardPanel menu={menu} setMenu={setMenu} />
			</nav>
		</div>
	);
}
