// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Render all content
    renderHero();
    renderAbout();
    renderSkills();
    renderProjects();
    renderFooter();
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation classes on scroll
    function initAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('[data-aos]').forEach(el => {
            observer.observe(el);
        });
    }


    window.addEventListener('scroll', initAnimations);
    initAnimations(); // Run once on load
});

// Render Functions
function renderHero() {
    document.getElementById('hero-title').textContent = portfolioData.hero.title;
    document.getElementById('hero-subtitle').textContent = portfolioData.hero.subtitle;
    document.getElementById('hero-description').textContent = portfolioData.hero.description;
}

function renderAbout() {
    document.getElementById('about-text-1').textContent = portfolioData.about.text1;
    document.getElementById('about-text-2').textContent = portfolioData.about.text2;
}

function renderSkills() {
    const container = document.getElementById('skills-container');

    portfolioData.skills.forEach(skill => {
        const skillHTML = `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center p-4">
                        <i class="bi ${skill.icon} text-primary mb-3" style="font-size: 2rem;"></i>
                        <h5>${skill.category}</h5>
                        <ul class="list-unstyled mt-3">
                            ${skill.items.map(item => `<li class="mb-2">${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += skillHTML;
    });
}

function renderProjects() {
    const container = document.getElementById('projects-container');

    portfolioData.projects.forEach(project => {
        const projectHTML = `
            <div class="col-md-6 mb-4">
                <div class="card h-100">
                    <a href="${project.link}" class="text-decoration-none text-dark">
                        <div class="card-body p-4">
                            <h5>${project.title}</h5>
                            <p class="text-muted small mt-3">${project.description}</p>
                            <div class="mt-3">
                                ${project.tags.map(tag => `<span class="badge bg-light text-dark me-2 mb-2">${tag}</span>`).join('')}
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        `;
        container.innerHTML += projectHTML;
    });
}

function renderFooter() {
    document.getElementById('footer-text').textContent = portfolioData.footer.text;
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = this;
    const messageDiv = document.getElementById('form-message');
    const submitText = document.getElementById('submit-text');
    const submitSpinner = document.getElementById('submit-spinner');

    // Mostrar spinner e desativar botão
    submitText.textContent = 'Sending...';
    submitSpinner.classList.remove('d-none');
    form.querySelector('button[type="submit"]').disabled = true;

    // Resetar mensagem anterior
    messageDiv.classList.remove('show', 'alert-success', 'alert-danger');

    emailjs.sendForm('service_vgwl5r6', 'template_akiwqid', form)
        .then(function() {
            // Sucesso - mostrar mensagem customizada
            showMessage(
                '✅ Message sent successfully! I will contact you soon.',
                'success'
            );

            // Resetar formulário
            form.reset();
        }, function(error) {
            // Erro - mostrar mensagem customizada
            showMessage(
                '❌ Error sending message. Please try again or contact me directly at your@email.com',
                'danger'
            );
        })
        .finally(function() {
            // Restaurar botão
            submitText.textContent = 'Send Message';
            submitSpinner.classList.add('d-none');
            form.querySelector('button[type="submit"]').disabled = false;
        });
});

function showMessage(text, type) {
    const messageDiv = document.getElementById('form-message');
    alert('Mensagem Enviada!')
    messageDiv.textContent = text;
    messageDiv.classList.add('show', `alert-${type}`);

    // Esconder mensagem após 5 segundos
    setTimeout(() => {
        messageDiv.classList.remove('show');
    }, 10000);
}
