
console.log("frogs?");

$(document).ready(onReady);

function onReady() {
    console.log("frog time");

    $.ajax({ url: "/coolfrogs" })
        .then(function (response) {
            console.log('we got a response!', response);
        });
    //AJAX!!!



    /*
    for (let frog in frogs) {
        $('tbody').append(`
            <tr>
                <td>${frog.name}</td>
                <td>${frog.frog}</td>
            </tr>
        `);
    } */
};
/*
[{ name: "greg", frog: "frog" },
{ name: "alvin", frog: "bullfrog" },
{ name: "spike", frog: "toad" }]
*/