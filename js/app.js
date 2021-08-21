/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * a list of section elements ==> sectionList
 * the navigation section to append link values ==>navigationMenu 
 * 
*/

const sectionList = document.querySelectorAll('section');
const navigationMenu = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/* Building nav bar menu */
function buildNav() {
    /* create document fragment as a virtual dom to enhance performanc */
    var documentFragment = document.createDocumentFragment();
    for (const section of sectionList) {
        /* create the li element and anchor element */
        var liElement = document.createElement('li');
        var anchorElement = document.createElement('a');
        /* add needed classes and setting needed attributes */
        liElement.classList.add('menu__link');
        liElement.classList.add(section.getAttribute('id'));
        anchorElement.innerText = section.getAttribute('data-nav');
        anchorElement.setAttribute("href", '#' + section.getAttribute('id'));
        /* appending the anchor element to li element and then append them to the virtual dom fragment */
        liElement.appendChild(anchorElement);
        documentFragment.appendChild(liElement);
    }
    /* at least appending all the li elemnts stored in the fragment to the navigation menue ul */
    navigationMenu.append(documentFragment);
}
/* handling the active status on scrolling
currentActive is the id for the section which the user is viewing */
function AddActiveOnScroll(currentActive) {
    navigationLi.forEach(element => {
        /* remove active link class from anu li element and add it to the active section
        and Add active class to the section to make the animation */
        element.classList.remove('activeLink');
        if (element.classList.contains(currentActive)) {
            element.classList.add('activeLink');
            document.getElementById(currentActive).classList.add('active');
        }
    })
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
buildNav();
const navigationLi = document.querySelectorAll('.menu__link');


// Add class 'active' to section when near top of viewport
AddActiveOnScroll(sectionList[0].getAttribute('id'));




/**
 * End Main Functions
 * Begin Events
 *
*/


// Scroll to section on link click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Set sections as active
window.addEventListener('scroll', () => {
    var currentActive = '';
    sectionList.forEach(section => {
        const sectionStart = section.offsetTop;
        section.classList.remove('active');
        if (pageYOffset >= (sectionStart - 400)) {
            currentActive = section.getAttribute('id');
        }
    });
    AddActiveOnScroll(currentActive);
})

