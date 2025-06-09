// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Add staggered animation delay to multiple elements
document.querySelectorAll('.experience-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    const heroBackground = document.querySelector('.hero-bg');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
});

// Add hover effects to skill tags
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.05) translateY(-2px)';
        tag.style.boxShadow = '0 4px 15px rgba(78, 205, 196, 0.3)';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1) translateY(0)';
        tag.style.boxShadow = 'none';
    });
});

// Create additional particles dynamically
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        // Random colors for particles
        const colors = ['rgba(78, 205, 196, 0.6)', 'rgba(255, 107, 107, 0.6)', 'rgba(138, 43, 226, 0.6)'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize additional particles
createParticles();

// Add floating animation to hero buttons
document.querySelectorAll('.hero-buttons .btn').forEach((btn, index) => {
    btn.style.animationDelay = `${index * 0.2}s`;
    btn.style.animation = 'fadeInUp 0.8s ease forwards';
});

// Performance optimization: throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Add smooth fade-in for the entire page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Interactive cursor effect for desktop
function createCursorEffect() {
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'cursor-effect';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(255, 107, 107, 0.3), rgba(78, 205, 196, 0.3));
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });

        // Scale cursor on hover over interactive elements
        document.querySelectorAll('a, button, .btn').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
            });
        });
    }
}

// Initialize cursor effect
createCursorEffect();

// Add random twinkling effect to particles
setInterval(() => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        if (Math.random() > 0.8) {
            particle.style.opacity = Math.random();
            setTimeout(() => {
                particle.style.opacity = '1';
            }, 200);
        }
    });
}, 2000);

// Add breathing effect to gradient orbs
document.querySelectorAll('.orb').forEach((orb, index) => {
    setInterval(() => {
        orb.style.transform = `scale(${0.8 + Math.random() * 0.4})`;
        setTimeout(() => {
            orb.style.transform = 'scale(1)';
        }, 1000);
    }, 3000 + index * 1000);
});

// Responsive background animation control
function controlAnimations() {
    const animatedBg = document.querySelector('.animated-background');
    
    if (window.innerWidth < 768) {
        // Reduce animation intensity on mobile
        animatedBg.style.opacity = '0.5';
    } else {
        animatedBg.style.opacity = '1';
    }
}

window.addEventListener('resize', controlAnimations);
controlAnimations(); // Initial call