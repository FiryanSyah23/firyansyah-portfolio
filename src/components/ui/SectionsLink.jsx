export default function SectionsLink() {
	function scroolToSection(e, targetId) {
		e.preventDefault(); // ← cegah browser ubah URL
		const target = document.getElementById(targetId);

		if (target) {
			target.scrollIntoView({
				behavior: "smooth", // ← scroll halus
				block: "start",
			});
		}
	}

	return (
		<>
			<button onClick={(e) => scroolToSection(e, "home")}>Home</button>
			<button onClick={(e) => scroolToSection(e, "about")}>About</button>
			<button onClick={(e) => scroolToSection(e, "experience")}>Experience</button>
			<button onClick={(e) => scroolToSection(e, "projects")}>Projects</button>
		</>
	);
}
