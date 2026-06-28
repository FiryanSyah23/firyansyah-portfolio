const dataProjects = [
	{
		title: "Digital Twins GUI",
		slug: "digitalTwins2",
		updatedAt: "2025-09-10",
		description:
			"This application is designed for a solar panel controller. It can monitor and display electrical parameters such as voltage, current, and power.",
		longDescription:
			"Digital Twins GUI is a real-time monitoring application developed to simulate and visualize the behavior of a solar panel system. The application was built using Python with a custom GUI interface, connected to an Arduino microcontroller via serial communication (UART protocol) to collect live sensor data. It displays key electrical parameters including voltage (V), current (A), and power (W) in real-time with dynamic charts and numerical readouts. The system was designed following the Digital Twin concept — creating a virtual representation of a physical solar panel setup — making it useful for observation, analysis, and academic learning. This project is actively used in the Electrical Engineering Laboratory at UIN Ar-Raniry as an educational tool to help students understand solar energy systems and data acquisition. The firmware was written in C++ for the Arduino side, handling ADC sensor readings and serial data transmission, while Python handled data parsing, processing, and GUI rendering.",
		category: "Desktop App",
		tech: ["Python", "Arduino"],
		image: "/imgProject/digitalTwins/digitalTwins.png",
		projectImg: ["/imgProject/digitalTwins/digitalTwins.png"],
		demo: null,
		status: "Completed",
		year: "2025",
	},
	{
		title: "WEDLX",
		slug: "wedlx",
		updatedAt: "2024-10-13",
		description:
			"WEDLX is a fully responsive digital wedding invitation platform designed to replace traditional printed invitations with a modern, interactive web experience.",
		longDescription:
			"WEDLX is a fully responsive digital wedding invitation platform designed to replace traditional printed invitations with a modern, interactive web experience. Built using vanilla JavaScript with a focus on smooth UI interactions, the platform provides couples with an elegant way to share their special day with guests across all devices. Key features include a real-time countdown timer to the wedding date, an interactive photo gallery showcasing the couple's moments, a fully functional RSVP form for guest confirmation, embedded Google Maps for venue location, and a beautiful animated opening sequence for a memorable first impression. The design prioritizes elegance and readability with carefully chosen typography and color palettes. The website is lightweight, fast-loading, and optimized for mobile devices — ensuring guests on smartphones have a seamless experience. This project demonstrates the ability to deliver a polished, client-ready product with attention to both aesthetics and functionality.",
		category: "Website",
		tech: ["Javascript"],
		image: "/imgProject/wedlx/wedLX.png",
		projectImg: [
			"/imgProject/wedlx/wedLX.png",
			"/imgProject/wedlx/homepage.png",
			"/imgProject/wedlx/info-acara.png",
			"/imgProject/wedlx/story.png",
			"/imgProject/wedlx/gallery.png",
			"/imgProject/wedlx/rsvp.png",
			"/imgProject/wedlx/gift.png",
		],
		demo: "https://firyansyah23.github.io/Wedlx/",
		status: "Completed",
		year: "2025",
	},
	{
		title: "Personal Portfolio",
		slug: "personal-portfolio",
		updatedAt: "2026-06-22",
		description:
			"A modern personal portfolio website showcasing my projects, skills, and journey as a developer. Built with a focus on clean UI, smooth interactions, and responsive design.",
		longDescription:
			"This personal portfolio website was built entirely from scratch using Next.js App Router, React, and Tailwind CSS — with a strong focus on performance, accessibility, and modern UI standards. The project serves as a central hub to showcase my technical skills, project work, and professional journey as a developer. Smooth page transitions and micro-interactions were implemented using Framer Motion, giving the site a polished, app-like feel. The layout is fully responsive, optimized for all screen sizes from mobile to large desktop displays. Performance was prioritized through Next.js built-in Image optimization, lazy loading, and proper metadata configuration for SEO. The portfolio features dedicated sections for projects (with detailed case study pages using dynamic routing), a skills overview, about section, and contact form. Each project page dynamically renders content from a centralized data source, making it easy to maintain and scale. The site is deployed on Vercel with automatic CI/CD on every push to the main branch, reflecting real-world deployment practices used in professional environments.",
		category: "Website",
		tech: ["Next.js", "React", "Javascript", "Tailwind CSS"],
		image: "/imgProject/portfolio/portFolio.png",
		projectImg: [
			"/imgProject/portfolio/portFolio.png",
			"/imgProject/portfolio/experience.png",
			"/imgProject/portfolio/skills.png",
			"/imgProject/portfolio/projects.png",
		],
		demo: "https://firyansyah-portfolio.vercel.app",
		status: "Completed",
		year: "2025",
	},
];

export default dataProjects;
