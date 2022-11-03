import PropTypes from "prop-types";
import React from "react";
import useInput from "../hooks/useInput";
import InputField from "./InputField";

function LoginInput({ login }) {
	const [email, onEmailChange] = useInput("");
	const [password, onPasswordChange] = useInput("");

	function onSubmitHandler() {
		login({ email, password });
	}

	return (
		<div className="input-login">
			<InputField
				type="email"
				name="email"
				label="Email"
				value={email}
				onChange={onEmailChange}
			/>
			<InputField
				type="password"
				name="password"
				label="Password"
				value={password}
				onChange={onPasswordChange}
			/>
			<button type="button" onClick={onSubmitHandler}>
				Login
			</button>
		</div>
	);
}

LoginInput.propTypes = {
	login: PropTypes.func.isRequired,
};

export default LoginInput;
