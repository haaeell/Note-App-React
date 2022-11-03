import PropTypes from "prop-types";
import React from "react";
import useInput from "../hooks/useInput";
import InputField from "./InputField";

function RegisterInput({ register }) {
	const [name, onNameChange] = useInput("");
	const [email, onEmailChange] = useInput("");
	const [password, onPasswordChange] = useInput("");
	const [confirmPassword, onConfirmPasswordChange] = useInput("");

	function onSubmitHandler() {
		if (password !== confirmPassword) {
			alert("Password and password confirm must be same");
		}

		register({
			name,
			email,
			password,
		});
	}

	return (
		<div className="input-register">
			<InputField
				type="name"
				name="name"
				label="Name"
				value={name}
				onChange={onNameChange}
			/>
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
			<InputField
				type="password"
				name="confirmPassword"
				label="Confirm Password"
				value={confirmPassword}
				onChange={onConfirmPasswordChange}
			/>
			<button type="button" onClick={onSubmitHandler}>
				Register
			</button>
		</div>
	);
}

RegisterInput.propTypes = {
	register: PropTypes.func.isRequired,
};

export default RegisterInput;
