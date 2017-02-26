const config = require("./config.js");

const gulp = require("gulp");
const plumber = require("gulp-plumber");

const colorguard = require("gulp-colorguard");
const size = require("gulp-size");
const cleancss = require("gulp-clean-css");
const del = require("del");
const rename = require("gulp-rename");
const doiuse = require("doiuse");
const runSequence = require("run-sequence");
const webpack = require("webpack-stream");




/*
const postcss = require("gulp-postcss");

const size = require("gulp-size");
const changed = require("gulp-changed");

const browsersync = require("browser-sync");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const scss = require("postcss-scss");
const precss = require("precss");
const autoprefixer = require("autoprefixer");
const gulpFilter = require("gulp-filter");
const rename = require("gulp-rename");
*/

gulp.task("webpack", function() {
	return gulp.src("app.js")
		.pipe(webpack(require("./webpack.config.js")))
		.pipe(gulp.dest("prod"));
});

gulp.task("colorguard", function() {
	gulp.src("main.css")
		.pipe(colorguard()).on("error", errorHandler)
		.pipe(plumber())
		.pipe(colorguard())
		.pipe(gulp.dest(config.destCSS));
});

gulp.task("css", function() {
	gulp.src("main.css")
		.pipe(cleancss())
		.pipe(size())
		.pipe(rename("main-prod.css"))
		.pipe(gulp.dest("css/"));
})

function errorHandler (error) {
	console.log(error.toString());
	this.emit("end");
}

/*
gulp.task("del", function() {
	return del("folder-to-delete/all/all");
});

gulp.task("chain", ["colorguard", "del"], function() { });

gulp.task("sequence", function(cb) {
	runSequence(
		"sass",
		[
			"colorguard",
			"louis",
			"doiuse"
		],
		"del"
		cb)
});
*/


/*
gulp.task("doiuse", () =>
	return gulp.src("main.css")
		.pipe(postcss([
			doiuse({
				browsers: [
					"ie >= 9"
				],
				onFeatureUsage: function (usageInfo) {
					console.log(usageInfo.message)
				}
			})
	]))
});

//const files = [ ];

gulp.task("copyfiles", function() {
	gulp.src("prod/copy-this-file.md")
	.pipe(gulp.dest("dist/"));
});



const louis = require("gulp-louis");

gulp.task("louis", () =>
	louis({
		url: "index.html",
		timeout: 60,
		viewport: "1920x1200",
		engine: "webkit",
		noExternals: false,
		performanceBudget: {
			firstPaint: 500,
			domInteractive: 500,
			domContentLoaded: 1500,
			domContentLoadedEnd: 2500,
			domComplete: 2500,
			requests: 30
		}
	});
);


gulp.task("sass", () =>
	const processors = [
		precss(config.precss.options),
		autoprefixer(config.autoprefixer.options),
		//doiuse(config.doiuse.options),
	];

	const filter = gulpFilter(["*.css", "!*.map"], { restore: true });
	browsersync.notify("Compiling Sass");

	return gulp.src(config.sass.src)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass.sync().on("error", sass.logError))
		.pipe(postcss(processors, {syntax: scss}))
		.pipe(sourcemaps.write("maps"))
		//.pipe(rename({dirname: ""}))
		.pipe(gulp.dest(config.sass.dest))
		.pipe(browsersync.stream());
);

gulp.task("asdf1", () =>
	gulp.src("main.css")
		.pipe(size())
		.pipe(gulp.dest("dist"))
);


gulp.task("asdf2", () =>
	gulp.src(SRC)
		.pipe(changed(DEST))
		// `ngAnnotate` will only get the files that
		// changed since the last time it was run
		.pipe(ngAnnotate())
		.pipe(gulp.dest(DEST))
);
*/
