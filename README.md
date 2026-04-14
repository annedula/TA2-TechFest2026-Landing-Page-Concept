# TechFest '26 — Dynamic Bootstrap Landing Page
### Week 12 Terminal Assessment 2 | Midterm Project
 
## Project Overview
 
**TechFest '26** is a fully responsive, dynamic landing page built for a fictional hackathon event set in Manila, Philippines. This project was created as a midterm assessment to demonstrate mastery of Bootstrap 5, JavaScript form validation, and UI/UX design principles.
## File Structure
 
TA1-WEBSITE-DEVELOPMENT/
│
├── css/
│   ├── bootstrap.min.css      # Bootstrap framework (precompiled CSS)
│   └── style.css              # Custom styles for the website
│
├── img/
│   ├── annie-spratt-QckxruozjRg-unsplash.jpg   # Background/image asset
│   ├── DULA_FP.jpg                             # Custom project image
│   └── techfest-logo.svg                       # Logo used in the website
│
├── js/
│   ├── bootstrap.min.js       # Bootstrap JavaScript file
│   └── custom.js              # Custom scripts and interactions
│
└── index.html                 # Main landing page of the website
 
## Tech Stack
 
| Technology | Version | Purpose |
|---|---|---|
| HTML5 | — | Page structure and content |
| CSS3 | — | Custom styling (written inside `<style>` tag) |
| Bootstrap 5 | 5.3.3 | Grid system, navbar, carousel, modal, tabs, toast |
| Bootstrap Icons | 1.11.3 | Icons used throughout the page |
| JavaScript (Vanilla) | ES5/ES6 | Form validation and interactivity |
| Google Fonts | — | Orbitron (headings) + Exo 2 (body text) |
 
All libraries are loaded via **CDN** — no installation needed.
 
---
 
## CDN Links Used
 
These are already included in the `<head>` of `index.html`:
 
```html
<!-- Bootstrap 5 CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
 
<!-- Bootstrap Icons -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
 
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;500;600&display=swap" rel="stylesheet">
 
<!-- Bootstrap 5 JS (at bottom of body) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```
 
---
 
## 📐 Bootstrap Implementation Details
 
### Navbar (Bootstrap Component)
 
The navbar uses `navbar-expand-lg` which means:
- On **desktop (≥992px):** all links are shown horizontally
- On **mobile (<992px):** links collapse into a hamburger menu
 
```html
<nav class="navbar navbar-expand-lg fixed-top" id="mainNavbar">
  <!-- Brand logo -->
  <a class="navbar-brand" href="#">// TECHFEST '26</a>
 
  <!-- Hamburger button (mobile only) -->
  <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
 
  <!-- Collapsible links -->
  <div class="collapse navbar-collapse" id="navMenu">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item"><a class="nav-link" href="#tracks">Tracks</a></li>
      ...
    </ul>
  </div>
</nav>
```
 
### 12-Column Grid System
 
Bootstrap's grid divides the page into 12 columns. Here's how each section uses it:
 
| Section | Mobile | Tablet (md) | Desktop (lg) |
|---|---|---|---|
| Hero | `col-12` (stacked) | `col-12` | `col-lg-6` (50/50 split) |
| Stats Bar | `col-6` (2 per row) | `col-md-3` (4 in a row) | `col-md-3` |
| Track Cards | `col-12` (1 per row) | `col-md-6` (2 per row) | `col-lg-4` (3 per row) |
| Prize Cards | `col-12` (1 per row) | `col-sm-6` (2 per row) | `col-lg-3` (4 per row) |
| Footer | `col-12` (stacked) | `col-md-4` (3 in a row) | `col-md-4` |
 
Example from track cards:
```html
<div class="col-12 col-md-6 col-lg-4">
  <!-- this column is full width on mobile, half on tablet, one-third on desktop -->
</div>
```
 
### Bootstrap Components Used
 
| Component | Where Used | How It's Triggered |
|---|---|---|
| **Navbar** | Top of page, fixed | Always visible; collapses on mobile |
| **Carousel** | Speakers section | Auto-plays every 4.5 seconds; has arrows and dots |
| **Tabs** | Schedule section | Click Day 01 / Day 02 / Day 03 buttons |
| **Modal** | "Learn More" popup | Click "Learn More" button in hero |
| **Toast** | Success notification | Appears after successful form submission |
 
---
 
## ⚙️ JavaScript Functionality Details
 
### Form Validation
 
