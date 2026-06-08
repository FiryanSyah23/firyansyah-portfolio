import { nav } from "framer-motion/client";

export default function Navbar() {
	return (
		<div className="header w-full fixed bg-(--color-mid) top-0 py-10">
			<nav className="navbar flex justify-between m-10 ">
				<h2>tittle</h2>
				<div className="nav-Section">
					<a href="#">hello</a>
				</div>
			</nav>
		</div>
	);
}
