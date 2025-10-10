import { useLayoutEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import Carousel from "../components/Carousel";
import { tagline, headmastersForeword } from "../utils/homepage";

import "../styles/homepage.css";
import LocaleContext from "../contexts/LocaleContext";

export default function HomePage() {
	const { locale } = useContext(LocaleContext);
	gsap.registerPlugin(MotionPathPlugin);

	function language(ind: string, en: string) {
		return locale === "id" ? ind : en;
	}

	useLayoutEffect(() => {
		function startAnimation() {
			const orbittingItems =
				gsap.utils.toArray<HTMLAnchorElement>(".orbitting-item");
			const total = orbittingItems.length;
			orbittingItems.forEach((item, index) => {
				const start = index / total;
				const end = start + 1;

				gsap.to(item, {
					duration: 7,
					repeat: -1,
					ease: "out",
					motionPath: {
						path: "#orbit",
						align: "#orbit",
						alignOrigin: [0.5, 0.5],
						start: start,
						end: end,
					},
				});
			});
		}

		if (document.readyState === "complete") startAnimation();
		else {
			window.addEventListener("load", startAnimation);
			return () => window.removeEventListener("load", startAnimation);
		}
	}, []);
	return (
		<main>
			<section>
				<div className="container position-relative h-100 pt-2">
					<div className="row row-cols-md-2 align-items-center h-100">
						<article className="h-100 d-flex flex-column justify-content-md-center hero-article">
							<h1
								className="text-center text-md-start smk-pangeran"
								style={{ lineHeight: "2.5rem" }}>
								SMK{" "}
								<span className="d-block" style={{ letterSpacing: "-3px" }}>
									PA<span className="n-letter_1">N</span>GERAN
								</span>
								<span className="d-block" style={{ letterSpacing: "-1px" }}>
									A<span className="n-letter_2">N</span>TASARI
								</span>{" "}
								BALIKPAPAN
							</h1>
							<p>{locale === "id" ? tagline.id : tagline.en}</p>
							<div className="action">
								<button className="btn btn-success position-relative z-3">
									{language("Lihat Jurusan", "See Majors")}
								</button>
							</div>
						</article>
						<article className="image position-relative h-100 hero-article d-flex justify-content-center">
							<svg viewBox="0 0 100 100" className="position-absolute z-n1">
								<defs>
									<radialGradient id="multiRadial" cx="50%" cy="50%" r="50%">
										<stop offset="0%" stopColor="#57ff2dff" />
										<stop offset="75%" stopColor="#9dff4dff" />
										<stop offset="100%" stopColor="#bcfa8aff" />
									</radialGradient>
								</defs>
								<path
									id="orbit"
									d="	M 50 95
     									A 45 45 0 1 1 50 5
     									A 45 45 0 1 1 50 95"
									fill="url(#multiRadial)"
								/>
							</svg>

							{/* Orbitting item */}
							<div className="orbitting-item quotes">Keep Learning</div>
							<div className="orbitting-item quotes">Stay Curious</div>
							<img
								className="orbitting-item school-tools"
								src="—Pngtree—open book illustration_4363572.png"
								alt="pen"
							/>
							<div className="orbitting-item quotes">Focus Deeply</div>
							<img
								className="orbitting-item school-tools"
								src="./—Pngtree—feather pen_386478.png"
								alt="book"
							/>
							<img
								className="position-absolute bottom-0 d-block mx-auto"
								src="./—Pngtree—smiling school boy with glasses_21236652.png"
								alt="student"
								loading="lazy"
							/>
						</article>
					</div>
				</div>
			</section>
			<section className="section-2 pb-3">
				<div className="py-3">
					<h2 className="text-center">
						{language("Prakata Kepala Sekolah", "principal's Foreword")}
					</h2>
					<article className="principals-foreward p-2 position-relative">
						<div className="principals-foreword__picture position-absolute top-0 start-50">
							<div className="principals-foreword__picture__wrapper"></div>
							<img
								className="gear"
								src="./—Pngtree—cartoon gear_7302402.png"
								alt="gear"
								width={"300px"}
							/>
							<img
								className="headmaster position-absolute"
								src="./teachers/imam.jpg"
								alt=""
								width="150px"
								height="150px"
								style={{ borderRadius: "50%" }}
								loading="lazy"
							/>
						</div>
						<div className="principals-foreword__paragraf text-justify container">
							<div className="row row-cols-1 row-cols-lg-2">
								<svg
									className="position-absolute z-2 text-svg"
									width={280}
									height={280}
									viewBox="0 0 100 100"
									fill="blue">
									<path
										id="text-path"
										d="	M 50 0
     									A 50 50 0 1 0 50 100
     									A 50 50 0 1 0 50 0"
										fill="transparent"
									/>
									<text fontSize={5}>
										<textPath href="#text-path" startOffset={125}>
											Imam Rakhmat, S.Sos., M.Si
										</textPath>
									</text>
								</svg>
								<div className="principals-foreword__paragraf__half first">
									<div className="left-half-circle ms-5"></div>
									<p className="principals-foreword__paragraf__body">
										{language(
											headmastersForeword.firstHalf.id,
											headmastersForeword.firstHalf.en
										)}
									</p>
								</div>
								<div className="principals-foreword__paragraf__half second">
									<div className="right-half-circle me-5"></div>
									<p className="principals-foreword__paragraf__body">
										{language(
											headmastersForeword.secondHalf.id,
											headmastersForeword.secondHalf.en
										)}
									</p>
								</div>
							</div>
						</div>
					</article>
				</div>

				<h2 className="text-center mb-3">
					{language("Berita Terkini", "Updated News")}
				</h2>
				<div className="container most-updated-news text-center">
					<div className="row row-cols-md-3 row-cols-lg-4 justify-content-md-center gap-4 justify-content-center gap-lg-2 mb-4">
						<Link to="/" className="text-decoration-none d-block news-link">
							<div className="card news p-0 h-100">
								<img
									src="./perayaan-kemerdekaan/penyerahan-hadiah.jpg"
									className="card-img-top"
									alt="Perayaan Kemerdekaan Indonesia"
									loading="lazy"
								/>
								<div className="card-body">
									<h5 className="card-title">
										Perayaan Hari Kemerdekaan Indonesia
									</h5>
									<p className="card-text">
										Perayaan 17 Agustus dengan Semangat Intelektual
									</p>
								</div>
							</div>
						</Link>

						<Link to={"/"} className="text-decoration-none d-block">
							<div className="card news p-0 h-100">
								<img
									src="./penghargaan-bela-negara\bela-negara.jpg"
									className="card-img-top"
									alt="Perayaan Kemerdekaan Indonesia"
									loading="lazy"
								/>
								<div className="card-body">
									<h5 className="card-title">Penghargaan Bela Negara</h5>
									<p className="card-text">
										SMK Pangeran Antasari Balikpapan raih penghargaan bela
										Negara
									</p>
								</div>
							</div>
						</Link>

						<Link to={"/"} className="text-decoration-none d-block">
							<div className="card news p-0 h-100">
								<img
									src="./astra-safety-riding\safety-riding.jpg"
									className="card-img-top"
									alt="Perayaan Kemerdekaan Indonesia"
									loading="lazy"
								/>
								<div className="card-body">
									<h5 className="card-title">Edukasi Safety Riding</h5>
									<p className="card-text">
										Astra Motor Balikpapan Gelar Edukasi Safety Riding di SMK
										Pangeran Antasari, Begini Keseruannya
									</p>
								</div>
							</div>
						</Link>
					</div>
					<Link to={"#"} className="btn btn-success mt-2 mb-3">
						{language("Lihat Selengkapnya", "See More")} <AiOutlineRight />
					</Link>
				</div>
			</section>

			<section className="teachers-list text-center position-relative bg-white">
				<div className="container py-3">
					<h2>{language("Daftar Guru", "Teachers List")}</h2>
					<div className="d-flex justify-content-end">
						<Link to={"#"} className="btn btn-success mt-2 mb-3 me-5">
							{language("Lihat Selengkapnya", "See More")}
							<AiOutlineRight />
						</Link>
					</div>

					<Carousel />
				</div>
			</section>
		</main>
	);
}
