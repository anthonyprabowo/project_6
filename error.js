// 404 error
function fourOFour(req, res, next) {
    const err = new Error("File Not Found")
    err.status = 404;
    next(err)
};

function generalError(err, req, res, next) {
    if(err.stack) console.error(err)
    if(err.status === 404){
        res.render('page-not-found', {err})
    } else {
        res.render('error', {err})
    }
};

module.exports = {fourOFour, generalError}
