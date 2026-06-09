export default function SosmedLogoLink() {
	const email = "firyansyah@gmail.com"; // ← ganti dengan email kamu
	const subject = "Halo%20Firyan%2C%20Ada%20Pesan%20Untukmu";
	const body = "Halo%20Firyan%2C%0A%0A";

	return (
		<>
			<a href="https://github.com/FiryanSyah23" target="_blank" rel="noopener noreferrer">
				<i className="ri-github-fill"></i>
			</a>

			<a href="https://linkedin.com/in/firyansyah" target="_blank" rel="noopener noreferrer">
				<i className="ri-linkedin-box-fill"></i>
			</a>

			<a href={`https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`} target="_blank" rel="noopener noreferrer">
				<i className="ri-mail-open-fill"></i>
			</a>
		</>
	);
}
