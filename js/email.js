async function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_4ij3skf";
    const templateID = "template_tpsggha";

    try {
        const res = await emailjs.send(serviceID, templateID, params);
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!");
    } catch (err) {
        console.log(err);
    }
}
