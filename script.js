// DYNAMIC NAVIGATION STATUS
// put into a function to ensure it's only declared once
(function() {
    let scrollTimeoutId;

    const changeNav = (entries, observer) => {
        console.log('START');
        let maxIntersectionRatio = 0;
        let maxIntersectionSection = null;
    
        entries.forEach(entry => {
            console.log('Entry:', entry.target);
            const intersectionRatio = entry.intersectionRatio;
            console.log('Intersection Ratio:', intersectionRatio);
    
            if (intersectionRatio > maxIntersectionRatio) {
            maxIntersectionRatio = intersectionRatio;
            maxIntersectionSection = entry.target;
            console.log('Max Intersection Section:', maxIntersectionSection);
            }
        });

        const updateNavLinks = () => {
            if (maxIntersectionSection) {
            const id = maxIntersectionSection.getAttribute('id');
            console.log('Active Section ID:', id);
    
            const navLinks = document.querySelectorAll('.side-header-link');
            navLinks.forEach(link => {
                if (link.getAttribute('href') !== `#${id}`) {
                link.classList.remove('active');
                console.log('Removed "active" class from:', link);
                }
            });
    
            const newLink = document.querySelector(`a[href="#${id}"]`);
            console.log('new link:', newLink);
    
            if (newLink) {
                newLink.classList.add('active');
                console.log('Added "active" class to new link.');
            }
            }
        };

        clearTimeout(scrollTimeoutId);
        scrollTimeoutId = setTimeout(updateNavLinks, 100);
    };

    const options = {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    };

    const observer = new IntersectionObserver(changeNav, options);
    const sections = document.querySelectorAll('.content-section');

    sections.forEach(section => {
        observer.observe(section);
    });
})();

// DYNAMIC POPUP POSITIONING 
// Get all language containers
const containers = document.querySelectorAll('.language-container');

containers.forEach(container => {
    // Get all language elements within the current container
    const languages = container.querySelectorAll('.language');
    console.log(languages);

    // Check if each language element is the last child in its container
    languages.forEach((language, index) => {
        console.log(language);
        if (index === languages.length - 1) {
            language.classList.add('last-language');
            console.log("adedd last language", language);
        }
    });
});

// PICTURE SLDESHOW
let slideIndex = 1;
showSlides(slideIndex);
// Button controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}