The registration form uses **custom JavaScript validation** (not the browser's default popup). Here's how it works:
 
1. The `<form>` tag has `novalidate` — this turns off browser default error popups
2. When the user clicks Submit, JavaScript checks every field
3. Fields get a green border (`.is-valid`) if correct, red border (`.is-invalid`) if wrong
4. An error message appears below each invalid field
 
```javascript
function checkField(field) {
 
  // special rule for GitHub URL field
  if (field.id === 'github') {
    var githubPattern = /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/;
    var isValidGithub = githubPattern.test(field.value.trim());
 
    if (isValidGithub) {
      field.setCustomValidity('');       // clears any error
    } else {
      field.setCustomValidity('Invalid GitHub URL');   // sets custom error
    }
  }
 
  // show is-valid (green) or is-invalid (red)
  if (field.checkValidity()) {
    field.classList.add('is-valid');
    field.classList.remove('is-invalid');
  } else {
    field.classList.add('is-invalid');
    field.classList.remove('is-valid');
  }
}
 
## Design Details
 
### Color Palette
 
| Color Name | Hex Code | Used For |
|---|---|---|
| Cyan | `#00F0FF` | Primary accent, borders, icons, buttons |
| Magenta | `#FF2D78` | Secondary accent, Web3 track, highlights |
| Yellow | `#FFD700` | Grand prize card, IoT track |
| Neon Green | `#39FF14` | Valid form fields, Open Innovation track |
| Dark Background | `#070B18` | Main page background |
| Surface Dark | `#0D1526` | Cards, navbar, sections |
| Surface Darker | `#131E35` | Card hover states, modal body |
| Body Text | `#E2E8F8` | Main readable text |
| Muted Text | `#6B7A9E` | Descriptions, placeholders, labels |
 
### Typography
 
| Font | Weight | Used For |
|---|---|---|
| **Orbitron** | 400, 700, 900 | All headings, labels, nav links, buttons |
| **Exo 2** | 300, 400, 500, 600 | Body text, paragraphs, form inputs |
 
## Page Sections
 
| Section | ID | Description |
|---|---|---|
| Navbar | `#mainNavbar` | Fixed top navigation with links and Register button |
| Hero | `#hero` | Full-screen intro with title, subtitle, buttons, and image slot |
| Stats Bar | `#stats` | 4 key numbers: Prizes, Hackers, Tracks, Mentors |
| Tracks | `#tracks` | 6 challenge tracks in a responsive grid |
| Speakers | `#carousel-section` | Bootstrap carousel with 4 speaker cards |
| Schedule | `#schedule` | Bootstrap tabs showing Day 1, 2, and 3 timelines |
| Prizes | `#prizes` | 4 prize cards including Grand Champion |
| Register | `#register` | Full registration form with JS validation |
| Modal | `#infoModal` | "About TechFest" popup with image and info boxes |
| Toast | `#successToast` | Success message shown after form submission |
| Footer | — | Event details, contact, and hashtag |
 
 
## How to Run the Project
 
This is a **static HTML project** — no server or installation needed.
 
**Option 1 — Open directly in browser:**
1. Download or copy the `index.html` file
2. Double-click the file to open it in your browser
3. Done!
 
**Option 2 — Use VS Code Live Server (recommended):**
1. Open the project folder in VS Code
2. Install the **Live Server** extension
3. Right-click `index.html` → click **"Open with Live Server"**
4. The page will open at `http://127.0.0.1:5500`
 
---
 
## Pre-Submission Checklist
 
Before submitting, make sure everything works:
 
- [ ] Navbar collapses into hamburger on mobile
- [ ] Hamburger menu opens and closes correctly
- [ ] All navbar links scroll to the correct sections
- [ ] Hero section is visible and buttons work
- [ ] "Learn More" button opens the modal popup
- [ ] Modal "Register Now" button closes modal and scrolls to form
- [ ] Carousel arrows (prev/next) work
- [ ] Carousel dots work and auto-plays
- [ ] Schedule tabs (Day 01, 02, 03) switch content correctly
- [ ] Form shows red borders when fields are empty/wrong on submit
- [ ] Form shows green borders when fields are filled correctly
- [ ] GitHub URL only accepts valid `https://github.com/username` links
- [ ] Both checkboxes must be checked to submit
- [ ] Success toast appears after valid form submission
- [ ] Form resets after successful submission
- [ ] Page looks good on mobile (375px wide)
- [ ] Page looks good on tablet (768px wide)
- [ ] Page looks good on desktop (1280px wide)
- [ ] Images are placed (or placeholders are kept if no images)
- [ ] No broken links or console errors
 
---
 
## Resources Used
 
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Google Fonts — Orbitron](https://fonts.google.com/specimen/Orbitron)
- [Google Fonts — Exo 2](https://fonts.google.com/specimen/Exo+2)
- [MDN Web Docs — Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [MDN Web Docs — IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Unsplash — Free Images](https://unsplash.com)
- [W3Schools Bootstrap 5 Tutorial](https://www.w3schools.com/bootstrap5/)
 
---
 
## Project Info
 
| | |
|---|---|
| **Project Name** | TechFest '26 Dynamic Bootstrap Landing Page |
| **Course** | Web Development |
| **Assessment** | Week 12 — Terminal Assessment 2 (Midterm) |
| **Event Theme** | Hackathon / Tech Festival |
| **Event Date** | June 20–22, 2026 |
| **Event Venue** | SMDC Arena, Pasay, Metro Manila |
 
---
 
*Built with Bootstrap 5 + Vanilla JavaScript*
