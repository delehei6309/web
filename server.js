/**
 * Created by hekk on 2017/5/23.
 */
var path = require('path');
var express = require('express');
var fs=require('fs');
/*var file= path.resolve('./mock/navigation.json');
var result=JSON.parse(fs.readFileSync(file));*/
var app = express();
app.use('/dist', express.static(path.resolve('./dist')));
var port = 8095;
app.get('*', function (req, res) {
    //console.log(req);
    res.sendFile(path.resolve('./html/index.html'));

});
let pathObj = {
    '/index/cate/moveOnCate.html':'navigation',
    '/index/product/clickProductCate.html':'navigationSecond',
    '/index/product/getProductListByCateid.html':'secondCateList',
    '/index/article/clickCate.html':'newsClickCate',
    '/index/product/productDetail.html':'productDetail',
    '/index/article/articleDetail.html':'articleDetail',
    '/channel/getChannelUser':'channelUser',
    '/index/index/index.html':'home'
};
let resultObj = {};
for(let i in pathObj){
    let file= path.resolve(`./mock/${pathObj[i]}.json`);
    resultObj[i] = JSON.parse(fs.readFileSync(file));
    //console.log(resultObj[i],'12345566')
}
app.post('*',function(req,res){
    //console.log(JSON.stringiy(resultObj[req.path]))
    //res.send(JSON.stringiy(resultObj[req.path]));
    res.send(resultObj[req.path]);
});
app.listen(port, (error) => {
    if (error) {
        console.error(error)
    } else {

        console.info("==>  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});
