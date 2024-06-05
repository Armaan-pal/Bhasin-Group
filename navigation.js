function myFunction() {
    var x = document.getElementById("mainmenum");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}


// change menu color

// Get all menu items
var menuItems = document.querySelectorAll('#menu li a');

// Listen for scroll events
window.addEventListener('scroll', function() {
    var currentScroll = window.scrollY;

    // Loop through each menu item
    menuItems.forEach(function(menuItem) {
        var sectionId = menuItem.getAttribute('href').slice(1);
        var section = document.getElementById(sectionId);

        if (section.offsetTop <= currentScroll && section.offsetTop + section.offsetHeight > currentScroll) {
            // Add the active class to the corresponding menu item
            menuItem.classList.add('active');
        } else {
            // Remove the active class from other menu items
            menuItem.classList.remove('active');
        }
    });
});