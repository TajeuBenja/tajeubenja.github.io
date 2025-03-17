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
           const serviceID = 'devlife_dev';
            const templateID = 'dev_life';
            const userID = 'Kap-iDWfLfSrHhPnK';
            
            // Send the form data using EmailJS
            await emailjs.send(serviceID, templateID, {
                from_name: name,
                from_email: email,
                message: message
            }, userID);
            
            // Show success message
            showNotification('Message sent successfully!', 'success');
            
            // Reset form
            contactForm.reset();
        } catch (error) {
            console.error('Error sending message:', error);
            showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            // Restore button state
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }
    });
    
    // Create notification function
    function showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `form-notification ${type}`;
        notification.textContent = message;
        
        // Style the notification to match your site's design
        notification.style.padding = '10px 20px';
        notification.style.marginTop = '20px';
        notification.style.borderRadius = '5px';
        notification.style.textAlign = 'center';
        notification.style.fontWeight = '500';
        notification.style.animation = 'fadeIn 0.3s ease-in-out';
        
        if (type === 'success') {
            notification.style.backgroundColor = '#4CAF50';
            notification.style.color = 'white';
        } else {
            notification.style.backgroundColor = '#f44336';
            notification.style.color = 'white';
        }
        
        // Add notification to the page
        const formContainer = document.querySelector('.contact-form');
        formContainer.appendChild(notification);
        
        // Remove notification after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease-in-out';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }
    
    // Add necessary animations to your stylesheet or inline here
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(style);
});
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your User ID (Public Key)
    emailjs.init('Kap-iDWfLfSrHhPnK');
    
    // Rest of your code...
});
     
