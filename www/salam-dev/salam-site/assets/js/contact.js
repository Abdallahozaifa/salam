/* global $, swal*/
/* Contact class*/
var Contact = {

    /* Contact section components */
    name: null,
    email: null,
    subject: null,
    message: null,

    /* Initializes the contact section components information */
    initInfo: function() {
        this.name = $("#name");
        this.email = $("#contact-email");
        this.subject = $("#subject");
        this.message = $("#contact-message");
    },

    /* Validates the fields in the contact section */
    validateInfo: function() {
        var infoCorrect = true;

        /* Checking if any of the contact input fields are empty */
        switch ("") {
            case this.name.val():
                infoCorrect = false;
                this.name.val("");
                break;
            case this.email.val():
                infoCorrect = false;
                this.email.val("");
                break;
            case this.subject.val():
                infoCorrect = false;
                this.subject.val("");
                break;
            case this.message.val():
                infoCorrect = false;
                this.message.val("");
        }

        return infoCorrect;
    },

    /* Resets the information in the fields */
    resetInfo: function() {
        this.name.val("");
        this.email.val("");
        this.subject.val("");
        this.message.val("");
    },

    /* Grabs the information from the fields */
    getInfo: function() {
        this.initInfo();
        return {
            name: this.name.val(),
            email: this.email.val(),
            subject: this.subject.val(),
            message: this.message.val()
        };
    },

    /* Sends the contact information to the server */
    sendInfo: function(contactInfo) {
        /* AJAX Call */
        $.ajax({
            url: "/contact",
            type: "POST",
            data: JSON.stringify(contactInfo),
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