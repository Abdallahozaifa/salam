/* global $, reservation, swal */
$(document).ready(function() {
    console.log("Salam.js is running!");
    var reservationBtn = $("#reservationSubmitBtn");

    /* Reservation submit button handler */
    reservationBtn.click(function(event) {
        /* Prevents the page from reloading */
        event.preventDefault();

        /* Obtains the reservation info from the input fields */
        var reservationInfo = reservation.getInfo();

        /* Validates the reservation information */
        var validationStatus = reservation.validateInfo();

        /* True indicates that the reservation information was validated correctly */
        if (validationStatus == true) {

            /* Resets the reservation input fields */
            reservation.resetInfo();

            /* Sends the reservation info to the server*/
            reservation.sendInfo(reservationInfo);

        }
        /* Displays an Error Message*/
        else {
            swal({
                title: 'Error!',
                text: "Please fill in all of the fields correctly!",
                type: "error",
                timer: 2000
            }).done();
        }
    });

});
