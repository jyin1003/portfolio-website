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
let slideIndex = 1;
showSlides(slideIndex);
// Button controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var slides = document.getElementsByClassName("slide");
    if (slides.length > 0) {
        let i;
        let slides = document.getElementsByClassName("slide");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }
}

// DYNAMIC HEADER NAVIGATION STATUS
// Get the substring after the last '/'
var currentPage = window.location.pathname;
var lastSlashIndex = currentPage.lastIndexOf('/');
var currentPage = currentPage.substring(lastSlashIndex + 1);

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

// GALLERY FILTER
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

