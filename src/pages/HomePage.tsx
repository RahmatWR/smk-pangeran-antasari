import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import "../styles/homepage.css";

export default function HomePage() {
	gsap.registerPlugin(MotionPathPlugin);
	useGSAP(() => {
		const orbittingItems =
			gsap.utils.toArray<HTMLAnchorElement>(".orbitting-item");
		const total = orbittingItems.length;
		// console.log(orbittingItems);
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
	}, []);

	window.addEventListener("resize", () => console.log(window.innerWidth));
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
							<p>
								SMK Pangeran Antasari Balikpapan berkomitmen membentuk generasi
								berakhlak mulia, berlandaskan nilai agama dan ilmu pengetahuan,
								serta siap menghadapi dunia kerja, melanjutkan pendidikan
								tinggi, maupun berwirausaha.
							</p>
							<div className="action">
								<button className="btn position-relative z-3">
									Lihat Jurusan
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
							/>
						</article>
					</div>
				</div>
			</section>
			<section className="section-2">
				<div className="container py-3">
					<h2 className="text-center">Prakata Kepala Sekolah</h2>
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
							/>
						</div>
						<div className="principals-foreword__paragraf text-justify container">
							<div className="row row-cols-1 row-cols-lg-2">
								<div className="principals-foreword__paragraf__half first">
									<div className="left-half-circle ms-5"></div>
									<p className="principals-foreword__paragraf__body">
										Puji syukur kita panjatkan kepada Allah سُبۡحَٰنَهُۥ
										وَتَعَٰلَىٰ atas berkah limpahan rahmat dan karunianya kita
										semua masih dalam keadaan sehat dan masih bisa menikmati
										berbagai nikmat hidup yang begitu banyak. Shalawat serta
										salam tercurah ke Junjungan Nabi Muhammad صَلَّى اللهُ
										عَلَيْهِ وَسَلَّمَ , suri tauladan terbaik, semoga kita
										termasuk umatnya hingga akhir zaman. Perubahan adalah sebuah
										keniscayaan dalam setiap aspek kehidupan. demikian halnya
										dalam Dunia Pendidikan. Maka sekolah tentu terus mengikuti
										perkembangan tersebut. Sebagai sarana informasi dan
										komunikasi sekolah, maka kami meluncurkan situs resmi
										sekolah dengan nama: smkpangeranantasari.sch.id.
									</p>
								</div>
								<div className="principals-foreword__paragraf__half second">
									<div className="right-half-circle me-5"></div>
									<p className="principals-foreword__paragraf__body">
										Kami terus melakukan pembenahan dan perbaikan guna
										meningkatkan mutu dan kualitas SMK Pangeran Antasari
										Balikpapan menuju Pangeran siap Berja, siap berwirausaha.
										media sosial kami juga bisa diakses melalui instagram
										STM/SMK Pangeran Antasari. Semoga kedepannya bisa menjadi
										sarana Komunikasi dan informasi yang bisa kami sinergikan
										dengan media media sosial sekolah kedepannya, sehingga SMK
										Pangeran Antasari Balikpapan bisa lebih dikenal Masyarakat
										dan dapat menjadi salah satu institusi pendidikan yang
										berkelas dan turut serta dalam proses mencerdaskan anak
										bangsa. Kami sampaikan terima kasih kepada tim dari
										sinarweb.com sebagai penyedia domain hosting murah serta
										membuat website ini dengan baik. Harapan kami, website ini
										akan terus berkembang penggunaannya sebagai sarana informasi
										yang menunjang dunia pendidikan.
									</p>
								</div>
							</div>
						</div>
					</article>
				</div>
			</section>
		</main>
	);
}
