import { useState, useContext, useRef, useEffect } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { Link } from "react-router-dom";

import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";
import { useRotating, useFlip } from "../hooks/animations";

import "../styles/header.css";

export default function Header() {
	const { locale, toggleLocale } = useContext(LocaleContext);
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [initializing, setInitializing] = useState(true);
	const flagRef = useRef<HTMLImageElement>(null);

	const { icon, rotating } = useRotating(initializing, theme);
	useFlip(initializing, locale, flagRef.current!);

	function handleLocaleButtonClick() {
		toggleLocale();
	}

	useEffect(() => {
		setInitializing(false);
	}, []);

	return (
		<header
			className="mb-1 mt-1 position-sticky p-0"
			style={{ zIndex: 1030, top: ".25rem" }}>
			<nav className="container navbar navbar-expand-lg">
				<div className="container-fluid">
					<Link
						to={"/"}
						className="navbar-brand d-flex align-items-center me-5 py-0">
						<img
							src="./logo-smk-removebg.png"
							alt="Logo SMK Pangeran Antasari"
							width={"50px"}
						/>
						{/* <img src="./logo-pangeran.png" alt="Logo Pangeran" width={"50px"} /> */}
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarText"
						aria-controls="navbarText"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarText">
						<ul className="navbar-nav gap-3 me-auto mb-2 mb-lg-0 w-75 d-flex justify-content-center">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									{locale === "id" ? "Profil" : "Profile"}
								</a>
								<ul className="dropdown-menu bg-tertiary">
									<li>
										<a className="dropdown-item" href="#">
											{locale === "id" ? "Visi & Misi" : "Vision & Mission"}
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											{locale === "id" ? "Sejarah Singkat" : "Brief Story"}
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											{locale === "id"
												? "Sarana & Prasarana"
												: "Facilities & Infrastructures"}
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											{locale === "id"
												? "Guru & Tenaga Kependidikan"
												: "Teachers & Education Staffs"}
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											{locale === "id"
												? "Prestasi Siswa"
												: "Student Achievements"}
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									{locale === "id" ? "Jurusan" : "Major"}
								</a>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item" href="#">
											{locale === "id" ? "Otomotif" : "Automotive"}
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											{locale === "id" ? "Listrik" : "Electrical Engineering"}
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											{locale === "id"
												? "Teknologi Informasi & Komputer"
												: "Information & Computer Technology"}
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									{locale === "id" ? "Kemitraan" : "Partnership"}
								</a>
							</li>
						</ul>

						{/* Preferences */}
						<ul className="navbar-nav d-flex align-items-center">
							<li className="nav-item">
								<button className="btn w-auto p-0" onClick={toggleTheme}>
									{icon ? (
										<BiSun
											className={`fs-3 ${rotating ? "rotating" : ""}`}
											style={{ color: "#064d04" }}
										/>
									) : (
										<BiMoon
											className={`fs-3 ${rotating ? "rotating" : ""}`}
											style={{ color: "#4caf50" }}
										/>
									)}
								</button>
							</li>
							<li className="nav-item">
								<button
									className="btn d-flex justify-content-center align-items-center p-0"
									style={{
										perspective: "600px",
									}}
									onClick={handleLocaleButtonClick}>
									<div
										className={`flip-box}`}
										style={{
											width: "25px",
											height: "25px",
											perspective: "1000px",
										}}>
										<img
											ref={flagRef}
											className="flip-image"
											src="indonesia-flag-removebg-cropped.png"
											alt="Flag"
											style={{
												width: "100%",
												height: "100%",
												transformStyle: "preserve-3d",
											}}
										/>
									</div>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
