// ==================== //
// Custom Cursor
// ==================== //
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    if (cursor && cursorFollower) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    }
});

// ==================== //
// Navigation Scroll Effect
// ==================== //
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==================== //
// Smooth Scroll for Navigation
// ==================== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== //
// Hamburger Menu Toggle
// ==================== //
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// ==================== //
// Form Submission
// ==================== //
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        
        if (name && email && message) {
            alert('Thank you for your message! We\'ll get back to you soon.');
            contactForm.reset();
        }
    });
}

// ==================== //
// Scroll Reveal Animation
// ==================== //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
const revealElements = document.querySelectorAll('.service-card, .portfolio-item, .stat-item, .client-logo');
revealElements.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// ==================== //
// Marquee Infinite Scroll
// ==================== //
const marqueeContent = document.querySelector('.marquee-content');
if (marqueeContent) {
    const marqueeHTML = marqueeContent.innerHTML;
    marqueeContent.innerHTML = marqueeHTML + marqueeHTML;
}

// ==================== //
// Page Load Animations
// ==================== //
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ==================== //
// Interactive Hover Effects
// ==================== //
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        serviceCards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.style.opacity = '0.5';
            }
        });
    });
    
    card.addEventListener('mouseleave', () => {
        serviceCards.forEach(otherCard => {
            otherCard.style.opacity = '1';
        });
    });
});

// ==================== //
// Portfolio Hover Interactions
// ==================== //
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

console.log('%c✨ The Real Ones - Website Loaded ✨', 'color: #ffc107; font-size: 20px; font-weight: bold;');
