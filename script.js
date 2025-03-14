document.addEventListener('DOMContentLoaded', function() {
 // Create menu overlay
 const menuOverlay = document.createElement('div');
 menuOverlay.className = 'menu-overlay';
 document.body.appendChild(menuOverlay);
 
 const navLinks = document.getElementById('nav-links');
 const mobileMenuBtn = document.getElementById('mobile-menu-btn');
 const closeMenuBtn = document.getElementById('close-menu-btn');
 
 // Function to open menu
 function openMenu() {
     navLinks.classList.add('active');
     menuOverlay.classList.add('active');
     document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
 }
 
 // Function to close menu
 function closeMenu() {
     navLinks.classList.remove('active');
     menuOverlay.classList.remove('active');
     document.body.style.overflow = ''; // Re-enable scrolling
 }
 
 // Toggle menu when hamburger icon is clicked
 mobileMenuBtn.addEventListener('click', openMenu);
 
 // Close menu when X button is clicked
 closeMenuBtn.addEventListener('click', closeMenu);
 
 // Close menu when overlay is clicked
 menuOverlay.addEventListener('click', closeMenu);
 
 // Close menu when a menu item is clicked
 const menuItems = navLinks.querySelectorAll('a');
 menuItems.forEach(item => {
     item.addEventListener('click', function() {
         if (window.innerWidth <= 768) {
             closeMenu();
         }
     });
 });
 
 // Close menu when window is resized above mobile breakpoint
 window.addEventListener('resize', function() {
     if (window.innerWidth > 768) {
         closeMenu();
     }
 });
 
 // Theme Toggle functionality (keeping your existing code)
 document.getElementById('theme-toggle').addEventListener('click', function () {
     document.body.classList.toggle('dark');
 });
});
     
     // Theme Toggle
     document.getElementById('theme-toggle').addEventListener('click', function () {
         document.body.classList.toggle('dark');
     });
     
     // Back to Top Button
     window.addEventListener('scroll', function () {
         const backToTop = document.getElementById('back-to-top');
         if (window.scrollY > 200) {
             backToTop.classList.add('active');
         } else {
             backToTop.classList.remove('active');
         }
     });
     
     document.getElementById('back-to-top').addEventListener('click', function () {
         window.scrollTo({ top: 0, behavior: 'smooth' });
     });
     document.addEventListener('DOMContentLoaded', function() {
 // Set up the typing animation for your name
 const nameElement = document.getElementById('typing-name');
 const cursorElement = document.querySelector('.typing-cursor');
 const fullName = "Benjamin Tajeu"; // Your name
 let currentIndex = 0;
 
 // Clear any existing text
 nameElement.textContent = "";
 
 // Function to type one character at a time
 function typeCharacter() {
     if (currentIndex < fullName.length) {
         nameElement.textContent += fullName.charAt(currentIndex);
         currentIndex++;
         setTimeout(typeCharacter, 150); // Adjust the typing speed here (milliseconds)
     } else {
         // When typing is complete, make the cursor keep blinking
         if (cursorElement) {
             cursorElement.style.animation = 'blink 0.7s infinite';
         }
     }
 }
 
 // Start the typing animation after a short delay
 setTimeout(function() {
     typeCharacter();
 }, 500); // Delay before starting the animation (milliseconds)
});
document.getElementById('theme-toggle').addEventListener('click', function () {
         document.body.classList.toggle('dark');
     });
     