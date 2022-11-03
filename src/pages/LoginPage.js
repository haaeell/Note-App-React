import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import LocaleContext from "../contexts/LocaleContexts";
import { login } from "../utils/network-data";
import PropTypes from "prop-types";

function LoginPage({ loginSuccess }) {
	const { locale } = useContext(LocaleContext);

	async function onLoginHandler({ email, password }) {
		const { error, data } = await login({ email, password });

		if (!error) {
			loginSuccess(data);
		}
	}

	if (locale === "en") {
		return (
			<section className="login-page">
				<h2>Login to use app</h2>
				<LoginInput login={onLoginHandler} />
				<p>
					Don't have an account? <Link to="/register">Register</Link>
				</p>
			</section>
		);
	}

	return (
		<section className="login-page">
			<h2>Ylogin dulu ges</h2>
			<LoginInput login={onLoginHandler} />
			<p>
				Belum punya akun? <Link to="/register">Daftar</Link>
			</p>
		</section>
	);
}

LoginPage.propTypes = {
	loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
