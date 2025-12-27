console.log("🚀 Harsh Kumar's Enhanced Portfolio Loaded Successfully!");

// DOM Elements
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const sections = document.querySelectorAll('section');
const contactForm = document.getElementById('contact-form');
const loader = document.querySelector('.loader');

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close mobile menu if open
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Navbar scroll effects
window.addEventListener('scroll', () => {
  // Navbar background
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  // Animate sections in view
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      section.classList.add('animate');
    }
  });
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Stats counter animation
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const increment = target / 100;
    let current = 0;
    
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    // Start animation when stats section is visible
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          statsObserver.unobserve(entry.target);
        }
      });
    });
    
    statsObserver.observe(counter.parentElement.parentElement);
  });
}

// Skill bars animation
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.getAttribute('data-width') + '%';
      }
    });
  });
  
  skillBars.forEach(bar => observer.observe(bar));
}

// Contact form handling
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = contactForm.querySelector('.form-submit');
  const originalText = submitBtn.innerHTML;
  
  // Show loading state
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;
  
  // Simulate API call
  setTimeout(() => {
    alert('🎉 Message sent successfully! I\'ll get back to you soon.');
    contactForm.reset();
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }, 1500);
});

// Parallax tilt effect for project cards
document.querySelectorAll('.project-card[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// Loader animation
window.addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 1000);
  
  // Initialize animations after load
  setTimeout(() => {
    animateCounters();
    animateSkillBars();
  }, 1200);
});

// Typing animation restart on scroll to hero
const typingElement = document.querySelector('.typing-animation');
let typingInterval;
window.addEventListener('scroll', () => {
  if (window.scrollY < 100 && !typingInterval) {
    const text = typingElement.textContent.replace(/\|$/, '');
    let i = 0;
    typingInterval = setInterval(() => {
      typingElement.textContent = text.slice(0, i) + '|';
      i++;
      if (i > text.length) {
        clearInterval(typingInterval);
        typingInterval = null;
        typingElement.style.borderRight = '2px solid var(--primary)';
      }
    }, 100);
  }
});

// Intersection Observer for scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

sections.forEach(section => sectionObserver.observe(section));

// Performance optimization
if ('IntersectionObserver' in window) {
  console.log('✅ All modern features supported');
} else {
  console.log('⚠️ Some animations may not work in older browsers');
}

console.log('✨ Portfolio fully interactive and optimized!');
