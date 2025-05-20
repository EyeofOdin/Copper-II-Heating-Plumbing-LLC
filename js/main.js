/**
 * Copper II Heating & Plumbing LLC
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });
    
        // Close mobile menu when clicking on a nav link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                document.body.classList.remove('nav-open');
            });
        });
    }
    
    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Form submission handling
    const serviceForm = document.getElementById('serviceForm');
    
    if (serviceForm) {
        serviceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };
            
            // Form validation
            let isValid = true;
            let errorMessage = '';
            
            if (!formData.name) {
                isValid = false;
                errorMessage += 'Please enter your name.\n';
            }
            
            if (!formData.email || !isValidEmail(formData.email)) {
                isValid = false;
                errorMessage += 'Please enter a valid email address.\n';
            }
            
            if (!formData.phone) {
                isValid = false;
                errorMessage += 'Please enter your phone number.\n';
            }
            
            if (!formData.service) {
                isValid = false;
                errorMessage += 'Please select a service.\n';
            }
            
            if (!isValid) {
                alert(errorMessage);
                return;
            }
            
            // In a real scenario, you would send this data to a server
            // For demo purposes, we'll just show a success message
            alert('Thank you for your request! We will contact you shortly.');
            serviceForm.reset();
        });
    }
    
    // Email validation helper function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .benefit, .testimonial');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('visible');
            }
        });
    };
    
    // Initial check for elements in view
    animateOnScroll();
    
    // Check again when scrolling
    window.addEventListener('scroll', animateOnScroll);
    
});