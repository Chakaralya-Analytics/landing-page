document.addEventListener("DOMContentLoaded", function () {
   const navLinks = document.querySelectorAll(".nav-link");

   // Function to handle click events on navigation links
   function handleNavLinkClick(event) {
       // Remove the "active" class from all navigation links
       navLinks.forEach(link => link.classList.remove("active"));

       // Add the "active" class to the clicked link
       event.target.classList.add("active");
   }

   // Attach a click event listener to each navigation link
   navLinks.forEach(link => {
       link.addEventListener("click", handleNavLinkClick);
   });
});