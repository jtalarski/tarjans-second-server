
console.log("frogs?");

$(document).ready(onReady);

function onReady() {
    refreshFrogs();
    $(document).on('click', '#frogbtn', onFrogBtn);

}//onReady end

function refreshFrogs() {
    //AJAX!!!
    $.ajax({
        url: "/coolfrogs",
        method: 'GET'
    }).then(function (frogs) {
        console.log('we got a response!', frogs);

        //render the frogs
        $('tbody').empty();
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
    });//end of AJAX!!!

}

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
        refreshFrogs();
    }).catch(function (errorInfo) {
        console.log('error time', errorInfo);
    });
}


/*
[{ name: "greg", frog: "frog" },
{ name: "alvin", frog: "bullfrog" },
{ name: "spike", frog: "toad" }]
*/