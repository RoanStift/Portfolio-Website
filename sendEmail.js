const form = document.getElementById('emailForm');
const fullName = document.getElementById('name');
const email = document.getElementById('mail');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

function sendEmail() {
    const bodyMessage = `Name: ${fullName.value}<br> Email: ${email.value}<br> Phonenumber: ${phone.value}<br> Message: ${message.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "roanorlive@gmail.com",
        Password: "96AE12C9FBC378EEDA1093CCCE7D0778FDA7",
        To: 'roanorlive@gmail.com',
        From: "roanorlive@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "E-mail send!",
                    text: "Message has been send succesfully.",
                    icon: "success"
                });
            } else {
                alert("ERROR: something went from while sending e-mail.");
            }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
        sendEmail();
        form.reset();
    } else {
        Swal.fire({
            title: "Validation Error",
            text: "Please fill out all required fields correctly.",
            icon: "error"
        });
    }
});
