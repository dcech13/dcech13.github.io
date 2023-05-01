// code from https://github.com/voranzovv/EmailJs_Tutorial
// youtube tutorial https://www.youtube.com/watch?v=dgcYOm8n8ME&ab_channel=CodewithVoran
// emailjs is a free tool that lets users use credentials to have messages sent to them from forms
function sendMessage() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }


    const serviceID = "service_k30hodg";
    const templateID = "template_x4bjrkr";

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            alert("Message sent!");
            console.log(res);
        })
        .catch(err=> console.log(err))

}
// end cited code

// form verification
