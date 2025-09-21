// GitHub Profile JavaScript Functionality
// This file contains any interactive features for the profile page

document.addEventListener('DOMContentLoaded', function () {
    // Add smooth scrolling for better user experience
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.addEventListener('load', function () {
            this.style.opacity = '1';
        });

        // Set initial opacity for fade-in effect
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease-in-out';
    });

    // Add hover effects for tech badges
    const techBadges = document.querySelectorAll('.tech-badges img');

    techBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.2s ease-in-out';
        });

        badge.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Add click tracking for social links (optional analytics)
    const socialLinks = document.querySelectorAll('a[href*="github.com"], a[href*="linkedin.com"], a[href*="vmvision.nl"]');

    socialLinks.forEach(link => {
        link.addEventListener('click', function () {
            console.log('Social link clicked:', this.href);
            // You can add analytics tracking here if needed
        });
    });

    // Add responsive behavior for mobile devices
    function handleResize() {
        const container = document.querySelector('.container');
        if (window.innerWidth < 768) {
            container.classList.add('mobile');
        } else {
            container.classList.remove('mobile');
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once on load

    // Add typing animation for profile values (optional enhancement)
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    // Uncomment the lines below if you want typing animation for profile values
    // const profileValues = document.querySelectorAll('.profile-value');
    // profileValues.forEach((value, index) => {
    //     const originalText = value.textContent;
    //     setTimeout(() => {
    //         typeWriter(value, originalText, 100);
    //     }, index * 500);
    // });
});

// Utility functions for potential future enhancements
const ProfileUtils = {
    // Function to update GitHub stats (if you want to refresh them)
    refreshStats: function () {
        const statsImages = document.querySelectorAll('.github-stats img');
        statsImages.forEach(img => {
            const src = img.src;
            img.src = src + '?t=' + Date.now(); // Add timestamp to force refresh
        });
    },

    // Function to toggle dark/light mode (if you want to add this feature)
    toggleTheme: function () {
        document.body.classList.toggle('light-theme');
        localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
    },

    // Function to copy contact information
    copyToClipboard: function (text) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Copied to clipboard:', text);
            // You could add a toast notification here
        });
    }
};

// Load saved theme preference
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
}
