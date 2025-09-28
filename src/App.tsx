import { useState, useMemo, useEffect } from "react";
import SchoolApp from "./components/SchoolApp";
import { BrowserRouter } from "react-router-dom";
import { LocaleProvider } from "./contexts/LocaleContext";
import { ThemeProvider } from "./contexts/ThemeContext";

import "./App.css";

function App() {
	const [locale, setLocale] = useState("id");
	const [theme, setTheme] = useState("light");

	function toggleLocale() {
		setLocale((prevLocale) => (prevLocale === "id" ? "en" : "id"));
	}
	function toggleTheme() {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	}

	useEffect(() => {
		document.documentElement.setAttribute("data-bs-theme", theme);
	}, [theme]);

	const localeValue = useMemo(
		() => ({
			locale,
			toggleLocale,
		}),
		[locale]
	);
	const themeValue = useMemo(
		() => ({
			theme,
			toggleTheme,
		}),
		[theme]
	);

	return (
		<BrowserRouter>
			<LocaleProvider value={localeValue}>
				<ThemeProvider value={themeValue}>
					<SchoolApp />
				</ThemeProvider>
			</LocaleProvider>
		</BrowserRouter>
	);
}

export default App;
