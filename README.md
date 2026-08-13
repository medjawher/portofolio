# Mohamed Jawher Chaouachi Portfolio

Personal portfolio website showcasing my background, skills, education, work experience, and projects as a Software Engineer specializing in Cybersecurity, DevSecOps and AI.

**Live site:** _add your deployed link here once it's live (e.g. GitHub Pages, Netlify, Vercel)_

## Overview

A single-page portfolio built with plain HTML, CSS and JavaScript no frameworks, no build step. Sections include:

- **About** intro, profile photo, CV download, social links
- **Skills** programming languages, databases, systems, version control, cybersecurity tools, soft skills, languages
- **Education** degree history, click-through detail modals
- **Experience** internships/roles, click-through detail modals with proof documents
- **Projects** click-through detail modals, tech stack icons, GitHub links, and in-modal video demos
- **Activities** clubs, competitions, leadership
- **Contact** contact form (wired to EmailJS)

## Tech stack

- HTML5 / CSS3 (custom, no framework)
- Vanilla JavaScript (mobile nav, scroll spy, modals, video-demo player, contact form)
- [EmailJS](https://www.emailjs.com/) for the contact form
- [Font Awesome](https://fontawesome.com/) for icons

## Project structure

```
.
├── index.html          # Page markup
├── style.css            # All styling, including responsive breakpoints
├── script.js             # Nav, scroll spy, modals, video demos, contact form
├── img/                  # Photos, diplomas, project screenshots, proof documents
├── videos/               # Project demo videos played from the project modals
└── files/                # CV (files/CV_chaouachi_mohamed_jawher.pdf)
```

## Running locally

No build tools needed it's static HTML/CSS/JS.

1. Clone the repo:
   ```bash
   git clone https://github.com/medjawher/<your-repo-name>.git
   cd <your-repo-name>
   ```
2. Open `index.html` directly in a browser, **or** serve it locally so relative paths (videos, images) behave exactly like production:
   ```bash
   python3 -m http.server 8000
   # then open http://localhost:8000
   ```

## Contact form setup

The form in `script.js` calls `emailjs.sendForm(...)` with a service ID and template ID from EmailJS. If you fork this:

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Replace the `emailjs.init('...')` key and the `service_...` / `template_...` IDs in `script.js` with your own.

## Deploying

Since it's fully static, this repo can be hosted for free on:

- **GitHub Pages** Settings → Pages → deploy from the `main` branch, root folder.
- **Netlify / Vercel** drag-and-drop or connect the repo, no build command needed.

## Contact

- GitHub: [github.com/medjawher](https://github.com/medjawher)
- LinkedIn: [linkedin.com/in/chaouachi-med-jawher-740262289](https://www.linkedin.com/in/chaouachi-med-jawher-740262289/)

## License

© 2026 Mohamed Jawher Chaouachi. All rights reserved.
