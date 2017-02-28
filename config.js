const dev = "dev/";
const srcSass = "sass/**/*{sass,scss}";
const destCSS = "css/";
const colors = "/css/**/*.css";

module.exports = {
	colorguard: {
		src: colors
	},
	sass: {
		src: srcSass,
		dest: destCSS
	}
}
