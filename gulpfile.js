
//var alljs = [
//        './src/js/app/**/*.js',
//        './src/js/app/*.js'
//    ];

var config = require('./gulp.config.js')();
var gulp = require('gulp');

var $ = require('gulp-load-plugins')({lazy : true});


//var jshint = require('gulp-jshint');

gulp.task('hint', function() {
    gulp.src(config.alljs)
   
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish', {verbose:true}));
});

gulp.task('less',function(){
    console.log(config.temp);
    gulp.src(config.bootstrapLess)
    .pipe($.less())
    .on('error', errorLogger)
    //.pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
    .pipe(gulp.dest('./src/js/lib/bootstrap'));

});

gulp.task('less-watcher',function(){
    gulp.watch(config.lessFiles,['less']);
});

gulp.task('wiredep',function(){
    var wiredep = require('wiredep').stream;
    var options = config.getWiredepDefaultOptions();
    console.log(config.appjs);
    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.appjs)))
        .pipe(gulp.dest(config.client));
    
    
        
});

function errorLogger(err){
    console.log("*** Start of Error");
    console.log(err);
    console.log("*** End of Error");
    this.emit("end");
}