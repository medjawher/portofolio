emailjs.init('CnP9iI_E7XJDTkKo4');
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-xmark');
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.classList.add('fa-bars');
            menuIcon.classList.remove('fa-xmark');
        });
    });
}


const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-links a');

function setActiveLink() {
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinkEls.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active-link');
        }
    });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);


const visitBtn = document.querySelector('.visit-btn');
if (visitBtn) {
    visitBtn.addEventListener('click', () => {
        window.open('https://github.com/medjawher', '_blank');
    });
}

const downloadBtn = document.querySelector('.info-box .btn-group .btn:not(.btn-outline)');
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'files/CV_Chaouachi_Mohamed_Jawher-final_version.pdf'; 
        link.download = 'Jawher_CV.pdf';
        link.click();
    });
}

const contactMeBtn = document.querySelector('.info-box .btn-outline');
if (contactMeBtn) {
    contactMeBtn.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const subject = contactForm.subject.value.trim() || 'New message from your portfolio';
        const message = contactForm.message.value.trim();

        if (!name || !email || !message) {
            showFormStatus('Please fill in your name, email, and message.', 'error');
            return;
        }

        emailjs.sendForm('service_g5dg72s', 'template_qjqni0v', contactForm)
        .then(() => {
        showFormStatus('Message sent! I\'ll get back to you soon.', 'success');
        contactForm.reset();
         })
        .catch(() => {
        showFormStatus('Something went wrong. Please try again.', 'error');
        });
    });
}

function openModal(modal) {
    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

document.querySelectorAll('[data-modal-target]').forEach(card => {
    card.addEventListener('click', () => {
        const modal = document.getElementById(card.dataset.modalTarget);
        if (modal) openModal(modal);
    });
});

document.querySelectorAll('.modal-overlay').forEach(overlay => {
    const closeBtn = overlay.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => closeModal(overlay));
    }
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal(overlay);
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(closeModal);
    }
});

const videoModal = document.getElementById('video-modal');
const demoVideo = document.getElementById('demo-video');

function openVideoModal(src) {
    if (!demoVideo || !videoModal) return;
    demoVideo.src = src;
    openModal(videoModal);
    demoVideo.play().catch(() => {
    });
}

function closeVideoModal() {
    if (!demoVideo) return;
    demoVideo.pause();
    demoVideo.removeAttribute('src');
    demoVideo.load();
}

document.querySelectorAll('[data-video]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openVideoModal(btn.dataset.video);
    });
});

if (videoModal) {
    const videoCloseBtn = videoModal.querySelector('.modal-close');
    if (videoCloseBtn) {
        videoCloseBtn.addEventListener('click', closeVideoModal);
    }
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) closeVideoModal();
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideoModal();
});

document.querySelectorAll('.project-card .btn-group').forEach(group => {
    group.addEventListener('click', (e) => e.stopPropagation());
});


function showFormStatus(text, type) {
    let statusEl = document.getElementById('formStatus');

    if (!statusEl) {
        statusEl = document.createElement('p');
        statusEl.id = 'formStatus';
        contactForm.appendChild(statusEl);
    }

    statusEl.textContent = text;
    statusEl.className = `form-status ${type}`;
}
