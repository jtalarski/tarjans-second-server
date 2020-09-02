
console.log("frogs?");

$(document).ready(onReady);

function onReady() {
    //AJAX!!!
    $.ajax({
        url: "/coolfrogs",
        method: 'GET'
    }).then(function (frogs) {
        console.log('we got a response!', frogs);

        for (let frog of frogs) {
            $('tbody').append(`
                <tr>
                <td>${frog.name}</td>
                <td>${frog.frog}</td>
                </tr>`);
        }//end for loop
    }).catch(function (badFrog) {
        console.log("Something bad happened!", badFrog);
        alert("Server is down, try again later");
    })

}//onReady end

/*
[{ name: "greg", frog: "frog" },
{ name: "alvin", frog: "bullfrog" },
{ name: "spike", frog: "toad" }]
*/