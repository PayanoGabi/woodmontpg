//sticky effect

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("navigationBar");

// Get the offset position of the navbar
var sticky = navigationBar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navigationBar.classList.add("sticky")
  } else {
    navigationBar.classList.remove("sticky");
  }
}

//nav menu
navMenu.services.addEventListener("click", function() {
  console.log("this works");
  hide(elements.aboutUs);
  hide(elements.location);
  hide(elements.contact);
  showServices(elements.servicesSection);

  console.log("this doesn't work");
});

navMenu.about.addEventListener("click", function() {
  hide(elements.servicesSection);
  hide(elements.location);
  hide(elements.contact);
  showAbout(elements.aboutUs);
});

navMenu.location.addEventListener("click", function() {
  console.log("works");
  hide(elements.aboutUs);
  hide(elements.servicesSection);
  hide(elements.contact);
  showAbout(elements.location);
  showAbout(elements.locationImage);
});

navMenu.contact.addEventListener("click", function() {
  hide(elements.aboutUs);
  hide(elements.servicesSection);
  showAbout(elements.contact);
  hide(elements.location);
  hide(elements.locationImage);
});
