/* global $, swal */
/* Reservation Class */
var Reservation = {

    /* Reservation Components*/
    fullname: null,
    email: null,
    phoneNumber: null,
    numOfPerson: null,
    date: null,
    phoneNumber2: null,
    message: null,

    /* Initializes the reservation info */
    initInfo: function() {
        this.fullname = $("#fullname");
        this.email = $("#email");
        this.phoneNumber = $("#phoneNumber");
        this.numOfPerson = $("#numOfPerson");
        this.date = $("#datepicker");
        this.phoneNumber2 = $("#phoneNumber2");
        this.message = $("#message");
    },

    /* Validates the reservation info */
    validateInfo: function() {
        var infoCorrect = true;
        
        /* Checking if any of the reservation input fields are empty */
        switch ("") {
            case this.fullname.val():
                console.log("FullName!");
                infoCorrect = false;
                this.fullname.val("");
                break;
            case this.email.val():
                console.log("Email!");
                infoCorrect = false;
                this.email.val("");
                break;
            case this.phoneNumber.val():
                console.log("PhoneNumber!");
                infoCorrect = false;
                this.phoneNumber.val("");
                break;
            case this.numOfPerson.val():
                console.log("Num Of person!");
                infoCorrect = false;
                this.numOfPerson.val("");
                break;
            case this.date.val():
                console.log("date!");
                infoCorrect = false;
                this.date.val("");
                break;
            case this.phoneNumber2.val():
                console.log("PhoneNumber2!");
                infoCorrect = false;
                this.phoneNumber2.val("");
                break;
            case this.message.val():
                console.log("Message!");
                infoCorrect = false;
                this.message.val("");
                break;
        }
        
        return infoCorrect;
    },

    /* Resets all the input fields for the reservation */
    resetInfo: function() {
        this.fullname.val("");
        this.email.val("");
        this.phoneNumber.val("");
        this.numOfPerson.val(0);
        this.date.val("");
        this.phoneNumber2.val("");
        this.message.val("");
    },

    /* Obtains the reservation info */
    getInfo: function() {
        this.initInfo();
        return {
            fullname: this.fullname.val(),
            email: this.email.val(),
            phoneNumber: this.phoneNumber.val(),
            numOfPerson: this.numOfPerson.val(),
            date: this.date.val(),
            message: this.message.val()
        };
    },

    /* Sends the info to the server */
    sendInfo: function(reservationInfo) {
        /* AJAX Call */
        $.ajax({
            url: "/reservation",
            type: "POST",
            data: JSON.stringify(reservationInfo),
            contentType: "application/json",
            async: true,
            complete: function(result, textStatus) {
                /* Detects if the response from the server */
                if (textStatus != "error") {
                    /* show success message */
                    swal({
                        title: 'Success!',
                        text: result.responseText,
                        type: "success",
                        timer: 2000
                    }).done();
                }
                else {
                    /* show error message */
                    swal({
                        title: 'Error!',
                        text: result.responseText,
                        type: "error",
                        timer: 2000
                    }).done();
                }
            }
        });
    }
};
