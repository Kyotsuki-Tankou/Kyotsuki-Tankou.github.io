// ==========================================
// CONFIGURATION
// ==========================================
const SORT_DESCENDING = true; // Set to true for newest-first, false for chronological (earliest-first)

// ==========================================
// DATA DEFINITIONS (EDUCATION, EXPERIENCE, AWARDS)
// ==========================================
const timelineData = [
  {
    type: "education",
    title: "Nankai University",
    subtitle: "Bachelor of Engineering: Computer Science and Technology (Excellent Computer Science Class)",
    startDate: "2022-09",
    displayDate: "Sept. 2022 — Aug. 2026",
    location: "Tianjin, China",
    desc: "Specialized Courses Cumulative Weighted Average: 89.80 (Rank: 14/154, GPA: 3.80/4.00). Completed the course in the Junior year (Thesis included)."
  },
  {
    type: "education",
    title: "Fudan University & Shanghai Innovation Institute",
    subtitle: "PhD Candidate of Computer Science and Technology",
    startDate: "2026-09",
    displayDate: "Sept. 2026 — Present",
    location: "Shanghai, China",
    desc: "Incoming Ph.D. Candidate specializing in Computer Science and Technology."
  },
  {
    type: "experience",
    title: "ACM Club of Nankai University (Nankai ACM Club)",
    subtitle: "School Team Member",
    startDate: "2023-04",
    displayDate: "Apr. 2023 — Jun. 2026",
    location: "Nankai University",
    desc: "Participated in competitive programming training and regional team events representing Nankai University."
  },
  {
    type: "experience",
    title: "Center for Bioinformatics and Intelligent Medicine",
    subtitle: "Research Attachment (Supervised by Prof. Jian Liu)",
    startDate: "2023-12",
    displayDate: "Dec. 2023 — Present",
    location: "Nankai University",
    desc: "Conducting bioinformatics research, focusing on transcriptomics analysis pipelines and representation learning."
  },
  {
    type: "experience",
    title: "PAI Lab",
    subtitle: "Research Attachment (Supervised by Assist Prof. Leo Lizhou Fan)",
    startDate: "2025-05",
    displayDate: "May 2025 — Present",
    location: "The Chinese University of Hong Kong",
    desc: "Collaborative research on deep learning applications in neuroscience and medical image analysis (fMRI)."
  },
  {
    type: "experience",
    title: "ALEX Research",
    subtitle: "PhD Candidate / Research Assistant (Supervised by Prof. Yixin Cao)",
    startDate: "2025-09",
    displayDate: "Sept. 2025 — Present",
    location: "Fudan University & Shanghai Innovation Institute",
    desc: "Conducting research on large language model (LLM) mechanisms, explainable AI (XAI), and domain integration."
  },
  {
    type: "award",
    title: "Bronze Medal @ ICPC Asia Xi'an Regional",
    subtitle: "The 2023 ICPC Asia Xi'an Regional Contest",
    startDate: "2023-10",
    displayDate: "Oct. 2023",
    location: "Xi'an, China",
    desc: ""
  },
  {
    type: "award",
    title: "Bronze Medal @ ICPC Asia Hefei Regional",
    subtitle: "The 2023 ICPC Asia Hefei Regional Contest",
    startDate: "2023-11",
    displayDate: "Nov. 2023",
    location: "Hefei, China",
    desc: ""
  },
  {
    type: "award",
    title: "Innovation Scholarship",
    subtitle: "The 2024 Innovation Scholarship of Nankai University",
    startDate: "2024-11",
    displayDate: "Nov. 2024",
    location: "Tianjin, China",
    desc: "Awarded to undergraduate students with outstanding research, innovation, and academic contributions."
  },
  {
    type: "award",
    title: "Top10% Award @ CCF-CSP",
    subtitle: "38th China Computer Federation Certificated Software Professional",
    startDate: "2025-06",
    displayDate: "Jun. 2025",
    location: "Tianjin, China",
    desc: "Achieved a ranking of 5.83% nationally in the software competency evaluation."
  },
  {
    type: "award",
    title: "Academic Excellence Scholarship",
    subtitle: "The 2025 Academic Excellence Scholarship of Nankai University",
    startDate: "2025-11",
    displayDate: "Nov. 2025",
    location: "Tianjin, China",
    desc: "Recognized for top academic standing and course excellence."
  },
  {
    type: "award",
    title: "Outstanding Graduation Thesis",
    subtitle: "Outstanding Graduation Thesis of Nankai University",
    startDate: "2026-06",
    displayDate: "Jun. 2026",
    location: "Tianjin, China",
    image: "assets/papers/thesis.png",
    desc: "Awarded for the graduation thesis: 'Few-shot Enhanced Annotation and Embedding Reconstruction in scRNA-seq' (completed in the Junior year, one year ahead of schedule)."
  },
  {
    type: "publication",
    title: "Database Paper Published in NAR",
    subtitle: "Pairpot: a database with real-time lasso-based analysis tailored for paired single-cell and spatial transcriptomics",
    startDate: "2025-01",
    displayDate: "Jan. 2025",
    location: "Nucleic Acids Research",
    image: "assets/papers/pairpot.png",
    desc: "Published as Joint First Author in Nucleic Acids Research (JCR-Q1, IF=16.6). Developed the web-based database and real-time analysis platform."
  },
  {
    type: "publication",
    title: "Undergraduate Graduation Thesis Completed",
    subtitle: "Few-shot Enhanced Annotation and Embedding Reconstruction in scRNA-seq",
    startDate: "2025-06",
    displayDate: "Jun. 2025",
    location: "Nankai University",
    image: "assets/papers/thesis.png",
    desc: "Completed the graduation thesis early in the Junior year (one year ahead of schedule), investigating low-data single-cell annotation."
  },
  {
    type: "patent",
    title: "Invention Patent Filed (First Student Inventor)",
    subtitle: "Method and system for reconstructing low-dimensional representations based on sequencing",
    startDate: "2025-05",
    displayDate: "May 2025",
    location: "State Intellectual Property Office",
    desc: "Authorized invention patent CN202510710033. Designed heuristic optimization algorithms for high-throughput sequencing data representation."
  }
];

