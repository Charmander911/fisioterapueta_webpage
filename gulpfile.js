import path from 'path';
import { fileURLToPath } from 'url';
import { src, dest, watch, series } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const sassOptions = {
    loadPaths: [
        path.join(projectRoot, 'node_modules'),
        path.join(projectRoot, 'src/scss'),
    ],
    silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
};

export function js() {
    return src('src/js/app.js').pipe(dest('build/js'));
}

export function css() {
    return src('src/scss/app.scss', { sourcemaps: true })
        .pipe(sass.sync(sassOptions).on('error', sass.logError))
        .pipe(dest('build/css', { sourcemaps: '.' }));
}

export function dev() {
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', js);
}

export default series(js, css, dev);
