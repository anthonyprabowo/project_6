const express = require('express');
const port = 3000;
const route = require('./routes/routes');
const error = require('./error');



// initialize express app
const app = express();
app.set('view engine', 'pug');
// static data
app.use('/static', express.static('./public'));

// routes
app.use(route);

// error handling
app.use(error.fourOFour);
app.use(error.generalError);

// port listener
app.listen(port, () => {
    console.log(`App listening at port ${port}`);
})


