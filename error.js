// 404 error
function fourOFour(req, res, next) {
    console.log("Handling 404 error");
    const err = new Error('err');
    err.status = 404;
    err.message = 'Oops, page not found. Looks like that route does not exist.';
    next(err);
};

function generalError(err, req, res, next) {
    if(err){
        console.log(err.message);
        console.log(err.status);
    }
    if(err.status === 404){
        res.render('page-not-found', {err})
    } else {
        err.message = err.message
        res.render('error', {err});
    }
};

module.exports = {fourOFour, generalError}
