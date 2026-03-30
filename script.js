// script.js - Interactive behaviors

document.addEventListener("DOMContentLoaded", () => {
    // Reveal Elements on Scroll
    const reveals = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15, // trigger when 15% visible
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Offset for navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Interactive Code Terminal logic simulation
    const codeContent = document.querySelector('.code-content');
    if (codeContent) {
        setTimeout(() => {
            const p = document.createElement('p');
            p.className = 'code-success';
            p.style.opacity = '0';
            p.textContent = '> Agent Idle. Waiting for PR Webhook...';
            codeContent.appendChild(p);

            // Simple fade in effect
            let op = 0;
            const timer = setInterval(() => {
                if (op >= 1) clearInterval(timer);
                p.style.opacity = op;
                op += 0.1;
            }, 50);

        }, 3000);
    }
});
