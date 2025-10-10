import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiPhone, FiMail } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import LocaleContext from "../contexts/LocaleContext";

export default function Footer() {
	const { locale } = useContext(LocaleContext);
	return (
		<footer className="mt-4">
			<article className="about-us">
				<div className="container">
					<div className="row row-cols-lg-2">
						<div className="about">
							<h3>{locale === "id" ? "Hubungi Kami" : "Contact Us"}</h3>
							<p>
								{locale === "id"
									? "Untuk informasi lebih lanjut, Anda dapat menghubungi kami melalui saluran berikut: "
									: "For more Information, contact us through the following line: "}
							</p>
							<ul className="p-0 lh-lg">
								<li className="d-flex align-items-top gap-2">
									<FiHome style={{ fontSize: "24px" }} />
									<p className="mb-0 lh-base">
										Jl. Mekarsari No.1, RT.30, Gunungsari Ilir, Kec. Balikpapan
										Tengah, Kota Balikpapan, Kalimantan Timur 76113, Indonesia
									</p>
								</li>
								<li className="d-flex align-items-center gap-2">
									<FiPhone style={{ fontSize: "18px" }} />
									<a href="tel:+625424206099">+625424206099</a>
								</li>
								<li className="d-flex align-items-center gap-2">
									<FiMail style={{ fontSize: "18px" }} />
									<p className="mb-0">info@smkpangeranantasari.sch.id</p>
								</li>
							</ul>

							<h5>{locale === "id" ? "Media Sosial" : "Social Media"}</h5>
							<ul className="social-medias d-flex justify-content-center mt-5 row row-cols-2 row-cols-lg-2 row-cols-md-3 row-cols-xxl-3 row-gap-4 p-0">
								<li className="d-flex align-items-center gap-2 row-cols-2">
									<Link
										to="https://web.facebook.com/groups/116612025033063/?_rdc=1&_rdr"
										className="text-decoration-none">
										<span className="facebook">
											<FaFacebook /> Facebook
										</span>
									</Link>
								</li>
								<li className="d-flex align-items-center gap-2">
									<Link
										to="https://www.instagram.com/smkpangeranantasari"
										className="text-decoration-none">
										<span className="instagram">
											<FaInstagram className="instagram-icon" /> Instagram
										</span>
									</Link>
								</li>
								<li className="d-flex align-items-center gap-2">
									<Link
										to="https://wa.me/+628115410044"
										className="text-decoration-none">
										<span className="whatsapp">
											<FaWhatsapp /> WhatsApp
										</span>
									</Link>
								</li>
							</ul>
						</div>
						<div className="map text-center">
							<h3 className="mt-md-5 mb-md-0">Peta Lokasi</h3>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8374759706257!2d116.84036677479051!3d-1.270486398717428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1471ff7e7407f%3A0xc804c36eb9eeb772!2sSMK%20Pangeran%20Antasari%20Balikpapan!5e0!3m2!1sen!2sid!4v1759212663255!5m2!1sen!2sid"
								// width="400"
								// height="300"
								style={{ border: "none" }}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</div>
			</article>
			<article
				className="text-light py-3 mt-3"
				style={{ background: "var(--green)" }}>
				<div className="container">
					<div className="row row-cols-md-2 justify-content-md-between">
						<p className="m-0 text-center text-md-start">
							developer: Rahmat Widi Raharjo
						</p>
						<p className="m-0 text-center text-md-end">
							Copyright {"\u00A9"} 2025 SMK Pangeran Antasari
						</p>
					</div>
				</div>
			</article>
		</footer>
	);
}
