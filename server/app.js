const Koa = require('koa')
const router = require('../router')
const bodyParser = require('koa-bodyparser')
const log4js = require('koa-log4')
const app = new Koa()
const HOST = 'http://127.0.0.1'
const PORT = process.env.PORT || 3000


require('../log')  //引入（运行）日志配置文件， 生产日志目录及相应文件
const logger = log4js.getLogger('app') //将当前文件日志命名为 app 
logger.info('--------step into koa-------------')

// 记录所有http请求 必须放在其他app.use的前面
app.use(log4js.koaLogger(log4js.getLogger('http'), { level: 'auto' }))

// 统一请求响应中间件
app.use(require('./utils/responseMiddle'))

// 解析Post body请求数据中间件
app.use(bodyParser())

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(PORT,()=>{
    logger.info(`App listening on port ${PORT}`)
})
