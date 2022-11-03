import React, { useContext } from "react";
import RegisterInput from "../components/RegisterInput";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/network-data";
import LocaleContext from "../contexts/LocaleContexts";

function RegisterPage() {
	const navigate = useNavigate();
	const { locale } = useContext(LocaleContext);

	async function onRegisterHandler(user) {
		const { error } = await register(user);

		if (!error) {
			navigate("/");
		}
	}
	return (
		<section className="register-page">
			<h2>
				{locale === "id"
					? "Isi form untuk mendaftar akun."
					: "Fill the form to register account."
				}
			</h2>
			<RegisterInput register={onRegisterHandler} />
			{locale === "id" ? (
				<p>
					Sudah punya akun? <Link to="/">Login disini.</Link>
				</p>
			) : (
				<p>
					Already have an account? <Link to="/">Login here.</Link>
				</p>
			)}
		</section>
	);
}

export default RegisterPage;
