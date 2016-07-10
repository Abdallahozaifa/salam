/* global $*/
$(document).ready(function() {
    console.log("Salam.js is running!");

    var reservationBtn = $("#reservationSubmitBtn");
    reservationBtn.click(function(event) {
        event.preventDefault();
        var customerReservation = {
            "fullname": $("#fullname").val(),
            "email": $("#email").val(),
            "phoneNumber": $("#phoneNumber").val(),
            "numOfPerson": $("#numOfPerson").val(),
            "date": $("#datepicker").val(),
            "message": $("#message").val()
        };

        console.log(customerReservation);

        $.ajax({
            url: "/reservation",
            type: "POST",
            data: JSON.stringify(customerReservation),
            contentType: "application/json",
            dataType: 'json'
        });
    });

});
