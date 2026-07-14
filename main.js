// ==========================================
// TYPING EFFECT
// ==========================================
class TypingEffect {
  constructor(element, words, wait = 3000) {
    this.element = element;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.element.innerHTML = `<span class="txt">${this.txt}</span><span class="cursor" style="border-right: 1.5px solid var(--text-primary); margin-left: 2px; animation: blink-cursor 0.8s infinite;"></span>`;

    let typeSpeed = 70;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 300;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Add CSS keyframe for blinking cursor dynamically
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes blink-cursor {
    from, to { border-color: transparent }
    50% { border-color: var(--text-primary); }
  }
`;
document.head.appendChild(styleSheet);


// ==========================================
// SCROLL REVEAL OBSERVER
// ==========================================
const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
};

// ==========================================
// EMAIL COPY UTILITY
// ==========================================
const initEmailCopy = () => {
  const emailBoxes = document.querySelectorAll('.email-box');

  emailBoxes.forEach(box => {
    box.addEventListener('click', async () => {
      const email = box.querySelector('.email-address').textContent.trim();

      try {
        await navigator.clipboard.writeText(email);

        box.classList.add('copied');

        setTimeout(() => {
          box.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    });
  });
};

// ==========================================
// NAVIGATION FUNCTIONALITY
// ==========================================
const initNavigation = () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-link');
  const navbar = document.querySelector('.navbar');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinksContainer.classList.remove('active');
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.background = 'rgba(252, 252, 251, 0.95)';
      navbar.style.boxShadow = '0 1px 10px rgba(0,0,0,0.02)';
    } else {
      navbar.style.background = 'rgba(252, 252, 251, 0.8)';
      navbar.style.boxShadow = 'none';
    }
  });
};

// ==========================================
// INIT APP
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const typeEl = document.getElementById('typing-text');
  if (typeEl) {
    const words = [
      "Incoming Ph.D @ Fudan University & Shanghai Innovation Institute (SII)",
    ];
    new TypingEffect(typeEl, words, 2500);
  }

  initScrollReveal();
  initEmailCopy();
  initNavigation();
});
