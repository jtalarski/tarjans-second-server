
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
    })//end function
}//onReady end

/*
[{ name: "greg", frog: "frog" },
{ name: "alvin", frog: "bullfrog" },
{ name: "spike", frog: "toad" }]
*/