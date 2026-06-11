"use client";
import Image from "next/image";
import { useState } from "react";
import MenuCardPanel from "./MenuCardPanel";
import ContentNavbar from "./ContentNavbar";

export default function Navbar() {
	const [menu, setMenu] = useState(false);
	return (
		<div className="header w-full  fixed text-text pt-5 px-3 z-9999">
			<nav className="container xl:w-290 mx-auto bg-panel/98 shadow-[0px_0px_6px_#b6adff] md:py-2 rounded-xl relative">
				<ContentNavbar setMenu={setMenu} />
				<MenuCardPanel menu={menu} setMenu={setMenu} />
			</nav>
		</div>
	);
}
