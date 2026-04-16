/* ========================================
   BFOLIO - Creative Portfolio Template
   JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    /* ========================================
       Magic Cursor
       ======================================== */
    const cursor = document.getElementById('ball');
    const links = document.querySelectorAll('a, button, input, textarea');
    
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
    
    if (cursor && !isTouchDevice) {
        document.body.classList.add('cursor-active');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            });
            
            link.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    }
    
    /* ========================================
       Sticky Header
       ======================================== */
    const header = document.getElementById('header-sticky');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
    
    /* ========================================
       Back to Top
       ======================================== */
    const backToTopBtn = document.getElementById('back_to_top');
    const backToTopWrapper = document.querySelector('.back-to-top-wrapper');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopWrapper.classList.add('active');
        } else {
            backToTopWrapper.classList.remove('active');
        }
    });
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    /* ========================================
       Smooth Scroll
       ======================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    /* ========================================
       Scroll Animations
       ======================================== */
    const animateElements = document.querySelectorAll('[data-animate]');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.getAttribute('data-delay') || '0';
                const animate = element.getAttribute('data-animate');
                
                setTimeout(() => {
                    element.classList.add(animate);
                }, parseFloat(delay) * 1000);
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    /* ========================================
       Counter Animation
       ======================================== */
    const counterElements = document.querySelectorAll('.tp-counter-number');
    let counterStarted = false;
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !counterStarted) {
                counterStarted = true;
                counterElements.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-count'));
                    const duration = 2000;
                    const step = target / (duration / 16);
                    let current = 0;
                    
                    const updateCounter = () => {
                        current += step;
                        if (current < target) {
                            counter.textContent = Math.floor(current) + '+';
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target + '+';
                        }
                    };
                    
                    updateCounter();
                });
            }
        });
    }, { threshold: 0.5 });
    
    const counterSection = document.querySelector('.tp-counter');
    if (counterSection) {
        counterObserver.observe(counterSection);
    }
    
    /* ========================================
       Skill Bar Animation
       ======================================== */
    const skillProgress = document.querySelectorAll('.tp-skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const width = progress.getAttribute('data-width');
                
                setTimeout(() => {
                    progress.style.width = width;
                }, 500);
                
                skillObserver.unobserve(progress);
            }
        });
    }, { threshold: 0.5 });
    
    skillProgress.forEach(progress => {
        skillObserver.observe(progress);
    });
    
    /* ========================================
       Mobile Menu Toggle
       ======================================== */
    const menuToggle = document.querySelector('.tp-menu-toggle');
    const navMenu = document.querySelector('.tp-nav-menu');
    const mainMenu = document.querySelector('.tp-main-menu');
    const backdrop = document.querySelector('.mobile-menu-backdrop');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            if (navMenu) {
                navMenu.classList.toggle('active');
            }
            if (mainMenu) {
                mainMenu.classList.toggle('active');
            }
            if (backdrop) {
                backdrop.classList.toggle('active');
            }
        });
    }
    
    if (backdrop) {
        backdrop.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (mainMenu) {
                mainMenu.classList.remove('active');
            }
            backdrop.classList.remove('active');
        });
    }
    
    document.querySelectorAll('.tp-nav-menu .nav-links').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (mainMenu) {
                mainMenu.classList.remove('active');
            }
            if (backdrop) {
                backdrop.classList.remove('active');
            }
        });
    });
    
    /* ========================================
       Portfolio Hover Effect
       ======================================== */
    // Hover effects handled via CSS only
    
    /* ========================================
       Contact Form - Telegram & Email Buttons
       ======================================== */
    const contactForm = document.getElementById('contactForm');
    const btnTelegram = document.getElementById('btnTelegram');
    const btnEmail = document.getElementById('btnEmail');
    const contactSuccess = document.getElementById('contactSuccess');
    
    if (contactForm && btnTelegram && btnEmail) {
        // Email validation regex
        const isValidEmail = (email) => {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        };
        
        // Show error on field
        const showError = (field, message) => {
            field.classList.add('error');
            const errorEl = field.parentElement.querySelector('.tp-form-error');
            if (errorEl) {
                errorEl.textContent = message;
            }
        };
        
        // Clear error from field
        const clearError = (field) => {
            field.classList.remove('error');
        };
        
        // Clear all errors
        const clearAllErrors = () => {
            const errorFields = contactForm.querySelectorAll('.error');
            errorFields.forEach(field => clearError(field));
            if (contactSuccess) {
                contactSuccess.classList.remove('show');
            }
        };
        
        // Validate required fields
        const validateForm = (channel) => {
            let isValid = true;
            clearAllErrors();
            
            const nameField = document.getElementById('contactName');
            const emailField = document.getElementById('contactEmail');
            const descField = document.getElementById('contactDescription');
            
            // Name is always required
            if (!nameField.value.trim()) {
                showError(nameField, 'Please enter your name');
                nameField.focus();
                isValid = false;
            }
            
            // Description is always required
            if (!descField.value.trim()) {
                showError(descField, 'Please describe your project');
                if (isValid) {
                    descField.focus();
                }
                isValid = false;
            }
            
            // Email is required only for "Send by Mail"
            if (channel === 'email') {
                if (!emailField.value.trim()) {
                    showError(emailField, 'Please enter your email address');
                    if (isValid) {
                        emailField.focus();
                    }
                    isValid = false;
                } else if (!isValidEmail(emailField.value.trim())) {
                    showError(emailField, 'Please enter a valid email address');
                    if (isValid) {
                        emailField.focus();
                    }
                    isValid = false;
                }
            }
            
            return isValid;
        };
        
        // Send data to API
        const sendFormData = async (channel) => {
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const description = document.getElementById('contactDescription').value.trim();
            
            const payload = {
                name: name,
                email: email || null,
                description: description,
                channel: channel,
                locale: document.documentElement.lang || 'en'
            };
            
            try {
                // For now, simulate API call (since we don't have the backend yet)
                console.log('Form data:', payload);
                
                // Show success message
                contactForm.reset();
                contactSuccess.classList.add('show');
                
                // Scroll to success message
                contactSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
                // Hide success after 5 seconds
                setTimeout(() => {
                    contactSuccess.classList.remove('show');
                }, 5000);
                
                // TODO: Uncomment when API is ready
                /*
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                
                if (response.ok) {
                    contactForm.reset();
                    contactSuccess.classList.add('show');
                    setTimeout(() => contactSuccess.classList.remove('show'), 5000);
                } else {
                    alert('Something went wrong. Please try again.');
                }
                */
            } catch (error) {
                console.error('Error:', error);
                alert('Something went wrong. Please try again.');
            }
        };
        
        // Telegram button click
        btnTelegram.addEventListener('click', () => {
            if (validateForm('telegram')) {
                sendFormData('telegram');
            }
        });
        
        // Email button click
        btnEmail.addEventListener('click', () => {
            if (validateForm('email')) {
                sendFormData('email');
            }
        });
        
        // Clear errors on input
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                clearError(input);
            });
        });
    }
    
    /* ========================================
       Preloader (Optional)
       ======================================== */
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });
    
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    /* ========================================
       Navbar Active Link on Scroll
       ======================================== */
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.tp-nav-menu a[href*=' + sectionId + ']')?.classList.add('active');
            }
        });
    });
    
    /* ========================================
       Hero Title Animation on Load
       ======================================== */
    const heroTitleLines = document.querySelectorAll('.tp-hero-title-line span');
    
    if (heroTitleLines.length > 0) {
        heroTitleLines.forEach((line, index) => {
            line.style.animationDelay = (index * 0.2) + 's';
            line.classList.add('slideUp');
        });
    }
    
    /* ========================================
       Service Box Hover Effect
       ======================================== */
    const serviceBoxes = document.querySelectorAll('.tp-service-box');
    
    serviceBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            serviceBoxes.forEach(b => {
                if (b !== box) {
                    b.style.opacity = '0.7';
                }
            });
        });
        
        box.addEventListener('mouseleave', () => {
            serviceBoxes.forEach(b => {
                b.style.opacity = '1';
            });
        });
    });
    
    /* ========================================
       Testimonial Slider (Simple)
       ======================================== */
    const testimonialBoxes = document.querySelectorAll('.tp-testimonial-box');
    
    // Auto-fade effect
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonialBoxes.forEach((box, i) => {
            box.style.opacity = i === index ? '1' : '0.5';
            box.style.transform = i === index ? 'scale(1)' : 'scale(0.95)';
            box.style.transition = 'all 0.5s ease';
        });
    }
    
    if (testimonialBoxes.length > 0) {
        showTestimonial(currentTestimonial);
        
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonialBoxes.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }
    
    /* ========================================
       Parallax Effect (Subtle) - TEMPORARILY DISABLED FOR TEST
       ======================================== */
    // const heroShapes = document.querySelectorAll('.tp-hero-shape');
    // 
    // window.addEventListener('scroll', () => {
    //     const scrollY = window.scrollY;
    //     
    //     heroShapes.forEach((shape, index) => {
    //         const speed = 0.1 + (index * 0.05);
    //         shape.style.transform = `translateY(${scrollY * speed}px)`;
    //     });
    // });
    
    /* ========================================
       Reveal Animation on Scroll
       ======================================== */
    const revealElements = document.querySelectorAll('.tp-service-box, .tp-testimonial-box');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        revealObserver.observe(el);
    });
    
    /* ========================================
       FAQ Accordion
       ======================================== */
    const faqItems = document.querySelectorAll('.faq-accordion-item');
    
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-accordion-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            faqItems.forEach(i => {
                i.classList.remove('active');
                const icon = i.querySelector('.faq-accordion-icon i');
                if (icon) icon.className = 'fas fa-plus';
            });
            
            if (!isActive) {
                item.classList.add('active');
                const icon = item.querySelector('.faq-accordion-icon i');
                if (icon) icon.className = 'fas fa-minus';
            }
        });
    });
    
    /* ========================================
       Initialize
       ======================================== */
    console.log('BFOLIO Portfolio Template Loaded Successfully');
    
});
