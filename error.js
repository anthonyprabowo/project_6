// 404 error
function fourOFour(req, res, next) {
    console.log("Handling 404 error")
    const err = new Error("File Not Found")
    err.status = 404;
    next(err)
};

function generalError(err, req, res, next) {
    console.error(err.message)
    console.error(err.status)
    if(err.status === 404){
        res.render('page-not-found', {err})
    } else {
        res.render('error', {err})
    }
};

module.exports = {fourOFour, generalError}