// ==========================================
// DATA DEFINITIONS (PUBLICATIONS & PATENTS)
// ==========================================
const publicationData = [
  {
    type: "article",
    badge: "Published",
    journal: "Nucleic Acids Research (JCR-Q1, IF=16.6)",
    title: "Pairpot: a database with real-time lasso-based analysis tailored for paired single-cell and spatial transcriptomics",
    authors: "Zhihan Ruan, Fan Lin, <strong>Zhenjie Zhang</strong>, Jiayue Cao, Wenting Xiang, Xiaoyi Wei, Jian Liu*",
    note: "The first three authors should be regarded as Joint First Authors.",
    desc: "Developed an interactive web-based database and real-time analysis platform to integrate and interrogate paired single-cell and spatial transcriptomics datasets.",
    image: "assets/papers/pairpot.png",
    links: [
      { text: "DOI Link", url: "https://doi.org/10.1093/nar/gkae986" },
      { text: "Read Article", url: "https://academic.oup.com/nar/article/53/D1/D1087/7887754" }
    ]
  },
  {
    type: "thesis",
    badge: "Outstanding Graduation Thesis",
    journal: "Undergraduate Graduation Thesis (Nankai University)",
    title: "Few-shot Enhanced Annotation and Embedding Reconstruction in scRNA-seq",
    authors: "<strong>Zhenjie Zhang</strong>",
    note: "Recipient of the Outstanding Graduation Thesis award (completed in the Junior year, one year ahead of schedule).",
    desc: "Completed all course and thesis requirements early in the Junior year. Investigated low-data regimes for single-cell annotation using embedding reconstruction and semi-supervised transfer learning models.",
    image: "assets/papers/thesis.png",
    links: []
  }
];

