import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import AboutMe from "@/components/sections/AboutMe";
import Experience from "@/components/sections/Experience";
import Homepage from "@/components/sections/Homepage";
import Projects from "@/components/sections/Projects";

export default function Home() {
	return (
		<>
			<Navbar />
			<Homepage />
			<AboutMe />
			<Experience />
			<Projects />
			<Footer />
		</>
	);
}
