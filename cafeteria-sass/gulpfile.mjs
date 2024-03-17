import gulp from 'gulp';

const { src, dest, watch, series, parallel } = gulp;

// CSS Y SASS
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import cssnano from 'cssnano'; // Minificar css
const sass = gulpSass(dartSass);

// Imagenes
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import avif from 'gulp-avif';

export const css = (  done ) => {
    // compilar sass

    // pasos: 1 - identificar archivo, 2 - compilarla, 3 - Guardar el  .css

    // .pipe( sass( { outputStyle: 'expanded' } ) )
    src('src/scss/app.scss')
    .pipe( sourcemaps.init() ) //Init sourcemap
    .pipe( sass() )
    .pipe( postcss( [autoprefixer(), cssnano() ] ) )
    .pipe( sourcemaps.write('.') ) //Create filemap
    .pipe( dest('build/css') );

    done();
}

export const imagenes = (  done ) => {
    src('src/img/**/*')
    .pipe( imagemin( { optimizationLevel: 3 } ) )
    .pipe( dest('build/img') )

    done();
}

export const versionWebp = () =>  {
    const opciones = {
        quality: 50
    }
    return src('src/img/**/*.{png,jpg}')
    .pipe( webp( opciones ) )
    .pipe( dest('build/img') )
}

export const versionAvif = () =>  {
    const opciones = {
        quality: 50
    }
    return src('src/img/**/*.{png,jpg}')
    .pipe( avif( opciones ) )
    .pipe( dest('build/img') )
}

export const dev = () =>  {

    watch( 'src/scss/**/*.scss', css );
    watch( 'src/img/**/*', imagenes );
    watch ( 'src/scss/app.scss', css );

}

export const taskDefault = () =>  {
    console.log('I task default task');
}

// exports.css = css;
// exports.dev = dev;
// exports.imagenes = imagenes;
// exports.webp = versionWebp;
// exports.avif = versionAvif;
// exports.default = series(imagenes, versionWebp, versionAvif, css, dev);
// exports.default = taskDefault;
// exports.default = parallel(css, dev);



// series - Se inicia una tarea y hasta que finaliza, inica la siguiente

// parallel - Todas inician al mismo tiempo


export default series(imagenes, versionWebp, versionAvif, css, dev);