document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animations
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const overlay = document.querySelector('.overlay');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a');

  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  mobileMenuClose.addEventListener('click', closeMobileMenu);
  overlay.addEventListener('click', closeMobileMenu);
  
  mobileMenuLinks.forEach(function(link) {
    link.addEventListener('click', closeMobileMenu);
  });

  // Scroll to top button
  const scrollTopBtn = document.querySelector('.scroll-top');

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add('active');
    } else {
      scrollTopBtn.classList.remove('active');
    }
    
    // Header scroll effect
    const header = document.querySelector('.header');
    if (window.pageYOffset > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // FAQ accordion
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(function(item) {
    const header = item.querySelector('.accordion-header');
    
    header.addEventListener('click', function() {
      const isActive = item.classList.contains('active');
      
      // Close all accordion items
      accordionItems.forEach(function(accordionItem) {
        accordionItem.classList.remove('active');
      });
      
      // If the clicked item wasn't active, open it
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Form validation
  const forms = document.querySelectorAll('form');
  
  forms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      const requiredFields = form.querySelectorAll('[required]');
      
      requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      });
      
      if (isValid) {
        // Simulate form submission
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
        
        setTimeout(function() {
          submitButton.textContent = 'Thank you!';
          
          // Reset form
          form.reset();
          
          // Show success message
          const formWrapper = form.closest('.booking-form, .contact-form');
          if (formWrapper) {
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Your submission has been received. We\'ll be in touch soon!';
            formWrapper.appendChild(successMessage);
            
            // Remove success message after 5 seconds
            setTimeout(function() {
              successMessage.remove();
              submitButton.disabled = false;
              submitButton.textContent = originalText;
            }, 5000);
          }
        }, 1500);
      }
    });
  });

  // Add form field animations
  const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
  
  formInputs.forEach(function(input) {
    // Add focused class when input is focused
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    // Remove focused class when input loses focus
    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('focused');
      
      // Add filled class if input has value
      if (this.value.trim() !== '') {
        this.parentElement.classList.add('filled');
      } else {
        this.parentElement.classList.remove('filled');
      }
    });
    
    // Check if input has value on page load
    if (input.value.trim() !== '') {
      input.parentElement.classList.add('filled');
    }
  });

  // Fade in elements on scroll
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.section-header, .about-container, .services-grid, .testimonial-grid, .workshop-container, .faq-container, .booking-container, .contact-container');
    
    reveals.forEach(function(reveal) {
      const windowHeight = window.innerHeight;
      const revealTop = reveal.getBoundingClientRect().top;
      const revealPoint = 150;
      
      if (revealTop < windowHeight - revealPoint) {
        reveal.classList.add('revealed');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  
  // Trigger on page load
  revealOnScroll();

  // Add CSS styles for animations
  const style = document.createElement('style');
  style.textContent = `
    .section-header, .about-container, .services-grid, .testimonial-grid, .workshop-container, .faq-container, .booking-container, .contact-container {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .revealed {
      opacity: 1;
      transform: translateY(0);
    }
    
    .success-message {
      background-color: #e8ede5;
      color: #7a8c70;
      padding: 15px;
      margin-top: 20px;
      border-radius: 4px;
      text-align: center;
      font-weight: 500;
    }
    
    .form-group.focused label {
      color: var(--primary-color);
    }
    
    .form-group input.error, .form-group textarea.error, .form-group select.error {
      border-color: #e74c3c;
    }
  `;
  document.head.appendChild(style);
});