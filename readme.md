## 1. 项目预热-了解任务自动化
+ 什么是任务自动化
任务自动化：减少人工操作，用电脑自动监听所有操作，自动响应
+ gulp的作用
用自动化构建工具增强你的工作流程的一个工具
+ 了解如何使用gulp完成任务自动化


## 2. 项目预热-编译工具（Babel、webpack）
+ Babel：JavaScript的编译器，用于转换ES6语法
+ babel的核心用法
+ webpack及webpack-stream的作用
	- webpack：模块化构建工具，用来解决模块化
	- webpack-stream：webpack对Glup的一个支持

## 3. 项目构建
+ 创建一个es6前端工程
+ 完成目录结构、自动构建、服务器搭建


## 4. 目录结构
```
ES6LotteryProject  
  | --- app（放置前端代码）  
  | ---  | -------- CSS（存放样式文件）  
  | ---  | -------- js（存放JavaScript文件）  
  | ---  | --------  | -------- class（存放ES6 class 类）  
  | ---  | --------  | -------- index.js（入口文件）  
  | ---  | -------- views（存放模板文件，html）
  | ---  | --------  | -------- error.ejs（错误模板文件）
  | ---  | --------  | -------- index.ejs（入口模板文件）
  | --- server（服务器目录）
  | --- tasks（构建工具目录）
  | ---  | -------- util（放置常用脚本）
  | --- .babelrc（babel配置文件，ES6转ES5）
  | --- gulpfile.babel.js（gulp配置文件）
  | --- package.json（安装依赖包过程中，需要有package.json文件）
  注：
  1. 在模板文件夹中创建 .ejs 文件，是因为创建的服务器代码是通过 express Node框架创建的，此框架使用的模板引擎为 ejs引擎。可以当做 HTML 使用。
  2. 创建 gulpfile.babel.js：Gulp官网中为创建 gulpfile.js 文件，因为此项目中使用ES6构建脚本，如果不加 .babel ，在执行构建脚本时会报错
```


### 4.1 server 目录
+ 全局安装`express` 和 `express-generator` 脚手架, 在server目录底下执行`express -e .` , 表示当前目录中使用ejs作为模板：
```bash
$ npm install -g express-generator
$ express -e .
```
```bash
create : public/
   create : public/javascripts/
   create : public/images/
   create : public/stylesheets/
   create : public/stylesheets/style.css
   create : routes/
   create : routes/index.js
   create : routes/users.js
   create : views/
   create : views/error.ejs
   create : views/index.ejs
   create : app.js
   create : package.json
   create : bin/
   create : bin/www

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=server:* npm start

 ```
+ `npm install` 自动安装目录下package.json的依赖包


### 4.2 task 目录 >
这个构建目录下创建很多任务的js 比如文件的合并、脚本的编译、模版的自动更新等等

+ 新建`util` 放置常见脚本 新建`arg.js`放置命令行解析脚本
```bash
mkdir util 
touch util/args.js
```

+ 新建 scrips.js 处理JavaScript文件脚本
```bash
npm install --global gulp-cli
npm install gulp gulp-if gulp-concat webpack webpack-stream vinyl-named gulp-livereload gulp-plumber gulp-rename  gulp-uglify gulp-util yargs --save-dev
```
+ 新建 page.js 放置处理模板脚本
+ 新建 css.js 放置处理css脚本
+ 新建 server.js 放置处理服务器脚本
+ 新建 browser.js 处理文件自动监听
+ 新建 clean.js  清空文件任务脚本
```bash
npm install gulp-live-server del gulp-sequence --save-dev
```
+ 新建 build.js 关联任务脚本
+ 新建 default.js 任务入口-gulp默认的task


### 4.3 根目录
+ app
+ package.json 
+ .babelrc
```bash
npm install babel-loader babel-core babel-preset-env babel-preset-es2015 webpack --save-dev
```
```bash
// 配置文件
{
	"presets": ["es2015"]
}
```
+ gulpfile.babel.js
gulp 会根据 requireDir 提供的路径自动加载该目录下所有的任务，并找到任务 default 开始执行。
```bash
import requireDir from 'require-dir' // 可以将任务分离到多个文件
// gulp 会根据 requireDir 提供的路径自动加载该目录下所有的任务，并找到任务 default 开始执行。
requireDir('./tasks')
```


## 5. 自动化错误与解决方案

+ Q：Failed to load external module @babel/register
	A：gulp @3.9.1会出现此问题，安装gulp @3.9.0即可 
```bash
npm i -g gulp@3.9.0
```

+ Q：gulp中使用 webpack 4.0 版本报错，webpackv2 之后都用rules
```bash
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
```
	A：加上mode 和 把module里的那个loaders改成rules
```javascript
	mode: 'production',
	module: {
		rules: [{
			test:/\.js/,
			loader: 'babel-loader'
		}]
	}
```
+ 在执行`gulp --watch`后，一直没有`listening on 35729 ...` , 后来发现`/util/args.js`忘记了：
```javascript
export default args
```

+ 注意：现在babel已经升级到7，安装的时候记得要安装loader与Babel对应的版本，不要混用babel 7.x以后的@版本


## 6. 项目运行

```
gulp --watch
```
```
deMacBook-Pro:es6-lotteryticket connie$ gulp --watch
[15:41:50] Requiring external module babel-core/register
[15:41:52] Using gulpfile ~/Documents/web-note/ES6/es6-lotteryticket/gulpfile.babel.js
[15:41:52] Starting 'build'...
[15:41:52] Starting 'clean'...
[15:41:52] Finished 'clean' after 32 ms
[15:41:52] Starting 'css'...
[15:41:52] Finished 'css' after 15 ms
[15:41:52] Starting 'pages'...
[15:41:52] Finished 'pages' after 13 ms
[15:41:52] Starting 'scripts'...
[15:41:53] Version: webpack 4.39.2
Built at: 2019-08-27 15:41:53
   Asset       Size  Chunks             Chunk Names
index.js  964 bytes       0  [emitted]  index
Entrypoint index = index.js
[15:41:53] Finished 'scripts' after 856 ms
[15:41:53] Starting 'browser'...
[15:41:53] Starting 'server'...
livereload[tiny-lr] listening on 35729 ...
GET / 200 23.798 ms - 128

```
在浏览器输入：`localhost：3000`
因为用的express搭建的服务器，默认是3000端口，如果端口占用，可到`server/bin/www` 里更改
页面是空白页，可到默认入口模板文件里 `app/views/index.ejs` 里随意编辑些html预览

## 7. 浏览器热更新
> 连接中间件，将livereload脚本添加到响应中。不需要浏览器插件。如果您对浏览器插件感到满意，那么您不需要这个中间件
> [详解](https://www.cnblogs.com/koleyang/p/5567556.html)

+ 安装`connect-livereload`

```bash
npm i connect-livereload --save-dev
```
然后在`server/app.js` 里添加：

```javascript
app.use(express.static(path.join(__dirname, 'public')));
// 注意顺序
// 热更新
app.use(require('connect-livereload')());
```