const patentData = [
  {
    title: "Method and system for reconstructing low-dimensional representations based on high-throughput sequencing and heuristic approaches",
    badge: "Invention Patent",
    inventors: "Jian Liu, <strong>Zhenjie Zhang</strong>, Zhihan Ruan",
    number: "CN202510710033",
    year: "2025",
    desc: "A patent detailing a system for computing low-dimensional embeddings of genetic sequencing data using heuristic optimization algorithms to preserve biological neighborhood distances."
  }
];

// ==========================================
// DYNAMIC TIMELINE RENDERER (SLIDER VIEW - TOP 10)
// ==========================================
const renderTimeline = () => {
  const container = document.getElementById("dynamic-news-list");
  if (!container) return;

  // Clone data to avoid mutations
  let items = [...timelineData];

  // Sort by startDate
  items.sort((a, b) => {
    const dateA = new Date(a.startDate + "-01");
    const dateB = new Date(b.startDate + "-01");
    return SORT_DESCENDING ? dateB - dateA : dateA - dateB;
  });

  // Only take first 10 items
  const sliderItems = items.slice(0, 10);

  // Render news cards for horizontal slider
  container.innerHTML = sliderItems
    .map(item => {
      const categoryLabel = item.type.toUpperCase();
      const descHTML = item.desc ? `<p class="news-desc">${item.desc}</p>` : "";
      const locHTML = item.location
        ? `<span class="news-loc"><i class="fa-solid fa-location-dot"></i> ${item.location}</span>`
        : "";
      const imgHTML = item.image
        ? `<img src="${item.image}" alt="${item.title}" class="news-thumb-img">`
        : `<div class="empty-image-placeholder">
             <span class="placeholder-icon"><i class="fa-regular fa-image"></i></span>
           </div>`;

      return `
        <div class="news_info_box scroll_fade_down reveal-item">
          <div class="news_img">
            ${imgHTML}
          </div>
          <div class="news_text">
            <span class="news-badge badge-${item.type}">${categoryLabel}</span>
            <h4 class="news-title-text">${item.title}</h4>
            <p class="news-subtitle-text">${item.subtitle}</p>
            ${descHTML}
            ${locHTML}
          </div>
          <div class="news_data">${item.displayDate}</div>
        </div>
      `;
    })
    .join("");
};

// ==========================================
// FULL NEWS LIST & MODAL CONTROL
// ==========================================
const renderFullNewsList = () => {
  const container = document.getElementById("full-news-list");
  if (!container) return;

  // Sort timelineData
  let items = [...timelineData];
  items.sort((a, b) => {
    const dateA = new Date(a.startDate + "-01");
    const dateB = new Date(b.startDate + "-01");
    return SORT_DESCENDING ? dateB - dateA : dateA - dateB;
  });

  container.innerHTML = items
    .map(item => {
      const categoryLabel = item.type.toUpperCase();
      const descHTML = item.desc ? `<p class="modal-news-desc">${item.desc}</p>` : "";
      const locHTML = item.location
        ? `<span class="modal-news-loc"><i class="fa-solid fa-location-dot"></i> ${item.location}</span>`
        : "";

      return `
        <div class="modal-news-item">
          <div class="modal-news-header">
            <span class="news-badge badge-${item.type}">${categoryLabel}</span>
            <span class="modal-news-date">${item.displayDate}</span>
          </div>
          <h4 class="modal-news-title">${item.title}</h4>
          <p class="modal-news-subtitle">${item.subtitle}</p>
          ${descHTML}
          ${locHTML}
        </div>
      `;
    })
    .join("");
};

const initNewsModal = () => {
  const modal = document.getElementById("news-modal");
  const openBtn = document.getElementById("open-news-modal-btn");
  const closeBtn = document.getElementById("close-news-modal-btn");

  if (!modal || !openBtn || !closeBtn) return;

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    renderFullNewsList();
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Disable scroll behind modal
  });

  const closeModal = () => {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scroll
  };

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
};

