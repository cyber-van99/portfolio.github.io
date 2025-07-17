// Portfolio JavaScript for Pranav Purushan

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollAnimations();
    initializeModal();
    
    // Make introduction section visible immediately
    const introSection = document.getElementById('introduction');
    if (introSection) {
        introSection.classList.add('visible');
    }
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Update active navigation link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll animations
function initializeScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Modal functionality for project demos
function initializeModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// Open modal with project demo
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) return;
    
    // Project demo content
    const projectContent = {
        'vba-demo-1': {
            title: 'Monthly Reporting Suite Demo',
            description: 'This VBA automation consolidates data from multiple sources, performs calculations, and generates PowerPoint presentations automatically.',
            features: [
                'Automated data consolidation from 12 departments',
                'Real-time calculations and analysis',
                'PowerPoint generation with charts and tables',
                'Error handling and audit trail'
            ]
        },
        'vba-demo-2': {
            title: 'Sales Pipeline Dashboard Demo',
            description: 'Comprehensive VBA solution for tracking sales metrics and forecasting revenue with interactive dashboards.',
            features: [
                'Real-time sales tracking',
                'Interactive pivot tables and charts',
                'Revenue forecasting models',
                'Automated client follow-up reminders'
            ]
        },
        'vba-demo-3': {
            title: 'Financial Analysis Tool Demo',
            description: 'Advanced VBA tool for financial modeling, ratio analysis, and automated report generation.',
            features: [
                'DCF calculations and valuation models',
                'Automated ratio analysis',
                'Financial statement parsing',
                'Professional report generation'
            ]
        }
    };
    
    const content = projectContent[projectId];
    if (!content) return;
    
    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <h3 style="color: var(--color-primary); margin-bottom: 1rem;">${content.title}</h3>
            <p style="color: var(--color-text-secondary); margin-bottom: 2rem;">${content.description}</p>
            <div class="gif-placeholder" style="margin-bottom: 2rem;">
                <div style="text-align: center;">
                    <p style="font-size: 1.2rem; margin-bottom: 1rem;">🎬 Demo Video Coming Soon</p>
                    <p style="font-size: 0.9rem; color: var(--color-text-secondary);">GIF demonstration will be added here</p>
                </div>
            </div>
            <div style="text-align: left; background: var(--color-secondary); padding: 1.5rem; border-radius: var(--radius-base);">
                <h4 style="color: var(--color-text); margin-bottom: 1rem;">Key Features:</h4>
                <ul style="color: var(--color-text-secondary); line-height: 1.6;">
                    ${content.features.map(feature => `<li style="margin-bottom: 0.5rem;">${feature}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Utility function to add smooth hover effects
function addHoverEffects() {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize hover effects after DOM is loaded
document.addEventListener('DOMContentLoaded', addHoverEffects);

// Contact form handling (if needed in future)
function handleContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle form submission logic here
            alert('Thank you for your message! I will get back to you soon.');
        });
    }
}

// Performance optimization - lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize all components
document.addEventListener('DOMContentLoaded', function() {
    initializeLazyLoading();
    handleContactForm();
    
    // Add loading animation
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button if needed
function addScrollToTopButton() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 3rem;
        height: 3rem;
        background: var(--color-primary);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5rem;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    scrollButton.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollButton);
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', addScrollToTopButton);

// Mobile menu toggle (if needed)
function initializeMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuButton && navLinks) {
        mobileMenuButton.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
}

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData) {
    // Add your analytics tracking code here
    console.log(`Event: ${eventName}`, eventData);
}

// Track navigation clicks
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('navigation_click', {
                section: this.getAttribute('href')
            });
        });
    });
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // You can add error reporting here
});

// Console message for developers
console.log(`
🚀 Pranav Purushan's Portfolio
📧 Contact: pranavpurushan@gmail.com
🔗 LinkedIn: linkedin.com/in/pranav-purushan0
💼 Looking for opportunities in Quantitative Finance!
`);