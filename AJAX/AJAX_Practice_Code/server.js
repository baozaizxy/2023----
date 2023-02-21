//NMD去学node.js和ES6箭头函数了
// 1. 引入express
const { request, response } = require('express');
const express = require('express');

//2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
// 请求头url是server的话 进入回调函数并由response进行响应
app.get('/server',(request, response)=>{
   //设置响应头  设置允许跨域     key:Access-Control-Allow-Origin  value:*
    response.setHeader('Access-Control-Allow-Origin','*');
    
    //设置响应体
    response.send('HELLO AJAX');

});

app.post('/server',(request, response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // //遇到自定义响应头时可以设置
    // response.setHeader('Access-Control-Allow-Headers', '*');
    
    //设置响应体
    response.send('HELLO AJAX POST');

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

    // 针对axios-server
    app.options('/axios-server', (request, response) =>{
        response.setHeader('Access-Control-Allow-Headers', '*');// 设置允许自定义请求头
        response.setHeader('Access-Control-Allow-Origin', '*');// 设置允许跨域
        // response.end();
    });

    app.post('/axios-server', (request, response) =>{
        response.setHeader('Access-Control-Allow-Headers', '*');// 设置允许自定义请求头
        response.setHeader('Access-Control-Allow-Origin', '*');// 设置允许跨域
        console.log('axios-server 接口接收到请求');

        response.send('HELLO Axios');
    });

//4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动， 8000端口监听中....");
})