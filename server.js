var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var stringIfyFile = "";

app.use(bodyParser.json());
app.get('/getNote', (req, res) => {
    fs.readFile('./test.json', 'utf8', (err, data) => {
        if (err) throw err;
        stringifyFile = data;
        res.send(data);
    });
});
app.post('/updateNote/:note', (req, res) => {
    stringifyFile += req.params.note;
    fs.writeFile('./test.json', stringifyFile, (err) => {
        if (err) throw err;
        console.log('file updated!');
    });
})

app.listen(3000);