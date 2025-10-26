---
layout: inline
title: "Home"
permalink: /
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Evolve Connection Coaching offers restorative practices to transform relationships and communication. Book coaching sessions, workshops, and more.">
  <title>Evolve | Connection Coaching - A Restorative Approach to Life &amp; Relationships</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js" defer></script>
  <script src="script.js" defer></script>
  
  <style>
    /* Import Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');

    /* Global Variables */
    :root {
      --primary-color: #8a56b5;
      --secondary-color: #eee6f3;
      --text-color: #333;
      --light-text: #666;
      --dark-bg: #3a2347;
      --heading-font: 'Cormorant Garamond', serif;
      --body-font: 'Montserrat', sans-serif;
      --transition: all 0.3s ease;
      --border-radius: 4px;
      --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }

    /* Base Styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: var(--body-font);
      color: var(--text-color);
      line-height: 1.6;
      background-color: #fff;
      overflow-x: hidden;
      font-size: 16px;
      font-weight: 300;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: var(--heading-font);
      font-weight: 400;
      margin-bottom: 1rem;
      line-height: 1.2;
      color: var(--text-color);
    }

    h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 1rem;
      color: var(--light-text);
      line-height: 1.7;
    }

    a {
      text-decoration: none;
      color: var(--primary-color);
      transition: var(--transition);
    }

    a:hover {
      color: #7a45a0;
    }

    ul, ol {
      margin-left: 1.5rem;
      margin-bottom: 1.5rem;
    }

    li {
      margin-bottom: 0.5rem;
      color: var(--light-text);
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    /* Utility Classes */
    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 15px;
    }

    .section {
      padding: 80px 0;
      position: relative;
    }

    .section:nth-child(even) {
      background-color: rgba(138, 86, 181, 0.03);
    }

    .section-header {
      text-align: center;
      margin-bottom: 50px;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    .btn {
      display: inline-block;
      padding: 12px 25px;
      border-radius: var(--border-radius);
      background-color: var(--primary-color);
      color: white;
      font-weight: 500;
      text-align: center;
      cursor: pointer;
      transition: var(--transition);
      margin-top: 20px;
      border: none;
      font-family: var(--body-font);
      font-size: 0.95rem;
      letter-spacing: 0.5px;
    }

    .btn:hover {
      background-color: #7a45a0;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .btn-full {
      width: 100%;
    }

    /* Scroll Top Button */
    .scroll-top {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 45px;
      height: 45px;
      background-color: var(--primary-color);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 99;
      opacity: 0;
      visibility: hidden;
      transition: var(--transition);
      box-shadow: var(--box-shadow);
    }

    .scroll-top.active {
      opacity: 1;
      visibility: visible;
    }

    /* Mobile Menu */
    .mobile-menu {
      position: fixed;
      top: 0;
      right: -300px;
      width: 300px;
      height: 100vh;
      background-color: white;
      z-index: 1001;
      padding: 50px 30px;
      transition: var(--transition);
      box-shadow: -5px 0 15px rgba(0, 0, 0, 0.05);
    }

    .mobile-menu.active {
      right: 0;
    }

    .mobile-menu-close {
      position: absolute;
      top: 20px;
      right: 20px;
      background: none;
      border: none;
      font-size: 1.2rem;
      color: var(--text-color);
      cursor: pointer;
    }

    .mobile-menu-links {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 30px;
    }

    .mobile-menu-links a {
      color: var(--text-color);
      font-size: 1.1rem;
      transition: var(--transition);
      padding: 5px 0;
      border-bottom: 1px solid #f0f0f0;
    }

    .mobile-menu-links a:hover {
      color: var(--primary-color);
      padding-left: 5px;
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transition: var(--transition);
    }

    .overlay.active {
      opacity: 1;
      visibility: visible;
    }

    /* Header */
    .header {
      padding: 15px 0;
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 100;
      background-color: rgba(255, 255, 255, 0.95);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
      transition: var(--transition);
    }

    .header.scrolled {
      padding: 10px 0;
      background-color: white;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }

    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: var(--heading-font);
      font-size: 1.8rem;
      font-weight: 800;
      color: var(--primary-color);
    }

    .logo img {
      width: 120px;
      height: auto;
    }

    .nav-links {
      display: flex;
      gap: 30px;
    }

    .nav-link {
      color: var(--text-color);
      font-weight: 400;
      position: relative;
      padding: 5px 0;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      width: 0;
      height: 1px;
      background-color: var(--primary-color);
      bottom: 0;
      left: 0;
      transition: var(--transition);
    }

    .nav-link:hover::after {
      width: 100%;
    }

    .client-portal {
      padding: 10px 20px;
      background-color: transparent;
      color: var(--primary-color);
      border: 1px solid var(--primary-color);
      border-radius: var(--border-radius);
      font-weight: 500;
      transition: var(--transition);
    }

    .client-portal:hover {
      background-color: var(--primary-color);
      color: white;
    }

    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      font-size: 1.2rem;
      color: var(--text-color);
      cursor: pointer;
    }

    /* Hero Section */
    .hero {
      height: 100vh;
      min-height: 600px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: relative;
      background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('hero-bg.jpg') center/cover no-repeat;
      background-color: rgba(138, 86, 181, 0.05);
      margin-top: 0;
      padding-top: 80px;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      color: var(--text-color);
      max-width: 800px;
      padding: 0 20px;
    }

    .hero-title {
      font-size: 3.5rem;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .hero-subtitle {
      font-size: 1.2rem;
      margin-bottom: 30px;
      opacity: 0.9;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-cta {
      display: inline-block;
      padding: 15px 30px;
      background-color: var(--primary-color);
      color: white;
      border-radius: var(--border-radius);
      font-weight: 500;
      letter-spacing: 0.5px;
      transition: var(--transition);
      font-size: 1rem;
    }

    .hero-cta:hover {
      background-color: #7a45a0;
      color: white;
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }

    /* About Section */
    .about-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }

    .about-content h2 {
      margin-bottom: 20px;
      color: var(--primary-color);
    }

    .about-content p {
      margin-bottom: 20px;
    }

    .about-values {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 30px;
    }

    .value-tag {
      padding: 8px 15px;
      background-color: var(--secondary-color);
      border-radius: 30px;
      color: var(--primary-color);
      font-weight: 500;
      font-size: 0.9rem;
    }

    .about-image {
      position: relative;
      border-radius: var(--border-radius);
      overflow: hidden;
      box-shadow: var(--box-shadow);
    }

    .about-image img {
      width: 100%;
      height: auto;
      display: block;
      transition: var(--transition);
    }

    .about-image:hover img {
      transform: scale(1.03);
    }

    /* Services Section */
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 30px;
      margin-bottom: 40px;
    }

    .service-card {
      background-color: white;
      border-radius: var(--border-radius);
      overflow: hidden;
      box-shadow: var(--box-shadow);
      transition: var(--transition);
      border: 1px solid #f0f0f0;
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      border-color: var(--secondary-color);
    }

    .service-card-content {
      padding: 25px;
    }

    .service-card-content h3 {
      margin-bottom: 10px;
      color: var(--primary-color);
    }

    .service-price {
      font-weight: 500;
      margin-bottom: 20px;
      color: var(--text-color);
      font-size: 0.95rem;
    }

    .service-features {
      margin-bottom: 25px;
    }

    .service-feature {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 12px;
    }

    .service-feature i {
      color: var(--primary-color);
      font-size: 0.9rem;
      margin-top: 5px;
    }

    /* Testimonials Section */
    .testimonial-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 30px;
    }

    .testimonial-card {
      background-color: white;
      border-radius: var(--border-radius);
      padding: 30px;
      box-shadow: var(--box-shadow);
      transition: var(--transition);
      border: 1px solid #f0f0f0;
    }

    .testimonial-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      border-color: var(--secondary-color);
    }

    .testimonial-text {
      font-style: italic;
      margin-bottom: 20px;
      position: relative;
      padding-top: 25px;
      color: var(--light-text);
    }

    .testimonial-text::before {
      content: '"';
      position: absolute;
      top: -10px;
      left: -5px;
      font-size: 4rem;
      color: var(--secondary-color);
      font-family: serif;
      opacity: 0.8;
    }

    .testimonial-author strong {
      display: block;
      margin-bottom: 5px;
      color: var(--primary-color);
      font-weight: 500;
    }

    /* Workshops Section */
    .workshop-container {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .workshop-card {
      background-color: white;
      border-radius: var(--border-radius);
      overflow: hidden;
      box-shadow: var(--box-shadow);
      transition: var(--transition);
      border: 1px solid #f0f0f0;
    }

    .workshop-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      border-color: var(--secondary-color);
    }

    .workshop-card-content {
      padding: 30px;
    }

    .workshop-date {
      display: inline-block;
      font-weight: 500;
      margin-bottom: 15px;
      color: var(--primary-color);
      background-color: var(--secondary-color);
      padding: 5px 12px;
      border-radius: 4px;
      font-size: 0.9rem;
    }

    .workshop-card-content h3 {
      margin-bottom: 15px;
      color: var(--primary-color);
    }

    .workshop-card-content p {
      margin-bottom: 15px;
    }

    .workshop-card-content ul {
      margin-bottom: 20px;
    }

    /* Certifications Section */
    .certification-container {
      width: 100%;
      max-width: 1100px;
      margin: 0 auto;
    }

    .certification-logos {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 30px;
    }

    .certification-logo {
      background-color: white;
      border-radius: var(--border-radius);
      overflow: hidden;
      box-shadow: var(--box-shadow);
      transition: var(--transition);
      border: 1px solid #f0f0f0;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 150px;
    }

    .certification-logo:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      border-color: var(--primary-color);
    }

    .certification-logo img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    /* FAQ Section */
    .faq-container {
      max-width: 800px;
      margin: 0 auto;
    }

    .accordion-item {
      background-color: white;
      border-radius: var(--border-radius);
      margin-bottom: 15px;
      box-shadow: var(--box-shadow);
      overflow: hidden;
      border: 1px solid #f0f0f0;
    }

    .accordion-header {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition: var(--transition);
    }

    .accordion-header:hover {
      background-color: rgba(138, 86, 181, 0.05);
    }

    .accordion-header h3 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 400;
      color: var(--text-color);
    }

    .accordion-header i {
      color: var(--primary-color);
      transition: var(--transition);
    }

    .accordion-item.active .accordion-header i {
      transform: rotate(45deg);
    }

    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    .accordion-item.active .accordion-content {
      max-height: 500px;
    }

    .accordion-content-inner {
      padding: 0 20px 20px 20px;
    }

    /* Booking Section */
    .booking-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
    }

    .booking-info h3 {
      margin-bottom: 20px;
      color: var(--primary-color);
    }

    .booking-info ul {
      margin-bottom: 30px;
      list-style: none;
      margin-left: 0;
    }

    .booking-info li {
      display: flex;
      align-items: flex-start;
      gap: 15px;
      margin-bottom: 15px;
    }

    .booking-info li i {
      color: var(--primary-color);
      margin-top: 5px;
    }

    .pricing-box {
      background-color: var(--secondary-color);
      padding: 25px;
      border-radius: var(--border-radius);
      margin-top: 20px;
    }

    .pricing-box h4 {
      margin-bottom: 15px;
      color: var(--primary-color);
    }

    .pricing-box p {
      margin-bottom: 20px;
      font-size: 0.95rem;
    }

    .pricing-item {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    .pricing-item:last-child {
      border-bottom: none;
    }

    .booking-form {
      background-color: white;
      padding: 30px;
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      border: 1px solid #f0f0f0;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: var(--text-color);
      font-size: 0.95rem;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 12px 15px;
      border: 1px solid #e1e1e1;
      border-radius: var(--border-radius);
      background-color: white;
      font-family: var(--body-font);
      font-size: 1rem;
      transition: var(--transition);
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      border-color: var(--primary-color);
      outline: none;
      box-shadow: 0 0 0 2px rgba(148, 164, 137, 0.1);
    }

    .form-group textarea {
      min-height: 120px;
      resize: vertical;
    }

    /* Newsletter Section */
    .newsletter {
      background-color: var(--primary-color);
      padding: 60px 0;
      color: white;
      text-align: center;
    }

    .newsletter-container {
      max-width: 600px;
      margin: 0 auto;
    }

    .newsletter h2 {
      font-size: 2rem;
      margin-bottom: 15px;
      color: white;
    }

    .newsletter p {
      margin-bottom: 30px;
      color: rgba(255, 255, 255, 0.9);
    }

    .newsletter-form {
      display: flex;
      max-width: 500px;
      margin: 0 auto;
    }

    .newsletter-form input {
      flex: 1;
      padding: 15px;
      border: none;
      border-radius: var(--border-radius) 0 0 var(--border-radius);
      font-size: 1rem;
      font-family: var(--body-font);
    }

    .newsletter-form input:focus {
      outline: none;
    }

    .newsletter-form button {
      padding: 0 25px;
      background-color: var(--dark-bg);
      color: white;
      border: none;
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
      font-weight: 500;
      cursor: pointer;
      transition: var(--transition);
      font-family: var(--body-font);
    }

    .newsletter-form button:hover {
      background-color: #243235;
    }

    /* Contact Section */
    .contact-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
    }

    .contact-info h3 {
      margin-bottom: 20px;
      color: var(--primary-color);
    }

    .contact-method {
      display: flex;
      align-items: flex-start;
      gap: 15px;
      margin-bottom: 25px;
    }

    .contact-method i {
      width: 40px;
      height: 40px;
      background-color: var(--secondary-color);
      color: var(--primary-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 5px;
    }

    .contact-method p {
      margin-bottom: 5px;
    }

    .social-links {
      display: flex;
      gap: 15px;
      margin-top: 20px;
    }

    .social-link {
      width: 40px;
      height: 40px;
      background-color: var(--secondary-color);
      color: var(--primary-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: var(--transition);
    }

    .social-link:hover {
      background-color: var(--primary-color);
      color: white;
      transform: translateY(-3px);
    }

    .contact-form {
      background-color: white;
      padding: 30px;
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      border: 1px solid #f0f0f0;
    }

    /* Footer */
    footer {
      background-color: var(--dark-bg);
      color: white;
      padding: 60px 0 0;
    }

    .footer-container {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 30px;
      margin-bottom: 30px;
    }

    .footer-about h3 {
      font-size: 1.5rem;
      margin-bottom: 20px;
      color: white;
    }

    .footer-about p {
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 20px;
      font-size: 0.95rem;
    }

    .footer-logo-symbol {
      font-size: 2.5rem;
      color: var(--primary-color);
      margin-top: 10px;
      display: inline-block;
    }

    .footer-links h4 {
      font-size: 1.2rem;
      color: white;
      margin-bottom: 20px;
    }

    .footer-links ul {
      list-style: none;
      margin-left: 0;
    }

    .footer-links li {
      margin-bottom: 12px;
    }

    .footer-links a {
      color: rgba(255, 255, 255, 0.7);
      transition: var(--transition);
    }

    .footer-links a:hover {
      color: var(--primary-color);
      padding-left: 5px;
    }

    .footer-bottom {
      text-align: center;
      padding: 20px 0;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
    }

    /* Hero circles animation */
    .hero-circles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 1;
    }

    .circle {
      position: absolute;
      border-radius: 50%;
      background-color: rgba(138, 86, 181, 0.1);
    }

    .circle-1 {
      width: 300px;
      height: 300px;
      top: -50px;
      left: -50px;
    }

    .circle-2 {
      width: 500px;
      height: 500px;
      bottom: -100px;
      right: -100px;
    }

    .circle-3 {
      width: 200px;
      height: 200px;
      top: 30%;
      right: 10%;
    }

    /* Media Queries */
    @media (max-width: 1024px) {
      .hero-title {
        font-size: 3rem;
      }
      
      .footer-container {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
      }
    }

    @media (max-width: 768px) {
      html {
        font-size: 15px;
      }

      .section {
        padding: 60px 0;
      }
      
      .nav-links {
        display: none;
      }
      
      .mobile-menu-btn {
        display: block;
      }
      
      .about-container {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      
      .booking-container,
      .contact-container {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      
      .footer-container {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .hero-title {
        font-size: 2.5rem;
      }
    }

    @media (max-width: 480px) {
      html {
        font-size: 14px;
      }

      .hero-title {
        font-size: 2.2rem;
      }
      
      .hero-subtitle {
        font-size: 1rem;
      }
      
      .section-header h2 {
        font-size: 2rem;
      }
      
      .newsletter-form {
        flex-direction: column;
      }
      
      .newsletter-form input {
        border-radius: var(--border-radius);
        margin-bottom: 10px;
      }
      
      .newsletter-form button {
        border-radius: var(--border-radius);
        padding: 12px;
      }
    }
  </style>
<script src="https://lib.yourware.so/yourware-lib.umd.js" id="yourware-lib"></script><script id="simplify-jobs-page-script" src="chrome-extension://pbanhockgagggenencehbnadejlgchfc/js/pageScript.bundle.js"></script><script src="https://lib.yourware.so/yourware-lib.umd.js" id="yourware-lib"></script><script src="https://lib.yourware.so/yourware-lib.umd.js" id="yourware-lib"></script></head>
<body>

  <!-- Scroll Top Button -->
  <div class="scroll-top">
    <i class="fas fa-arrow-up"></i>
  </div>

  <!-- Mobile Menu -->
  <div class="mobile-menu">
    <button class="mobile-menu-close" aria-label="Close menu"><i class="fas fa-times"></i></button>
    <div class="mobile-menu-links">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#workshops">Workshops</a>
      <a href="#certifications">Certifications</a>
      <a href="#shop">Shop</a>
      <a href="#faq">FAQ</a>
      <a href="#booking">Book Now</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
  <div class="overlay"></div>

<!-- Header -->
<header class="header">
  <div class="container">
    <nav class="nav-container">
      <a href="/" class="logo"> 
        <img src="finalfile2-01.jpg" alt="Evolve Logo" style="width: 230px; height: auto;"> 
      
      </a>

        <div class="nav-links">
          <a href="#about" class="nav-link">About</a>
          <a href="#services" class="nav-link">Services</a>
          <a href="#testimonials" class="nav-link">Testimonials</a>
          <a href="#certifications" class="nav-link">Certifications</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
        <a href="#booking" class="client-portal">Book Now</a>
        <button class="mobile-menu-btn" aria-label="Open menu"><i class="fas fa-bars"></i></button>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content-wrapper">
      <div class="container">
        <div class="hero-content">
          <div class="hero-message">
            <h1 class="hero-title">Evolve. Heal. Transform.</h1>
            <p class="hero-subtitle">Restoration is always possible.</p>
          </div>
          <div class="hero-description">
            <p>Deep, meaningful connections are the foundation of growth, healing, and transformation. Let's build a path forward together.</p>
            <a href="#booking" class="hero-cta">Book a Free Consultation</a>
          </div>
        </div>
      </div>
      <div class="hero-circles">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="about section">
    <div class="container">
      <div class="about-container">
        <div class="about-content" data-aos="fade-right">
          <h2>Meet Danielle</h2>
          <p>Hi, I'm Danielle Woody (she/her), founder of <em>Evolve | Connection Coaching</em>. My journey has been shaped by over a decade of experience in <strong>restorative practices, student accountability, conflict resolution, and leadership development</strong>.</p>
          
          <p>At <em>Evolve | Connection Coaching</em>, I believe that healing begins with connection, accountability, and love—for ourselves and for those around us. Life's challenges can leave us feeling disconnected, but restoration is always possible.</p>
          
          <p>My mission is to help you restore balance, clarity, and love in your life by using restorative practices that encourage self-reflection, honest communication, personal growth, and meaningful change.</p>
          
          <div class="about-values">
            <span class="value-tag">Restoration</span>
            <span class="value-tag">Authenticity</span>
            <span class="value-tag">Compassion</span>
            <span class="value-tag">Empowerment</span>
            <span class="value-tag">Connection</span>
          </div>
          
          <a href="#booking" class="btn">Work With Me</a>
        </div>
        <div class="about-image" data-aos="fade-left">
          <img src="danielle-woody pic.jpg" alt="Danielle Woody - Life Coach" loading="lazy">
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="services section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h2>Ways to work together</h2>
        <p>At Evolve Connection Coaching I believe that growth, healing, and connection happen through meaningful partnership. Whether you're seeing to strengthen personal relationships, navigate life transitions or lead with great authenticity, Evolve Coaching pathways offer restorative tools and guided support tailored to your journey.</p>
      </div>
      <div class="services-grid">
        <div class="service-card" data-aos="fade-up" data-aos-delay="100">
          <div class="service-card-content">
            <h3>Individual Coaching</h3>
            <p class="service-price">$100 - $200 per session</p>
            <div class="service-features">
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Self-reflection &amp; emotional awareness</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Identify patterns that no longer serve you</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Cultivate self-love and confidence</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Set intentional goals for transformation</span>
              </div>
            </div>
            <a href="#booking" class="btn">Book a Session</a>
          </div>
        </div>
        
        <div class="service-card" data-aos="fade-up" data-aos-delay="200">
          <div class="service-card-content">
            <h3>Relationship Coaching</h3>
            <p class="service-price">$120 - $250 per session</p>
            <div class="service-features">
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Develop healthier communication skills</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Navigate conflict with honesty and empathy</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Repair and restore relationships after harm</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Build deeper emotional connections and trust</span>
              </div>
            </div>
            <a href="#booking" class="btn">Book a Session</a>
          </div>
        </div>
        
        <div class="service-card" data-aos="fade-up" data-aos-delay="300">
          <div class="service-card-content">
            <h3>Life Transitions Coaching</h3>
            <p class="service-price">$120 - $250 per session</p>
            <div class="service-features">
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Find clarity in uncertain times</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Embrace new beginnings with intention</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Process and heal from past experiences</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Develop a roadmap for your next chapter</span>
              </div>
            </div>
            <a href="#booking" class="btn">Book a Session</a>
          </div>
        </div>
      </div>
      
      <div class="services-grid">
        <div class="service-card" data-aos="fade-up" data-aos-delay="50">
          <div class="service-card-content">
            <h3>Free 30-Minute Consultation</h3>
            <p class="service-price">No Cost</p>
            <div class="service-features">
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Explore your goals and coaching needs</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Ask questions about the coaching process</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Experience the restorative approach firsthand</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>No pressure conversation to determine fit</span>
              </div>
            </div>
            <a href="#booking" class="btn">Schedule Now</a>
          </div>
        </div>
        
        <div class="service-card" data-aos="fade-up" data-aos-delay="100">
          <div class="service-card-content">
            <h3>Leadership Coaching</h3>
            <p class="service-price">$150 - $300 per session</p>
            <div class="service-features">
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Lead with integrity, empathy, and accountability</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Strengthen emotional intelligence</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Foster trust and collaboration in teams</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Navigate difficult conversations with confidence</span>
              </div>
            </div>
            <a href="#booking" class="btn">Book a Session</a>
          </div>
        </div>
        
        <div class="service-card" data-aos="fade-up" data-aos-delay="200">
          <div class="service-card-content">
            <h3>Pre-Marital Coaching</h3>
            <p class="service-price">Starting at $450 (4 sessions)</p>
            <div class="service-features">
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Communication &amp; active listening</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Conflict resolution &amp; restorative dialogue</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Values &amp; relationship expectations</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Family &amp; cultural dynamics</span>
              </div>
            </div>
            <a href="#booking" class="btn">Book a Package</a>
          </div>
        </div>
        
        <div class="service-card" data-aos="fade-up" data-aos-delay="300">
          <div class="service-card-content">
            <h3>Wedding Officiating</h3>
            <p class="service-price">$250 - $500</p>
            <div class="service-features">
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Personalized ceremony script</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Assistance with crafting meaningful vows</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Professional officiation on your wedding day</span>
              </div>
              <div class="service-feature">
                <i class="fas fa-check"></i>
                <span>Marriage license signing &amp; documentation</span>
              </div>
            </div>
            <a href="#booking" class="btn">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section id="testimonials" class="testimonials section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h2>What Clients Say</h2>
        <p>Hear from individuals and couples who have experienced transformation through our coaching services.</p>
      </div>
      <div class="testimonial-grid">
        <div class="testimonial-card" data-aos="fade-up">
          <div class="testimonial-text">
            "Working with Danielle completely transformed how my partner and I communicate. We've developed tools to navigate conflict in a way that brings us closer rather than pushing us apart. Her restorative approach helped us break old patterns and build a stronger foundation."
          </div>
          <div class="testimonial-author">
            <div>
              <strong>Sarah &amp; Michael</strong>
              <div>Relationship Coaching</div>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card" data-aos="fade-up" data-aos-delay="100">
          <div class="testimonial-text">
            "The leadership coaching I received has profoundly changed how I approach my role as a team manager. Danielle taught me to lead with both accountability and compassion, resulting in improved team dynamics and a more positive work environment."
          </div>
          <div class="testimonial-author">
            <div>
              <strong>James K.</strong>
              <div>Leadership Coaching</div>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card" data-aos="fade-up" data-aos-delay="200">
          <div class="testimonial-text">
            "After facing a major life transition, I felt completely lost. Through Danielle's coaching, I developed clarity, confidence, and a renewed sense of purpose. Her guidance helped me transform what felt like an ending into a beautiful new beginning."
          </div>
          <div class="testimonial-author">
            <div>
              <strong>Rachel T.</strong>
              <div>Life Transitions Coaching</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Workshops Section -->
  <section id="workshops" class="workshops section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h2>Upcoming Workshops</h2>
        <p>Join our transformative group experiences focused on healing, growth, and connection.</p>
      </div>
      <div class="workshop-container">
        <div class="workshop-card" data-aos="fade-up">
          <div class="workshop-card-content">
            <span class="workshop-date">April 15, 2025 | 9:00 AM - 4:00 PM</span>
            <h3>Restorative Communication Workshop</h3>
            <p>A one-day immersive workshop focused on building effective communication skills through restorative practices.</p>
            <p><strong>What you'll learn:</strong></p>
            <ul>
              <li>Non-judgmental listening techniques</li>
              <li>"I feel" statements and constructive dialogue</li>
              <li>Conflict resolution strategies</li>
              <li>Building healthier, more open lines of communication</li>
            </ul>
            <p><strong>Location:</strong> Virtual via Zoom</p>
            <a href="#booking" class="btn">Register Now</a>
          </div>
        </div>
        
        <div class="workshop-card" data-aos="fade-up" data-aos-delay="100">
          <div class="workshop-card-content">
            <span class="workshop-date">May 20-22, 2025 | Weekend Retreat</span>
            <h3>Healing &amp; Empowerment Retreat</h3>
            <p>An immersive weekend retreat for individuals seeking personal growth and restoration.</p>
            <p><strong>Activities include:</strong></p>
            <ul>
              <li>Restorative circles for sharing and reflection</li>
              <li>Guided meditations and mindfulness practices</li>
              <li>Workshops on forgiveness and embracing self-love</li>
              <li>Building meaningful connections with like-minded individuals</li>
            </ul>
            <p><strong>Location:</strong> Serenity Retreat Center, Maryland</p>
            <a href="#booking" class="btn">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Certifications Section -->
  <section id="certifications" class="certifications section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h2>Certified and Trained By</h2>
        <p>Professional certifications and specialized training that enhance the quality of services provided.</p>
      </div>
      <div class="certification-container">
        <div class="certification-logos" data-aos="fade-up">
          <div class="certification-logo">
            <img src="IIRP_Logo_Blue.png" alt="Professional Certification" loading="lazy">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section id="faq" class="faq section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common questions about our coaching services and approach.</p>
      </div>
      <div class="faq-container">
        <div class="accordion-item" data-aos="fade-up">
          <div class="accordion-header">
            <h3>What is a Life Coach?</h3>
            <i class="fas fa-plus"></i>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>A Life Coach is trained to listen, to observe, and to customize their approach to each individual client's needs. Certified Life Coaches complete extensive training that teaches them how to ask the right questions, communicate effectively and get to the heart of your needs and desires in life. Coaching is not just limited to helping you achieve your personal or professional goals, it can be so much more.</p>
            </div>
          </div>
        </div>
        
        <div class="accordion-item" data-aos="fade-up" data-aos-delay="100">
          <div class="accordion-header">
            <h3>What is the difference between life coaching and therapy?</h3>
            <i class="fas fa-plus"></i>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p><strong>Life Coaching:</strong> Focuses on helping clients achieve specific goals, improve communication skills, and foster personal growth. It is goal-oriented, present and future-focused, and emphasizes actionable steps toward desired changes.</p>
              <p><strong>Therapy:</strong> Focuses on healing from past trauma, managing mental health conditions, and developing coping mechanisms. It is often past, present, and future-focused, using clinical techniques to address emotional distress, trauma, or mental health disorders.</p>
            </div>
          </div>
        </div>
        
        <div class="accordion-item" data-aos="fade-up" data-aos-delay="200">
          <div class="accordion-header">
            <h3>Can I do life coaching and therapy at the same time?</h3>
            <i class="fas fa-plus"></i>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>Yes! Many people benefit from both approaches simultaneously. Therapy addresses mental health needs and emotional healing, while coaching focuses on growth, accountability, and achieving personal or relational goals.</p>
            </div>
          </div>
        </div>
        
        <div class="accordion-item" data-aos="fade-up" data-aos-delay="300">
          <div class="accordion-header">
            <h3>How is restorative coaching different from traditional life coaching?</h3>
            <i class="fas fa-plus"></i>
          </div>
          <div class="accordion-content">
            <div class="accordion-content-inner">
              <p>Our approach focuses on meaningful conversations, deep accountability, and tools for lasting transformation. Unlike traditional coaching, we integrate restorative practices to not only inspire change but to rebuild trust, repair relationships, and foster lifelong personal and professional growth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Booking Section -->
  <section id="booking" class="booking section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h2>Book a Session</h2>
        <p>Take the first step toward transformation with a personalized coaching session.</p>
      </div>
      <div class="booking-container">
        <div class="booking-info" data-aos="fade-right">
          <h3>How It Works</h3>
          <ul>
            <li><i class="fas fa-check"></i> <span>Complete the booking form with your preferred session type and availability.</span></li>
            <li><i class="fas fa-check"></i> <span>Receive confirmation and pre-session materials via email.</span></li>
            <li><i class="fas fa-check"></i> <span>Attend your session via our secure virtual platform or in-person.</span></li>
            <li><i class="fas fa-check"></i> <span>Receive follow-up materials and next steps after your session.</span></li>
          </ul>
          
          <div class="pricing-box">
            <h4>Free 30 minute consultation</h4>
            <p>Curious about coaching and how we would work together? Schedule a free 30 minute consultation to explore your goals, ask questions, and experience the restorative approach firsthand. This no pressure conversation is an opportunity for you to share your story, learn about the coaching process, and see if Evolve Connection Coaching is the right fit for your journey.</p>
          </div>
          
          <div class="pricing-box">
            <h4>Fee Transparency &amp; Flexibility</h4>
            <p>I believe in providing clear, transparent pricing while making my services accessible. Start with a free 30-minute consultation to explore if we're a good fit. If you have questions about fees or need a customized payment plan, I'm happy to discuss flexible options.</p>
            <div class="pricing-item">
              <span>Free Consultation</span>
              <span>30 minutes</span>
            </div>
            <div class="pricing-item">
              <span>Individual Coaching</span>
              <span>$100 - $200</span>
            </div>
            <div class="pricing-item">
              <span>Relationship Coaching</span>
              <span>$120 - $250</span>
            </div>
            <div class="pricing-item">
              <span>Leadership Coaching</span>
              <span>$150 - $300</span>
            </div>
            <div class="pricing-item">
              <span>Pre-Marital Package (4 sessions)</span>
              <span>$450</span>
            </div>
          </div>
        </div>
        
        <div class="booking-form" data-aos="fade-left">
          <form action="#" method="POST">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" name="name" required="" autocomplete="name">
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" required="" autocomplete="email">
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" autocomplete="tel">
            </div>
            <div class="form-group">
              <label for="session-type">Session Type</label>
              <select id="session-type" name="session-type" required="">
                <option value="" selected="" disabled="">Select a Session Type</option>
                <option value="consultation">Free 30-Minute Consultation</option>
                <option value="individual">Individual Coaching</option>
                <option value="relationship">Relationship Coaching</option>
                <option value="transitions">Life Transitions Coaching</option>
                <option value="leadership">Leadership Coaching</option>
                <option value="premarital">Pre-Marital Coaching</option>
                <option value="wedding">Wedding Officiating</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Tell us about your goals</label>
              <textarea id="message" name="message" required=""></textarea>
            </div>
            <button type="submit" class="btn btn-full">Schedule Consultation</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Newsletter Section -->
  <section class="newsletter">
    <div class="container">
      <div class="newsletter-container">
        <h2>Join Our Community</h2>
        <p>Subscribe to our newsletter for relationship tips, workshop announcements, and exclusive content.</p>
        <form class="newsletter-form">
          <input type="email" placeholder="Your email address" required="">
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h2>Get in Touch</h2>
        <p>Have questions or need more information? Reach out directly through our contact form.</p>
      </div>
      <div class="contact-container">
        <div class="contact-info" data-aos="fade-right">
          <h3>Contact Information</h3>
          <div class="contact-method">
            <i class="fas fa-envelope"></i>
            <div>
              <p><strong>Email</strong></p>
              <p>evolveconnectioncoaching@gmail.com</p>
            </div>
          </div>
          <div class="contact-method">
            <i class="fas fa-phone-alt"></i>
            <div>
              <p><strong>Phone</strong></p>
              <p>(314) 814-3739</p>
            </div>
          </div>
          <div class="contact-method">
       
           
          </div>
          
        \
        </div>
        
        <div class="contact-form" data-aos="fade-left">
          <form action="#" method="POST">
            <div class="form-group">
              <label for="contact-name">Name</label>
              <input type="text" id="contact-name" name="contact-name" required="">
            </div>
            <div class="form-group">
              <label for="contact-email">Email</label>
              <input type="email" id="contact-email" name="contact-email" required="">
            </div>
            <div class="form-group">
              <label for="contact-subject">Subject</label>
              <input type="text" id="contact-subject" name="contact-subject" required="">
            </div>
            <div class="form-group">
              <label for="contact-message">Message</label>
              <textarea id="contact-message" name="contact-message" required=""></textarea>
            </div>
            <button type="submit" class="btn btn-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="footer-container">
        <div class="footer-about">
          <h3>Evolve | Connection Coaching</h3>
          <p>At Evolve | Connection Coaching, we believe that deep, meaningful connections are the foundation of growth, healing, and transformation.</p>
          <div class="footer-logo">
       
          </div>
        </div>
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#workshops">Workshops</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Individual Coaching</a></li>
            <li><a href="#services">Relationship Coaching</a></li>
            <li><a href="#services">Leadership Coaching</a></li>
            <li><a href="#services">Pre-Marital Coaching</a></li>
            <li><a href="#services">Wedding Officiating</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Evolve | Connection Coaching LLC. All rights reserved.</p>
      </div>
    </div>
  </footer>

</body></html>