// ==========================================
// NEWS SLIDER NAVIGATION (ARROWS)
// ==========================================
const initSliderNav = () => {
  const slider = document.getElementById("dynamic-news-list");
  const leftBtn = document.getElementById("slide-left-btn");
  const rightBtn = document.getElementById("slide-right-btn");

  if (!slider || !leftBtn || !rightBtn) return;

  leftBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -490, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    slider.scrollBy({ left: 490, behavior: "smooth" });
  });
};

// ==========================================
// DYNAMIC PUBLICATIONS RENDERER (MOVIE CARDS)
// ==========================================
const renderPublications = () => {
  const container = document.getElementById("dynamic-publications-grid");
  if (!container) return;

  container.innerHTML = publicationData
    .map((pub, idx) => {
      const badgeHTML = `<span class="pub-type-badge">${pub.badge}</span>`;
      const noteHTML = pub.note ? `<div class="pub-note">${pub.note}</div>` : "";
      const linksHTML = pub.links.length
        ? `<div class="pub-links">
            ${pub.links
          .map(
            link => `
              <a href="${link.url}" class="pub-link-btn" target="_blank" rel="noopener noreferrer">
                ${link.text} <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>`
          )
          .join("")}
           </div>`
        : "";
      const imageHTML = pub.image
        ? `<img src="${pub.image}" alt="${pub.title}" class="pub-thumb-img">`
        : "";

      return `
        <div class="movie_box reveal-item">
          <div class="movie_thum_placeholder">
            ${imageHTML}
            <div class="movie-card-overlay">
              <span class="movie-card-number">0${idx + 1}</span>
              <span class="movie-play-icon"><i class="fa-solid fa-file-pdf"></i></span>
            </div>
          </div>
          <div class="pub-content-box">
            <span class="pub-journal">${pub.journal}</span>
            ${badgeHTML}
            <h4 class="pub-title-text">${pub.title}</h4>
            <div class="pub-authors-text">${pub.authors}</div>
            ${noteHTML}
            <p class="pub-description-text">${pub.desc}</p>
            ${linksHTML}
          </div>
        </div>
      `;
    })
    .join("");
};

