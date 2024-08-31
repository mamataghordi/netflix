export const validateForm = (email, password) => {
	const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
	const isPasswordValid =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

	const errors = [];
	if (!isEmailValid) {
		errors.push("email not valid");
	}
	if (!isPasswordValid) {
		errors.push("password not valid");
	}

	return errors.length > 0 ? errors.join(", ") : null;
};
