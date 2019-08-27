import gulp from 'gulp'
import gulpif from 'gulp-if'
// 启动服务器的包
import liveserver from 'gulp-live-server'
import args from './util/args.js'

gulp.task('server', (cb) => {
	if(!args.watch) return

	var server = liveserver.new(['--harmony', 'server/bin/www'])
	server.start()

	// 监听模版文件热更新
	gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function(file){
		server.notify.apply(server, [file])
	})
	// 监听需要重启服务器的文件
	gulp.watch(['server/routes/**/*.js', 'server/app.js'], function(){
		server.start.bind(server)()
	})

})
