# Urban Vogue - Responsive Fashion Landing Page

A modern and responsive landing page for **Urban Vogue**, a premium fashion clothing brand. This project was built using pure **HTML, CSS, and JavaScript** without any frameworks or templates.

## 📌 Project Overview

Urban Vogue is a stylish, single-page fashion website designed to showcase trendy collections, brand information, promotional offers, and customer-focused features.

The website provides a clean user experience with smooth navigation, responsive layouts, and modern UI elements suitable for desktop, tablet, and mobile devices.

---

## 🚀 Features

* Responsive navigation bar with mobile menu toggle
* Hero section with dynamic image slider
* Featured collection with product cards
* About Urban Vogue section
* Why Choose Us section
* Promotional offers banner
* Footer with social media links
* Smooth scrolling navigation
* Fully mobile-responsive design
* Custom favicon and brand logo

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

---

## 📂 Project Structure

```text
urban-vogue/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── images/
    ├── favicon.png
    ├── logo.png
    ├── front1.webp
    ├── front2.webp
    ├── front3.webp
    ├── denim.webp
    ├── shirt.webp
    ├── dress.webp
    ├── hoodie.webp
    └── about.webp
```

---

## 📱 Responsive Design

The website is optimized for:

* Desktop (1200px and above)
* Tablets (768px – 1199px)
* Mobile devices (below 768px)

Key responsive features include:

* Collapsible mobile navigation menu
* Single-column product cards on mobile
* Flexible layouts using Flexbox and CSS Grid
* No horizontal scrolling
* Responsive images with `object-fit`

---

## 🎯 Website Sections

### Header / Navbar

* Urban Vogue logo
* Home
* Collection
* About
* Offers
* Contact
* Shop Now button

### Hero Section

* Dynamic fashion image slider
* Brand slogan
* Call-to-action buttons

### Featured Collection

* Casual Denim Jacket
* Classic White Shirt
* Summer Floral Dress
* Premium Cotton Hoodie

### About Urban Vogue

A brief introduction to the brand philosophy and values.

### Why Choose Us

* Trendy Collections
* Premium Fabric
* Affordable Pricing
* Easy Returns

### Offers Section

Special promotional banner highlighting discounts and seasonal offers.

### Footer

* Copyright information
* Social media links
* Brand identity

---

## ⚙️ JavaScript Functionality

### Mobile Navigation Toggle

The mobile menu opens and closes using JavaScript event listeners.

### Hero Image Slider

The hero banner automatically changes images every 3 seconds.

```javascript
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    heroImg.src = images[currentIndex];
}, 3000);
```

---

## ▶️ Running the Project

Simply open:

```text
index.html
```

in any modern web browser.

No server setup, dependencies, or package installations are required.

---

## 📷 Assets

All images are stored locally inside the `images` folder to ensure the project works completely offline.

Recommended image formats:

* `.webp`
* `.png`
* `.jpg`

---

## 📌 Future Improvements

Potential enhancements include:

* Product filtering functionality
* Dark/Light theme switcher
* Shopping cart integration
* Customer testimonials section
* Newsletter subscription form
* Backend integration with APIs

---

Developed as a Front-End Developer assessment project using pure HTML, CSS, and JavaScript.

## 🚀 Live Demo

🔗 https://clothing-brand-webpage.vercel.app/
**Urban Vogue © 2026**

