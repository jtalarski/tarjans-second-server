const express = require('express');

console.log("Server time");

const app = express();


// listening usually goes at the end, since you have to
// wait for app to be created
const port = 3000;
app.listen(port, function () {
    console.log("listening at 3000");
});
