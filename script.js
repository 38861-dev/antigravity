/**
 * PORTFÓLIO PESSOAL — VICTOR HUGO
 * Script Principal (Vanilla JS)
 * Navegação, menu mobile, filtros de projetos, cópia interativa e validação.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. CONFIGURAÇÕES PESSOAIS (Fácil personalização para o Victor)
     ========================================================================== */
  const USER_CONFIG = {
    nome: 'Victor Hugo',
    emailPadrao: 'seuemail@exemplo.com', // Substitua pelo seu e-mail real
    githubUrl: 'https://github.com/SEU_USUARIO', // Substitua pelo seu usuário
    linkedinUrl: 'https://linkedin.com/in/SEU_USUARIO' // Substitua pelo seu LinkedIn
  };

  // Atualizar ano automaticamente no rodapé
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  /* ==========================================================================
     2. MENU MOBILE & ACESSIBILIDADE
     ========================================================================== */
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const navBackdrop = document.getElementById('nav-backdrop');
  const navLinks = document.querySelectorAll('.nav-link');

  function openMobileMenu() {
    mobileToggle.classList.add('is-active');
    mobileToggle.setAttribute('aria-expanded', 'true');
    primaryNav.classList.add('is-open');
    navBackdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden'; // Evita scroll do fundo
  }

  function closeMobileMenu() {
    mobileToggle.classList.remove('is-active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    primaryNav.classList.remove('is-open');
    navBackdrop.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMobileMenu);
  }

  // Fechar menu ao clicar em qualquer link de navegação
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (primaryNav.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });
  });

  // Fechar menu mobile ao pressionar ESC
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && primaryNav.classList.contains('is-open')) {
      closeMobileMenu();
      mobileToggle.focus();
    }
  });

  /* ==========================================================================
     3. SCROLL SPY (Destaque do link ativo na Navbar)
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 120; // Offset do cabeçalho

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink(); // Chamada inicial

  /* ==========================================================================
     4. FILTRO DE PROJETOS POR CATEGORIA
     ========================================================================== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Atualizar botões
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      const filterValue = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('is-hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  /* ==========================================================================
     5. CÓPIA DO CÓDIGO JSON NO HERO
     ========================================================================== */
  const btnCopyCode = document.getElementById('btn-copy-code');
  const copyCodeText = document.getElementById('copy-code-text');

  if (btnCopyCode) {
    btnCopyCode.addEventListener('click', async () => {
      const codeBlock = document.querySelector('.code-block code');
      if (!codeBlock) return;

      const codeToCopy = codeBlock.innerText;

      try {
        await navigator.clipboard.writeText(codeToCopy);
        const originalText = copyCodeText.textContent;
        copyCodeText.textContent = 'Copiado!';
        btnCopyCode.style.color = 'var(--accent-emerald)';
        btnCopyCode.style.borderColor = 'var(--accent-emerald)';

        setTimeout(() => {
          copyCodeText.textContent = originalText;
          btnCopyCode.style.color = '';
          btnCopyCode.style.borderColor = '';
        }, 2000);
      } catch (err) {
        console.warn('Não foi possível copiar automaticamente:', err);
      }
    });
  }

  /* ==========================================================================
     6. CÓPIA RÁPIDA DE E-MAIL
     ========================================================================== */
  const cardEmail = document.getElementById('card-email');
  const btnCopyEmail = document.getElementById('btn-copy-email');
  const emailAddressText = document.getElementById('email-address-text');
  const copyEmailLabel = document.getElementById('copy-email-label');

  async function handleCopyEmail() {
    const emailToCopy = emailAddressText ? emailAddressText.textContent.trim() : USER_CONFIG.emailPadrao;

    try {
      await navigator.clipboard.writeText(emailToCopy);
      if (copyEmailLabel) {
        const originalText = copyEmailLabel.textContent;
        copyEmailLabel.textContent = 'Copiado!';
        
        setTimeout(() => {
          copyEmailLabel.textContent = originalText;
        }, 2200);
      }
    } catch (err) {
      // Fallback simples caso a API de Clipboard esteja restrita
      const tempInput = document.createElement('input');
      tempInput.value = emailToCopy;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      
      if (copyEmailLabel) {
        copyEmailLabel.textContent = 'Copiado!';
        setTimeout(() => {
          copyEmailLabel.textContent = 'Copiar';
        }, 2200);
      }
    }
  }

  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', (e) => {
      e.stopPropagation();
      handleCopyEmail();
    });
  }

  if (cardEmail) {
    cardEmail.addEventListener('click', handleCopyEmail);
  }

  /* ==========================================================================
     7. FORMULÁRIO DE CONTATO (Validação e envio via mailto)
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      let isValid = true;

      // Elementos
      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const subjectInput = document.getElementById('form-subject');
      const messageInput = document.getElementById('form-message');

      // Validar Nome
      if (!nameInput.value.trim()) {
        setError(nameInput, true);
        isValid = false;
      } else {
        setError(nameInput, false);
      }

      // Validar E-mail com Regex simples
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        setError(emailInput, true);
        isValid = false;
      } else {
        setError(emailInput, false);
      }

      // Validar Assunto
      if (!subjectInput.value.trim()) {
        setError(subjectInput, true);
        isValid = false;
      } else {
        setError(subjectInput, false);
      }

      // Validar Mensagem
      if (!messageInput.value.trim()) {
        setError(messageInput, true);
        isValid = false;
      } else {
        setError(messageInput, false);
      }

      if (!isValid) return;

      // Construção do link mailto
      const targetEmail = emailAddressText ? emailAddressText.textContent.trim() : USER_CONFIG.emailPadrao;
      const subjectEncoded = encodeURIComponent(`[Portfólio] ${subjectInput.value.trim()}`);
      const bodyEncoded = encodeURIComponent(
        `Olá Victor,\n\nMeu nome é ${nameInput.value.trim()} (${emailInput.value.trim()}).\n\nMensagem:\n${messageInput.value.trim()}\n\n---\nEnviado através do formulário do portfólio.`
      );

      const mailtoLink = `mailto:${targetEmail}?subject=${subjectEncoded}&body=${bodyEncoded}`;

      // Exibir feedback positivo
      if (formFeedback) {
        formFeedback.className = 'form-feedback success';
        formFeedback.textContent = 'Mensagem validada! Abrindo seu programa de e-mail para confirmação do envio...';
      }

      // Abre o cliente de e-mail do usuário
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 400);
    });
  }

  function setError(inputElement, hasError) {
    const formGroup = inputElement.closest('.form-group');
    if (!formGroup) return;

    if (hasError) {
      formGroup.classList.add('has-error');
    } else {
      formGroup.classList.remove('has-error');
    }
  }

  // Limpar erro ao digitar
  const formInputs = document.querySelectorAll('.form-input, .form-textarea');
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      setError(input, false);
      if (formFeedback) {
        formFeedback.style.display = 'none';
      }
    });
  });

});