// ==========================================
// TYPING EFFECT
// ==========================================
class TypingEffect {
  constructor(element, words, wait = 3000) {
    this.element = element;
    this.words = words;
    this.txt = "";
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

    this.element.innerHTML = `<span class="txt">${this.txt}</span><span class="cursor" style="border-right: 1.5px solid var(--accent-sky); margin-left: 2px; animation: blink-cursor 0.8s infinite;"></span>`;

    let typeSpeed = 50;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
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
    50% { border-color: var(--accent-sky); }
  }
`;
document.head.appendChild(styleSheet);

// ==========================================
// SCROLL REVEAL OBSERVER
// ==========================================
const initScrollReveal = () => {
  const revealElements = document.querySelectorAll(".reveal-item, .intro_box, .footer_wrapper");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: "0px 0px -20px 0px"
    }
  );

  revealElements.forEach(el => observer.observe(el));
};

// ==========================================
// EMAIL COPY UTILITY
// ==========================================
const initEmailCopy = () => {
  const emailBoxes = document.querySelectorAll(".email-box");

  emailBoxes.forEach(box => {
    const label = box.querySelector(".email-address");
    const email = label.textContent.trim();

    box.addEventListener("click", async () => {
      if (box.classList.contains("copied")) return;
      try {
        await navigator.clipboard.writeText(email);
        box.classList.add("copied");

        const originalText = label.textContent;
        label.innerHTML = `<i class="fa-solid fa-check" style="margin-right: 4px; color: var(--accent-green);"></i> Copied!`;

        setTimeout(() => {
          box.classList.remove("copied");
          label.textContent = originalText;
        }, 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    });
  });
};

// ==========================================
// STICKY HEADER SCROLL LOGIC
// ==========================================
const initNavigation = () => {
  const navbar = document.querySelector(".header_logo_fix");
  const menuBox = document.querySelector(".menu_box");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      if (navbar) navbar.classList.add("scrolled");
      if (menuBox) menuBox.classList.add("scrolled");
    } else {
      if (navbar) navbar.classList.remove("scrolled");
      if (menuBox) menuBox.classList.remove("scrolled");
    }
  });
};

// ==========================================
// BACKGROUND SCROLL TRANSITIONS
// ==========================================
const initBackgroundTransitions = () => {
  const bgBaseEl = document.getElementById('bg-base');
  const bgNewsEl = document.getElementById('bg-news');
  const bgPubsEl = document.getElementById('bg-publications');
  const intro = document.getElementById('intro');
  const news = document.getElementById('news');
  const publications = document.getElementById('publications');
  const patents = document.getElementById('patents-awards');

  const updateBackgrounds = () => {
    if (!intro || !news || !publications || !patents) return;

    const scrollY = window.scrollY;
    const H = window.innerHeight;
    const Y = scrollY + H / 2;

    const B1 = news.offsetTop;
    const B2 = publications.offsetTop;
    const B3 = patents.offsetTop;

    // Calculate transition half-widths to prevent overlaps
    const W1 = Math.min(H * 0.5, B1 * 0.5);
    const W2 = Math.min(H * 0.5, (B2 - B1) * 0.5);
    const W3 = Math.min(H * 0.5, (B3 - B2) * 0.5);

    let baseOpacity = 0;
    let newsOpacity = 0;
    let pubOpacity = 0;

    if (Y <= B1 - W1) {
      baseOpacity = 1;
      newsOpacity = 0;
      pubOpacity = 0;
    } else if (Y > B1 - W1 && Y <= B1 + W1) {
      const t = (Y - (B1 - W1)) / (2 * W1);
      baseOpacity = 1 - t;
      newsOpacity = t;
      pubOpacity = 0;
    } else if (Y > B1 + W1 && Y <= B2 - W2) {
      baseOpacity = 0;
      newsOpacity = 1;
      pubOpacity = 0;
    } else if (Y > B2 - W2 && Y <= B2 + W2) {
      const t = (Y - (B2 - W2)) / (2 * W2);
      baseOpacity = 0;
      newsOpacity = 1 - t;
      pubOpacity = t;
    } else if (Y > B2 + W2 && Y <= B3 - W3) {
      baseOpacity = 0;
      newsOpacity = 0;
      pubOpacity = 1;
    } else if (Y > B3 - W3 && Y <= B3 + W3) {
      const t = (Y - (B3 - W3)) / (2 * W3);
      baseOpacity = t;
      newsOpacity = 0;
      pubOpacity = 1 - t;
    } else {
      baseOpacity = 1;
      newsOpacity = 0;
      pubOpacity = 0;
    }

    if (bgBaseEl) bgBaseEl.style.opacity = baseOpacity.toFixed(3);
    if (bgNewsEl) bgNewsEl.style.opacity = newsOpacity.toFixed(3);
    if (bgPubsEl) bgPubsEl.style.opacity = pubOpacity.toFixed(3);
  };

  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateBackgrounds();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', updateBackgrounds);
  window.addEventListener('load', updateBackgrounds);

  // Initial update
  updateBackgrounds();
};

// ==========================================
// INIT APP
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Render components
  renderTimeline();
  renderPublications();
  initNewsModal();
  initSliderNav();

  // Typing effect
  const typeEl = document.getElementById("typing-text");
  if (typeEl) {
    const words = [
      "Incoming Ph.D Candidate @ Fudan University & Shanghai Innovation Institute (SII)",
      "B.Eng Graduate from Nankai University (Excellent Computer Science Class)"
    ];
    new TypingEffect(typeEl, words, 3000);
  }

  // Initialize interactive components
  initScrollReveal();
  initEmailCopy();
  initNavigation();
  initBackgroundTransitions();
});
