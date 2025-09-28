import { useEffect, useRef } from "react";
// import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function CarouselItem({
	imageUrl,
	imageAlt,
	isActive,
	children,
	carouselRef,
}: {
	carouselRef: React.RefObject<HTMLDivElement | null>;
	imageUrl: string;
	imageAlt: string;
	isActive: boolean;
	children: React.ReactNode;
}) {
	const imageRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const el = carouselRef.current;
		if (!el) return;

		function handleSlide(e: Event) {
			const relatedTarget = (e as CustomEvent).relatedTarget as HTMLElement;
			const activeImg = (e.target as HTMLElement).querySelector(
				".carousel-item.active img"
			);

			const nextImg = relatedTarget.querySelector("img");

			if (activeImg === imageRef.current) {
				gsap.to(activeImg, {
					y: 900,
					opacity: 0,
					duration: 1,
				});
			}

			if (nextImg === imageRef.current) {
				gsap.set(imageRef.current, {
					y: -400,
					opacity: 0,
				});
			}
		}

		function handleSlid(e: Event) {
			const activeItem = (e.target as HTMLElement).querySelector(
				".carousel-item.active img"
			);
			if (activeItem === imageRef.current) {
				gsap.to(imageRef.current, {
					y: 0,
					opacity: 1,
					duration: 1,
				});
			}
		}

		el.addEventListener("slide.bs.carousel", handleSlide);
		el.addEventListener("slid.bs.carousel", handleSlid);

		return () => {
			el.removeEventListener("slide.bs.carousel", handleSlide);
			el.removeEventListener("slid.bs.carousel", handleSlid);
		};
	}, []);

	return (
		<div
			className={`carousel-item h-100 ${isActive ? "active" : ""}`}
			style={{ width: "100%", color: "white" }}>
			<div className="d-flex align-items-center h-100 mx-5 gap-5">
				<img
					ref={imageRef}
					src={imageUrl}
					className="d-block h-100"
					alt={imageAlt}
				/>
				<div className="p-3">
					{children}
					<button className="btn btn-dark" type="button">
						Baca Selengkapnya
					</button>
				</div>
			</div>
		</div>
	);
}
