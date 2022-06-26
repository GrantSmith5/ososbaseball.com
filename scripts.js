function sendMail(params) {
    var tempParams ={
        from_name: document.getElementById("fromName").value,
        to_name: "justsushi55555@gmail.com",
        message: document.getElementById("msg").value,
    }

    emailjs.sendForm("contact_service", "contact_template", tempParams)
    .then(function(response){
        console.log("success", response.status), response.txt;
    }, function(error) {
        console.log('FAILED...', error);
    })
}

