const options = {
    database:{
        //数据库连接地址
        MONGODB_CONNECT:'mongodb://127.0.0.1:27017/',
        MONGODB_DATABASE_NAME:'DataAnalysisBB',
        COLLECTION_INTERFACE_NAME:"interface",
        COLLECTION_COLUMNS_NAME:"columns",
        COLLECTION_COLUMNS_ORDER:"order",
    },
    user:{
        name : "zhujia@myhug.cn",
        // name : "admin",
        password : "jongsuk0914@",
        // password : "myhug20160819",
        ticketname:"SSSsunxiuguo",
        ticketpass:"Q4Oq1T29Xx"
    },
      url:{
        //登录,获取COOKIE
        POST_LOGIN: 'https://auth.myhug.cn/user/login',
    }
} 
module.exports = options 