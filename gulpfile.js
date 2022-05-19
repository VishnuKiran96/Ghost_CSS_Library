// Importing required functions from gulp
const { src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

// Function to use above imported functions to compile our scss files into css
function buildStyles(){
    // return the relative-path to the .scss file as the source
    return src('ghost/**/*.scss')
        // piping the above source file into a sass compiler
        .pipe(sass())
        // piping the compiled sass file to its destination
        .pipe(dest('css'))
}

// Function to watch the sass file which is used to automatically run the above compiler function
// everytime a change has been saved in the src scss file
function watchTask(){
    // using the watch function we imported at the beginning of this page
    watch(['ghost/**/*.scss'],buildStyles)
}

// using the series function we imported from gulp to export the functions we created above
// IN ORDER
exports.default = series(buildStyles, watchTask)