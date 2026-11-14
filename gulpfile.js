
import path from 'path';
import { fileURLToPath } from 'url';

import {
    src,
    dest,
    watch,
    series,
    parallel
} from 'gulp';

import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

const projectRoot = path.dirname(
    fileURLToPath(import.meta.url)
);

// Configuración de Sass
const sassOptions = {
    loadPaths: [
        path.join(projectRoot, 'node_modules'),
        path.join(projectRoot, 'src/scss'),
    ],
    silenceDeprecations: [
        'import',
        'global-builtin',
        'color-functions',
        'if-function'
    ],
};

// JavaScript
export function js() {
    return src('src/js/app.js')
        .pipe(dest('build/js'));
}

// CSS para desarrollo
export function css() {
    return src('src/scss/app.scss', {
        sourcemaps: true
    })
        .pipe(sass.sync(sassOptions).on('error', sass.logError))
        .pipe(dest('build/css', {
            sourcemaps: '.'
        }));
}

// CSS para producción
export function cssProd() {
    return src('src/scss/app.scss')
        .pipe(sass.sync({
            ...sassOptions,
            style: 'compressed'
        }).on('error', sass.logError))
        .pipe(dest('build/css'));
}

// Copiar imágenes
export function imagenes() {
    return src('src/img/**/*')
        .pipe(dest('build/img'));
}

// Observar cambios
export function dev() {
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', js);
    watch('src/img/**/*', imagenes);
}

// Desarrollo
export const desarrollo = series(
    parallel(js, css, imagenes),
    dev
);

// Producción
export const produccion = parallel(
    js,
    cssProd,
    imagenes
);

export default desarrollo;
