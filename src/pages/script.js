

document.addEventListener("DOMContentLoaded", function() {
    const whatsappButton = document.getElementById("whatsapp-button");
    const facebookButton = document.getElementById("facebook-button");

    whatsappButton.addEventListener("click", function() {
        const message = "Olá, estou interessado(a) em suas camisetas. Poderia me dar mais informações?";
       
        const encodedMessage = encodeURIComponent(message);
        
        const phoneNumber = "5512996230158";
        
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        
        window.open(whatsappUrl, '_blank');
    });

    facebookButton.addEventListener("click", function() {
        
        const facebookUrl = "https://www.facebook.com/profile.php?id=61564937091013"; 
        
        window.open(facebookUrl, '_blank');
    });
});



