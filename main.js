/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});

/*===== FORM SUBMISSION WITH AJAX =====*/
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const messageDiv = document.getElementById('form-message');

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault(); // Prevent default form submission

        const form = e.target;
        const formData = new FormData(form);

        try {
            // Make the AJAX request to Formspree
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                // Show success message
                messageDiv.style.display = 'block';
                messageDiv.style.backgroundColor = '#80ed99';
                messageDiv.style.color = '#176d2d';
                messageDiv.textContent = 'Message sent successfully!';
                form.reset(); // Reset the form

                // Optional: Hide the message after 2 seconds
                setTimeout(() => {
                    messageDiv.style.display = 'none';
                }, 2000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // Show error message
            messageDiv.style.display = 'block';
            messageDiv.style.backgroundColor = '#ff6b6b';
            messageDiv.style.color = '#fff';
            messageDiv.textContent = 'Error sending message. Please try again.';
        }
    });
});
