const express = require('express');
const indexRoutes = require('./routes/indexRoutes.js')
const app = express();

const PORT = 4500;

app.use('/', indexRoutes);

app.listen(PORT, () => {
    console.log('app listening on port',PORT);
} );





