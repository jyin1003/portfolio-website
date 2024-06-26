// DYNAMIC NAVIGATION STATUS
// put into a function to ensure it's only declared once
document.addEventListener('DOMContentLoaded', function() {
    (function() {
        let scrollTimeoutId;

        const changeNav = (entries, observer) => {
            // console.log('START');
            let maxIntersectionRatio = 0;
            let maxIntersectionSection = null;
            const isAtTop = contentContainer.scrollTop === 0;

            entries.forEach(entry => {
                // console.log('Entry:', entry.target);
                let intersectionRatio = entry.intersectionRatio;
                // console.log('Intersection Ratio:', intersectionRatio);

                if (entry.target.id === 'facts-section' && intersectionRatio > 0.3) {
                    maxIntersectionRatio = 1; // Set to 1 to prioritize immediately
                    maxIntersectionSection = entry.target;
                } else if (entry.target.id === 'education-section' && isAtTop) {
                    maxIntersectionRatio = 1; // Set to 1 to prioritize immediately
                    maxIntersectionSection = entry.target;
                }else if (intersectionRatio > maxIntersectionRatio) {
                    maxIntersectionRatio = intersectionRatio;
                    maxIntersectionSection = entry.target;
                }            });

            const updateNavLinks = () => {
                if (maxIntersectionSection) {
                    const id = maxIntersectionSection.getAttribute('id');
                    // console.log('Active Section ID:', id);

                    const navLinks = document.querySelectorAll('.side-header-link');
                    navLinks.forEach(link => {
                        if (link.getAttribute('href') !== `#${id}`) {
                            link.classList.remove('active');
                            // console.log('Removed "active" class from:', link);
                        }
                    });

                    const newLink = document.querySelector(`a[href="#${id}"]`);
                    // console.log('new link:', newLink);

                    if (newLink) {
                        newLink.classList.add('active');
                        // console.log('Added "active" class to new link.');
                    }
                }
            };

            clearTimeout(scrollTimeoutId);
            scrollTimeoutId = setTimeout(updateNavLinks, 200);
        };

        const contentContainer = document.getElementById('content-container');
        const options = {
            root: contentContainer, // Set the root to contentContainer
            rootMargin: '0px',
            threshold: 0.01
        };
        const setupObserver = () => {
            const contentContainer = document.getElementById('content-container');
            const options = {
                root: contentContainer,
                rootMargin: '0px',
                threshold: Array.from({ length: 21 }, (_, i) => i / 20) // [0, 0.05, 0.1, ..., 1]
            };

            const observer = new IntersectionObserver(changeNav, options);
            const sections = document.querySelectorAll('.content-section');

            sections.forEach(section => {
                observer.observe(section);
            });
        };

        // Set up the observer initially
        setupObserver();

        // Reinitialize the observer 
        setInterval(setupObserver, 1000);
    })();
});

// DYNAMIC POPUP POSITIONING 
// Get all language containers
const containers = document.querySelectorAll('.bubble-container');

containers.forEach(container => {
    // Get all language elements within the current container
    const languages = container.querySelectorAll('.bubble');

    // Check if there are multiple language elements
    if (languages.length > 1) {
        // Iterate through each language element
        languages.forEach((language, index) => {
            console.log(language);
            // Check if the current language element is the last one
            if (index === languages.length - 1) {
                // Add class to the last language element
                language.classList.add('last-bubble');
                console.log("added last language", language);
            }
        });
    }
});


// PICTURE SLDESHOW
/* Code inspired by W3Schools (see References) */
document.addEventListener('DOMContentLoaded', function() {
    // Function to control slides
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Function to display slides
    function showSlides(n) {
        var slides = document.getElementsByClassName("slide");
        if (slides.length > 0) {
            let i;
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex-1].style.display = "block";
        }
    }

    // Initialize slide index and display slides
    let slideIndex = 1;
    showSlides(slideIndex);

    // Event listeners for button controls
    document.querySelectorAll('.prev').forEach(button => {
        button.addEventListener('click', () => {
            plusSlides(-1);
        });
    });

    document.querySelectorAll('.next').forEach(button => {
        button.addEventListener('click', () => {
            plusSlides(1);
        });
    });
});



// DYNAMIC HEADER NAVIGATION STATUS
document.addEventListener("DOMContentLoaded", function() {
    // DYNAMIC HEADER NAVIGATION STATUS
    // Get the substring after the last '/'
    var currentPage = window.location.pathname;
    var lastSlashIndex = currentPage.lastIndexOf('/');
    currentPage = currentPage.substring(lastSlashIndex + 1);

    // Find the link corresponding to the current page and add the 'active' class
    var links = document.querySelectorAll('.header-link');
    links.forEach(function(link) {
        var hrefLink = link.getAttribute('href');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            // Disable hover effects if link matches the current page
            link.classList.remove('not-active');
        }
    });
});
// GALLERY FILTER
/* Code inspired by W3Schools (see References) */
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("gallery-picture");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].classList.contains(c) || c === "") {
            addClass(x[i], "show");
        }
    }
}
// Show filtered elements
function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
        }
    }
}
// Hide elements that are not selected
function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("gallery-buttons");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("btn-active");
        current[0].className = current[0].className.replace(" btn-active", "");
        this.className += " btn-active";
    });
}

