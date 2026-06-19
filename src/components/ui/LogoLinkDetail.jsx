import React from "react";

export default function LogoLinkDetail() {
	const email = "firyansyah22@gmail.com";
	const subject = "Halo%20Firyan%2C%20Ada%20Pesan%20Untukmu";
	const body = "Halo%20Firyan%2C%0A%0A";

	return (
		<>
			<a
				href="https://github.com/FiryanSyah23"
				target="_blank"
				rel="noopener noreferrer"
				className="group flex items-center gap-2"
			>
				<i className="ri-github-fill text-secondary group-hover:text-white"></i>
				<span>FiryanSyah23</span>
			</a>

			<a
				href="https://linkedin.com/in/firyansyah"
				target="_blank"
				rel="noopener noreferrer"
				className="group flex items-center gap-2"
			>
				<i className="ri-linkedin-box-fill text-secondary group-hover:text-white"></i>
				<span>Firyan Syah</span>
			</a>

			<a
				href="https://wa.me/085135886173"
				target="_blank"
				rel="noopener noreferrer"
				className="group flex items-center gap-2"
			>
				<i className="ri-whatsapp-line text-secondary group-hover:text-white"></i>
				<span>085135886173</span>
			</a>

			<a
				href={`https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`}
				target="_blank"
				rel="noopener noreferrer"
				className="group flex items-center gap-2"
			>
				<i className="ri-mail-open-fill text-secondary group-hover:text-white"></i>
				<span>firyansyah22@gmail.com</span>
			</a>
		</>
	);
}
