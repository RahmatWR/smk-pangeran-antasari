import { useRef } from "react";
import CarouselItem from "./CarouselItem";

export default function Carousel() {
	const carouselRef = useRef<HTMLDivElement>(null);
	return (
		<div
			ref={carouselRef}
			id="carouselAutoPlaying"
			className="carousel slide bg-success vw-100 position-relative"
			data-bs-ride="carousel"
			data-bs-interval="10000"
			style={{ height: "400px" }}>
			<div className="carousel-indicators position-absolute start-50">
				<button
					type="button"
					data-bs-target="#carouselAutoPlaying"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"></button>
				<button
					type="button"
					data-bs-target="#carouselAutoPlaying"
					data-bs-slide-to="1"
					aria-label="Slide 2"></button>
				<button
					type="button"
					data-bs-target="#carouselAutoPlaying"
					data-bs-slide-to="2"
					aria-label="Slide 3"></button>
			</div>
			<div className="carousel-inner px-5 mx-5 h-100">
				<CarouselItem
					carouselRef={carouselRef}
					imageUrl="./perayaan-kemerdekaan/1.jpg"
					imageAlt="Thumbnail Perayaan Kemerdekaan"
					isActive={true}>
					<h3>Perayaan Hari Kemerdekaan dengan Semangat Intelektual</h3>
					<p>
						Kemerdekaan bangsa Indonesia dicapai dengan perjuangan luar biasa...
					</p>
				</CarouselItem>
				<CarouselItem
					carouselRef={carouselRef}
					imageUrl="./astra-safety-riding/safety-riding.jpg"
					imageAlt="Thumbnail Penyelenggaraan Safety Riding Astra"
					isActive={false}>
					<h3>
						Astra Motor Balikpapan Gelar Edukasi Safety Riding di SMK Pangeran
						Antasari
					</h3>
					<p>
						Pentingnya keselamatan dalam berkendara terus digaungkan oleh Astra
						Motor Balikpapan dengan...
					</p>
				</CarouselItem>
				<CarouselItem
					carouselRef={carouselRef}
					imageUrl="./penghargaan.jpeg"
					imageAlt="Thumbnail Penghargaan"
					isActive={false}>
					<h3 style={{ fontWeight: "normal" }}>
						SMK Pangeran Antasari Balikpapan Peroleh Penghargaan Bela Negara{" "}
					</h3>
					<p>
						BALIKPAPAN, TRIBUN- “Ini pesan saya, awas setelah lulus ini
						hati-hati...
					</p>
				</CarouselItem>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselAutoPlaying"
				data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselAutoPlaying"
				data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}
