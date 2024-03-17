# css-guide


## Project cafeteria-sass

Template with gulp, SASS and BEM, cssnano and sourcemaps

- Install gulp
    - Install gulp dev: npm install --save-dev gulp
    - Install sass and gulp-sass: npm install --save-dev sass gulp-sass
    - Compile gulp: gulp {dev}
    - state-of-the-art code: makes css code compatible with non-compatible browsers 
    - npm install --save-dev autoprefixer gulp-postcss
    - npm install --save-dev gulp postcss
    - configure package.json navigator for example:  "browserslist": [
        "> 1"] or according to caniuse greater than 1%. "browserslist": [
        "IE 10"] or the latest version of each browser  "browserslist": [
        "last 1 version"] or   "browserslist": [
        "last 1 version", "> 1%" ]
    - npm install --save-dev gulp-imagemin@7.1.0 ------ npm uninstall gulp-imagemin ------ npm install --save-dev gulp-imagemin
    - npm install --save-dev gulp-webp
    - npm install --save-dev gulp-avif
    - configure gulpfile.mjs --> older version gulpfile.js.txts(nowrk)
- npm install --save-dev gulp-sourcemaps
- npm install --save-dev cssnano