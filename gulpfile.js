var gulp = require('gulp'),							// Taskmanager
  concat = require('gulp-concat'),					// Puts into one file
  fs = require('fs'),								// Shows an error if file is not found
  del = require('del'),								// Removes the folder
  // minify = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  connect = require('gulp-connect'),				// Helps to run server
  jshint = require('gulp-jshint');					// Makes sure that all javascript rules are followed

var filePaths = {
 scripts: ['bower_components/jquery/dist/jquery.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-route/angular-route.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'app/components/**/**/*.js'
    ],

  // images: 'app/assets/img/*',

  styles: ['bower_components/bootstrap/dist/css/bootstrap.css',
    'app/styles/**/*.css'],

};

//validate sources // Make sure file exists
var validateResources = function (resources) {
  resources.forEach(function (resource) {
    if (!resource.match(/\*/) && !fs.existsSync(resource)) {
      throw resource + " not found!";
    }
  });
}


//clean
gulp.task('clean', function(cb) {
  del(['app/lib'], cb);
});

//Copy styles
gulp.task('styles', function(){
  validateResources(filePaths.styles);
  return gulp.src(filePaths.styles)
  .pipe(concat('app.css'))
  // .pipe(minify())
  .pipe(gulp.dest('app/lib/css'))
})

// Copy Scripts
gulp.task('scripts', function() {

  validateResources(filePaths.scripts);

  return gulp.src(filePaths.scripts)
    .pipe(concat('app.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('app/lib/js'))
});

//server connection
gulp.task('connect', function(){
  connect.server({
    livereload:true,
    root: 'app',
    port: 4000
  })
});

// // Copy all static images
// gulp.task('images', function() {
//   return gulp.src(filePaths.images)
//     .pipe(imagemin({optimizationLevel: 5}))
//     .pipe(gulp.dest('app/lib/img'));
// });

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(filePaths.scripts, ['scripts']);

  gulp.watch(filePaths.styles, ['styles']);

  // gulp.watch(filePaths.images, ['images']);

});

// gulp.task('jshint', function() {
//   gulp.src('./app/components/**/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'));
// });



// The default task (called when you run `gulp` from cli)
gulp.task('default', ['clean', 'scripts', 'watch', 'connect'], function() {
    gulp.start('scripts', 'styles');
});






