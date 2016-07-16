/* global $, Reservation, swal, Contact */
$(document).ready(function() {
    console.log("Salam.js is running!");
    var reservationBtn = $("#reservationSubmitBtn");
    var contactBtn = $(".mu-send-btn");

    /* Reservation submit button handler */
    reservationBtn.click(function(event) {
        /* Prevents the page from reloading */
        event.preventDefault();

        /* Obtains the reservation info from the input fields */
        var reservationInfo = Reservation.getInfo();

        /* Validates the reservation information */
        var validationStatus = Reservation.validateInfo();

        /* True indicates that the reservation information was validated correctly */
        if (validationStatus == true) {

            /* Resets the reservation input fields */
            Reservation.resetInfo();

            /* Sends the reservation info to the server*/
            Reservation.sendInfo(reservationInfo);

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

    /* Contact us button handler */
    contactBtn.click(function(event) {
        event.preventDefault();

        /* Obtains the contact section information */
        var contactInfo = Contact.getInfo();

        /* Validation status of the fields */
        var validationStatus = Contact.validateInfo();

        /* True indicates the fields were validated correctly */
        if (validationStatus == true) {
            Contact.resetInfo();
            Contact.sendInfo(contactInfo);
        }
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
