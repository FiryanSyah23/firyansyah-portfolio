import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import Experience from "@/components/sections/Experience";
import Homepage from "@/components/sections/Homepage";
import Projects from "@/components/sections/Projects";
import ScrollToTop from "@/hooks/ScrollToTop";

export default function Home() {
	return (
		<>
			<Navbar />
			<ScrollToTop />
			<Homepage />
			<Experience />
			<Projects />
			<Footer />
		</>
	);
}
