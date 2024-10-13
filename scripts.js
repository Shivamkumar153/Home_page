// Scroll animation for sections
window.addEventListener('scroll', () => {
    const aboutSection = document.getElementById('about');
    const featuresSection = document.getElementById('features');

    if (window.scrollY > aboutSection.offsetTop - window.innerHeight / 2) {
        aboutSection.querySelector('p').style.opacity = '1';
    }

    if (window.scrollY > featuresSection.offsetTop - window.innerHeight / 2) {
        featuresSection.querySelector('.features-list').style.opacity = '1';
    }
});

// Call to action button click
document.getElementById('cta-btn').addEventListener('click', () => {
    alert('Thank you for your interest! You are now signed up!');
});

// Form submission action
document.getElementById('send-btn').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
});