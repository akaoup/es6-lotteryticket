// build.js关联任务
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence'; // 按顺序逐个同步地运行任务

gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'server']));
