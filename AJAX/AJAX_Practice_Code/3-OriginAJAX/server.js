//NMD去学node.js和ES6箭头函数了
// 1. 引入express
const { request, response } = require('express');
const express = require('express');

//2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server',(request, response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    
    //设置响应体
    response.send('HELLO AJAX-2');

});

app.post('/server',(request, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // //遇到自定义响应头时可以设置
    // response.setHeader('Access-Control-Allow-Headers', '*');
    
    //设置响应体
    response.send('HELLO AJAX');

});

//可以接收任何类型的请求
app.all('server',(request,response)=>{
});

//JSON响应
app.all('/json-server',(request,response)=>{
});

//针对 IE 缓存
app.get('/ie', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应体
    response.send("HELLO IE - 5");

});

//针对 请求超时：作延时响应：2s
app.get('/delay', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        //设置响应体
        response.send("延时响应");
    }, 3000)


});

//4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动， 8000端口监听中....");
})