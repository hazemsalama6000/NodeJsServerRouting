

function Routing(req, res) {
    switch (req.url) {
        case '/any':
            readFileThenResponse('./any.html', res);
            break;

        default:
            readFileThenResponse('./error.html', res);
            break;
    }
}

module.exports=Routing;