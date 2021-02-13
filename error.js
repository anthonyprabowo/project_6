// 404 error
function fourOFour(req, res, next) {
    const err = new Error("File not found")
    err.status = 404;
    next(err)
};




function generalError(err, req, res, next) {
    if(err.stack) console.error(err)

    res.status(err.status || 500).send(err.message);
};

module.exports = {fourOFour, generalError}
