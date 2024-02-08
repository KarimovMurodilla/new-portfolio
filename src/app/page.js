import Image from "next/image";
import styles from "./page.module.css";
import me from "./public/me_v4.jpg";


import { FaLinkedin, FaTelegram, FaGithub, FaInstagram } from "react-icons/fa6";

export default function Home() {
	return (
		<main style={{ marginBottom: 200 + "px"}}>
			<div className="text-center mt-5 col-md-6 mx-auto">
				<div>
					{/* <img src="/public/me.JPG" style={{ borderRadius: 50 + '%' }} alt="Me" /> */}
					<Image
						src={me}
						alt="Me"
						width={100}
						height={100}
						style={{ borderRadius: 50 + '%' }}
					/>
				</div>
				<div className="mt-3 fs-1">
					<h1>Murodilla Karimov</h1>
					<p className="text-secondary fs-4">
						Fullstack developer
					</p>
				</div>
				<hr />
				<div className="justify-content-lg-center">
					<a href="https://www.linkedin.com/in/MurodillaKarimov" target="_blank"><FaLinkedin className="fs-2 me-3"/></a>
					<a href="https://t.me/MurodillaKarimov" target="_blank"><FaTelegram className="fs-2 me-3"/></a>
					<a href="https://github.com/KarimovMurodilla" target="_blank"><FaGithub className="fs-2 me-3"/></a>
					<a href="https://instagram.com/murodilla_karimov" target="_blank"><FaInstagram className="fs-2 me-3"/></a>
				</div>
			</div>
		</main>
	);
}
