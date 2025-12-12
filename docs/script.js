// Dark Mode Toggle with Persistence
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

function applyDarkMode(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Check for saved dark mode preference
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'enabled') {
    applyDarkMode(true);
}

darkModeToggle.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-mode');
    applyDarkMode(!isDark);
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Load More Projects
const loadMoreBtn = document.getElementById('loadMoreBtn');
const hiddenProjects = document.querySelectorAll('.project-card.hidden');

loadMoreBtn.addEventListener('click', () => {
    hiddenProjects.forEach(project => {
        project.classList.remove('hidden');
        project.style.animation = 'fadeIn 0.5s ease-in-out';
    });
    loadMoreBtn.style.display = 'none';
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simple validation
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (subject && message) {
        formMessage.textContent = 'Thank you! Your message has been sent.';
        formMessage.style.color = 'green';
        contactForm.reset();
    } else {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = 'red';
    }
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Color Box Project Function (for colorbox.html)
function changeColor() {
    const box = document.getElementById('colorBox');
    const isBlue = box.style.backgroundColor === 'rgb(0, 123, 255)'; // #007bff
    box.style.backgroundColor = isBlue ? 'black' : '#007bff';
}