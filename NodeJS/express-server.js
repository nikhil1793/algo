const express = require('express');

const app = express();

/**
 * configuring middleware
 */
app.use((req, res, next) => {
   console.log("In the Middleware");
   next();
});

app.use((req, res, next) => {
    res.send('<h1>Hello</h1>')
 });

app.listen(8000);
