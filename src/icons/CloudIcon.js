import React from "react";
import PropTypes from "prop-types";

const CloudIcon = ({ twClasses }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		className={`${twClasses} fill-current`}
	>
		<path d="M16.88 9.1A4 4 0 0116 17H5a5 5 0 01-1-9.9V7a3 3 0 014.52-2.59A4.98 4.98 0 0117 8c0 .38-.04.74-.12 1.1z" />
	</svg>
);

export default CloudIcon;

CloudIcon.propTypes = {
	twClasses: PropTypes.string.isRequired,
};
