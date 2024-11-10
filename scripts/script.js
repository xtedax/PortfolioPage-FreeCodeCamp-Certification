window.addEventListener('load', function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    // Add the 'visible' class to each fade-in element to trigger the fade-in effect on page load
    fadeInElements.forEach(element => {
        element.classList.add('visible');
    });
});

window.addEventListener('scroll', function () {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    fadeInElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        // Check if the element is in view
        if (elementTop < windowHeight) {
            element.classList.add('visible');
        }
    });
});