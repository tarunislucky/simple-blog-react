/** @param {String} str */
export const createUrlSlug = (str) => {
	// replace all characters with space, then trim side spaces
	str = str.replace(/[^a-zA-Z0-9 ]/g, " ").trim();
	// replace all spaces/spaces in a row with -
	str = str.replace(/\s+/g, "-");
	str = str.toLowerCase();
	return str;
};
