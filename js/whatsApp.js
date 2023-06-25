async function openWhatsApp() {
    var message = document.getElementById("message").value;
    window.open(`https://wa.me/989113114523?text=${message}`, "_blank");
    document.getElementById("message").value = "";



};
