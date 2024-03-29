var express = require('express');
var fs = require('fs');
var app = express();

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8082;
}

/*
    add_header 'Cross-Origin-Embedder-Policy' 'require-corp';
    add_header 'Cross-Origin-Opener-Policy' 'same-origin';
 */
const _get_index = (path, req) => {
    const res = path.res;
    res.set({
        'Cross-Origin-Embedder-Policy': 'require-corp',
        'Cross-Origin-Opener-Policy': 'same-origin'
    });
    res.send(fs.readFileSync('./index.html', 'utf8'));
};


app.get(("/"), _get_index);
app.get('/:file', function (req, res) {
    fs.readFile(req.params.file, (err, filetext) => {
        if (!err) {
            res.contentType(req.params.file);
            res.send(filetext);
        }
    });
});
app.use(express.static('.'));

try {
    app.listen(port, () => {
        console.log('Listening on port ' + port);
    });
}
catch (e) {
    //port unavailable: let's try another free port
    const server = app.listen(0, () => {
        console.log('Listening on port ' + server.address().port);
    });
}