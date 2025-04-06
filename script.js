document.getElementById('toggle').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

function closeMenu() {
    const checkbox = document.getElementById('click');
    checkbox.checked = false;
  }


  document.getElementById("contactMe").addEventListener("click", function() {
    window.open("https://wa.me/708370808", "_blank");
});  

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
       
        const name = document.getElementById('n').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('te').value;

        const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        const whatsappUrl = `https://wa.me/7083708808?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
    });
});




document.getElementById("dc").addEventListener("click", function() {
    const link = document.createElement('a');
    link.href = 'images/manoj_resume.pdf';  
    link.click();  
});


