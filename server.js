/**
 * Created by hekk on 2017/5/23.
 */
var path = require('path');
var express = require('express');
var fs=require('fs');
var file= path.resolve('./mock/navigation.json');
var result=JSON.parse(fs.readFileSync(file));
var app = express();
app.use('/dist', express.static(path.resolve('./dist')));
var port = 8095;
app.get('*', function (req, res) {
    //console.log(req);
    if(req.path == '/index/cate/moveOnCate.html'){
        res.end(JSON.stringify(result));
    }else{
        res.sendFile(path.resolve('./html/index.html'));
    }

});
app.post('/index/cate/moveOnCate.html',function(req,res){
    res.send(JSON.stringify(result));
});
var fileSecond= path.resolve('./mock/navigationSecond.json');
var resultSecond=JSON.parse(fs.readFileSync(fileSecond));
app.post('/index/product/clickProductCate.html',function(req,res){
    //setTimeout(()=>{
        res.send(JSON.stringify(resultSecond));
    //},6000);
});
app.listen(port, (error) => {
    if (error) {
        console.error(error)
    } else {

        console.info("==>  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});
