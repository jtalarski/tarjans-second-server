const express = require('express');
const bodyParser = require('body-parser');

console.log("Server time");

const app = express();

//setup body parser to read request JSON body
app.use(bodyParser.urlencoded({ extended: true }));

let coolFrogs = [{ name: "greg", frog: "frog" },
{ name: "alvin", frog: "bullfrog" },
{ name: "spike", frog: "toad" }];

//serve static file from public folder
app.use(express.static(`server/public`));

app.get('/coolfrogs', function (req, res) {
    res.send(coolFrogs);
});

//Endpoint
//POST/frogs
//create a new activity and add to array
app.post('/coolfrogs', function (req, res) {
    console.log('I got a request!', req.body);
    let newFrog = req.body;
    //pushing to 
    coolFrogs.push(newFrog);
    res.send(newFrog);
})



// listening usually goes at the end, since you have to
// wait for app to be created
const port = 3000;
app.listen(port, function () {
    console.log("listening at 3000");
});
