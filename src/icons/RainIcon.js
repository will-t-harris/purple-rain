import React from "react";
import PropTypes from "prop-types";

const RainIcon = ({ twClasses }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		className={`${twClasses} fill-current`}
	>
		<path d="M9.882 9.093c-.511 4.115-3.121 4.847-3.121 7.708C6.761 18.567 8.244 20 10 20s3.238-1.434 3.238-3.199c0-2.861-2.61-3.593-3.121-7.708-.016-.123-.219-.123-.235 0zm-5.999-9C3.372 4.208.762 4.939.762 7.801.762 9.566 2.244 11 4 11s3.238-1.434 3.238-3.199c0-2.861-2.61-3.593-3.121-7.708-.015-.123-.219-.123-.234 0zm12 0c-.511 4.115-3.121 4.847-3.121 7.708C12.762 9.566 14.244 11 16 11s3.238-1.434 3.238-3.199c0-2.861-2.61-3.593-3.121-7.708-.016-.123-.219-.123-.234 0z" />
	</svg>
);

export default RainIcon;

RainIcon.propTypes = {
	twClasses: PropTypes.string.isRequired,
};
