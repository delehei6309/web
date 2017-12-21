/**
 * Created by hekk on 2017/5/23.
 */
var path = require('path');
var express = require('express');
var app = express();
app.use('/dist', express.static(path.resolve('./dist')));
var port = 8095;
app.get('/', function (req, res) {
    res.sendFile(path.resolve('./html/index.html'))
})
app.get('/data', function (req, res) {
    var response = {
        "first_name":'first_name',
        "last_name":'last_name'
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
app.listen(port, (error) => {
    if (error) {
        console.error(error)
    } else {

        console.info("==>  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});
