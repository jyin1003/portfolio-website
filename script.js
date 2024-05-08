// const languages = document.querySelectorAll('.language');

// languages.forEach(language => {
//     const popup = document.createElement('div');
//     popup.classList.add('popup');
//     popup.textContent = language.dataset.popup;

//     language.appendChild(popup);

//     language.addEventListener('mouseenter', () => {
//     const rect = language.getBoundingClientRect();
//     popup.style.top = `${rect.top - popup.offsetHeight - 10}px`;
//     popup.style.left = `${rect.left + rect.width / 2 - popup.offsetWidth / 2}px`;
//     popup.style.opacity = '1';
//     popup.style.visibility = 'visible';
// });

// language.addEventListener('mouseleave', () => {
//     popup.style.opacity = '0';
//     popup.style.visibility = 'hidden';
//     });
// });
// $(".language").mouseover(function() {
//     $(this).children(".popup").show();
// }).mouseout(function() {
//     $(this).children(".popup").hide();
// });
// $(".language").hover(
//     function(e){
//         $(".popup").show();
//     },
//     function(e){
//         $(".popup").hide();
//     });​​​​​​​​​​
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

function handleScroll() {
    sections.forEach(section => {
    const sectionTop = section.offsetTop - section.offsetHeight / 2;
    const sectionBottom = section.offsetTop + section.offsetHeight / 2;
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const targetLink = document.querySelector(`a[href="#${section.id}"]`);
        navLinks.forEach(link => link.classList.remove('active'));
        targetLink.classList.add('active');
    }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // Call the function once to highlight the initial section