// POPUP ENLARGED GALLERY PICTURE
/* Code inspired by W3Schools (see References) */
// Get the popup container
var popupContainer = document.getElementById("popup-container");
var popupOverlay = document.querySelector(".popup-overlay");
// Get all the popup links
var popupLinks = document.querySelectorAll(".popup-picture");
// Function to open the popup
function openPopup(event) {
    event.preventDefault(); // Prevent default link behavior
    
    // Set the src attribute of the popup image
    var popupImage = document.getElementById("popup-image");
    popupImage.src = this.getAttribute("href");

    // Get description box for the popup
    var descriptionContainer = document.getElementById("popup-description");
    var description = this.getAttribute("data-description");
    descriptionContainer.textContent = description;
    
    // Display the popup
    popupContainer.style.display = "flex";
    popupContainer.style.flexDirection = "column"; // Set flex-direction to column
    popupContainer.style.alignItems = "center"; // Align vertically center
    popupOverlay.classList.add("popup-visible"); // Show overlay
    document.body.style.overflow = "hidden"; // Disable scrolling on the body
}
// Function to close the popup
function closePopup() {
    popupContainer.style.display = "none";
    popupOverlay.classList.remove("popup-visible"); // Hide overlay
    document.body.style.overflow = "auto"; // Enable scrolling on the body
}
// Loop through each link and attach a click event listener
popupLinks.forEach(function(link) {
    link.addEventListener("click", openPopup);
});
// Close the popup when the close button is clicked
var closeBtn = document.querySelector("#popup-close");
closeBtn.addEventListener("click", closePopup);
// Close the popup when clicking outside of it
popupOverlay.addEventListener("click", closePopup);


// GENERATE FUN FACT
var typingInProgress = false;

function getRandomFact() {
    var funFacts = [
        'I once ate only chocolate for three days straight.',
        'I\'ve danced for the Australian Ballet School!',
        'I still sleep with the pillow pet I got when I was 7...',
        'Caffeine doesn\'t impact me at all.',
        'I\'ve always had a part-time job since I was 14.',
        'I have a scar on my thigh from trying to climb over a fence...',
        'I\'ve never successfully baked macarons despite over 20 attempts...',
        'I once fainted in the gym.',
        'For a period of time, I drank almost 2L of soda daily.',
        'I got chicken pox during the week of Grade 5 NAPLAN.',
        'Walking into air-conditioned rooms make me sneeze.',
        'My right ankle had three completely severed ligaments in 2021.',
        'I lost and/or broke three sets of earphones within 4 months.',
        'I get really bad asian flush.',
    ];

    // Get a random index within the range of possible texts
    var randomIndex = Math.floor(Math.random() * funFacts.length);
    // Return the randomly selected text
    return funFacts[randomIndex];
}

function getFunFact() {
    if (typingInProgress) {
        return; // Ignore button press if typing is in progress
    }
    const button = document.getElementById('fun-fact-button'); 

    button.classList.add('faded-button');

    /* Code inspired by W3Schools (see References) */
    var i = 0;
    var txt = getRandomFact(); // Get a random text
    var speed = 50;
    console.log("pressed");
    const funfact = document.getElementById('fun-fact');

    // ensure user cannot repeatedly click button to generate fun fact
    // and cause them to overwrite each other
    if (funfact.classList.contains('generated')) {
        funfact.textContent = '';
    } else {
        funfact.classList.add('generated');
    }

    // fade out the button to let users know it cannot be clicked

    function typeWriter() {
        typingInProgress = true; // Typing is in progress
        if (i < txt.length) {
            funfact.textContent += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            typingInProgress = false; // Typing completed
            button.classList.remove('faded-button');
        }
    }

    typeWriter();
}

// ANIMATION FOR MENU BUTTON IN MOBILE VIEW
/* Code inspired by W3Schools (see References) */
function menuUnfold(x) {
    x.classList.toggle("menuAnimate");
    toggleNav();
}

function toggleNav() {
    const overlay = document.getElementById("mobileNav");
    if (overlay.style.width === "100%") {
        overlay.style.width = "0%";
    } else {
        overlay.style.width = "100%";
    }
}

function openNav() {
    document.getElementById("mobileNav").style.display = "block";
    document.getElementById("mobileNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobileNav").style.width = "0%";
}
