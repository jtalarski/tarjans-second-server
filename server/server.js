const express = require('express');

console.log("Server time");

const app = express();

let coolFrogs = [{ name: "greg", frog: "frog" },
{ name: "alvin", frog: "bullfrog" },
{ name: "spike", frog: "toad" }];

//serve static file from public folder
app.use(express.static(`server/public`));

app.get('/coolfrogs', function (req, res) {
    res.send(coolFrogs);
});



// listening usually goes at the end, since you have to
// wait for app to be created
const port = 3000;
app.listen(port, function () {
    console.log("listening at 3000");
});
