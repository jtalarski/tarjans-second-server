
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
    });

    $(document).on('click', '#frogbtn', onFrogBtn);

}//onReady end

function onFrogBtn() {
    let newFrog = {
        name: $('#frogname').val(),
        frog: $('#frogfrog').val()
    };
    console.log('new froggy', newFrog);

    $.ajax({
        url: '/coolfrogs',
        method: 'POST',
        data: newFrog
    }).then(function (response) {
        console.log("created a frog", response);
    }).catch(function (errorInfo) {
        console.log('error time', errorInfo);
    });
}


/*
[{ name: "greg", frog: "frog" },
{ name: "alvin", frog: "bullfrog" },
{ name: "spike", frog: "toad" }]
*/