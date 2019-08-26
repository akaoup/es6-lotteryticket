import requireDir from 'require-dir' // 可以将任务分离到多个文件
// gulp 会根据 requireDir 提供的路径自动加载该目录下所有的任务，并找到任务 default 开始执行。
requireDir('./tasks')