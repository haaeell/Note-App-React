import React, { useEffect, useMemo, useState } from "react";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import { LocaleProvider } from "./contexts/LocaleContexts";
import { ThemeProvider } from "./contexts/ThemeContext";
import HomePage from "./pages/HomePage";
import ArsipPage from "./pages/ArsipPage";
import AddPage from "./pages/AddPage";
import Page404 from "./pages/Page404";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
	const [authedUser, setAuthedUser] = useState(null);
	const [initializing, setInitializing] = useState(true);
	const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

	const toggleLocale = () => {
		setLocale((prevLocale) => {
			const newLocale = prevLocale === "id" ? "en" : "id";
			localStorage.setItem("locale", newLocale);
			return newLocale;
		});
	};

	const toggleTheme = () => {
		setTheme((prevState) => {
			const newTheme = prevState === "dark" ? "light" : "dark";
			localStorage.setItem("theme", newTheme);
			return newTheme;
		});
	};

	const localeContextValue = useMemo(() => {
		return {
			locale,
			toggleLocale,
		};
	}, [locale]);

	const themeContextValue = useMemo(() => {
		return {
			theme,
			toggleTheme,
		};
	}, [theme]);

	useEffect(() => {
		async function getData() {
			return await getUserLogged().then(({ data }) => {
				setAuthedUser(data);
				setTimeout(() => {
					setInitializing(false);
				}, 2600);
			});
		}

		getData();
	}, []);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	async function onLoginSuccess({ accessToken }) {
		putAccessToken(accessToken);
		const { data } = await getUserLogged();
		setAuthedUser(data);
	}

	function onLogout() {
		putAccessToken("");
		setAuthedUser(null);
	}


	if (authedUser === null) {
		return (
			<LocaleProvider value={localeContextValue}>
				<ThemeProvider value={themeContextValue}>
					<div className="app-container">
						<header>
							<Navigation logout={onLogout} />
						</header>
						<main>
							<Routes>
								<Route
									path="/*"
									element={<LoginPage loginSuccess={onLoginSuccess} />}
								/>
								<Route path="/register" element={<RegisterPage />} />
							</Routes>
						</main>
					</div>
				</ThemeProvider>
			</LocaleProvider>
		);
	}

	return (
		<LocaleProvider value={localeContextValue}>
			<ThemeProvider value={themeContextValue}>
				<div className="app-container">
					<header>
						<Navigation logout={onLogout} name={authedUser.name} />
					</header>
					<main>
						<Routes>
							<Route path="/*" element={<Page404 />} />
							<Route path="/" element={<HomePage />} />
							<Route path="/archive" element={<ArsipPage />} />
							<Route path="/notes/new" element={<AddPage />} />
							<Route path="/notes/:id" element={<DetailPage />} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</LocaleProvider>
	);
}

export default App;

