module.exports = {
    //相当于webpack-dev-server,  对本地服务器进行配置
    devServer : {
         proxy:  {
            "/api" : {
                 target: "https://3e6dafbd35ba.ngrok.io",   //需要跨域的目标url 
                 changeOrigin: true,           // 将基于名称的虚拟托管网站的选项，如果不配置，请求会报404
                 ws:  true,
                 pathRewrite: {
                     " ^/api " :  ""          //若请求的路径在目标url下但不在/team下，则将其转换成空
                 }    
            }
        }
    }     
}