export const validateForm = (email, password) => {
	const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
	const isPasswordValid =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

	const errors = {
		email: "",
		password: "",
	};
	if (!isEmailValid) {
		errors.email = "email not valid";
	}
	if (!isPasswordValid) {
		errors.password = "password not valid";
	}
	return errors;
};
