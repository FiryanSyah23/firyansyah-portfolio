import contactInfo from "@/data/contact";

export default function SosmedLogoLink() {
	const email = contactInfo.email;
	const subject = "Halo%20Firyan%2C%20Ada%20Pesan%20Untukmu";
	const body = "Halo%20Firyan%2C%0A%0A";

	return (
		<>
			<a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
				<i className="ri-github-fill"></i>
			</a>

			<a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
				<i className="ri-linkedin-box-fill"></i>
			</a>

			<a
				href={`https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="ri-mail-open-fill"></i>
			</a>
		</>
	);
}
