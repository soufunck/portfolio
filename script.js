// Troca o tema
const themeToggle = document.getElementById('theme-toggle'),
  themeContainer = document.getElementById('theme-container'),
  htmlElement = document.documentElement;

function updateTheme(isDark) {
  if (isDark) {
    htmlElement.setAttribute('data-theme', 'dark');
    themeContainer.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    localStorage.setItem('theme', 'dark');
  } else {
    htmlElement.removeAttribute('data-theme');
    themeContainer.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    localStorage.setItem('theme', 'light');
  }
}

themeToggle.addEventListener('click', () => {
  const isDark = htmlElement.getAttribute('data-theme') === 'dark';
  updateTheme(!isDark);
});

window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    updateTheme(true);
  }
});

// Scroll da foto do projects_card
document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.projects_card');

  projectCards.forEach(card => {
    const scrollBtn = card.querySelector('.scroll');
    const cardBg = card.querySelector('.card_bg');

    if (!scrollBtn || !cardBg) return;

    scrollBtn.addEventListener('click', () => {
      scrollBtn.disabled = true;
      const estaAtivo = cardBg.classList.toggle('ativo');
      scrollBtn.innerText = estaAtivo ? "rolando..." : "voltando...";
    });

    cardBg.addEventListener('transitionend', () => {
      scrollBtn.disabled = false;
      if (cardBg.classList.contains('ativo')) {
        scrollBtn.innerText = "voltar imagem";
      } else {
        scrollBtn.innerText = "rolar imagem";
      }
    });
  });
});

// Efeito na transição de IDs
document.addEventListener('click', function (e) {
  // Verifica se o clique foi em um link (tag <a>)
  const target = e.target.closest('a');

  if (target && target.getAttribute('href')) {
    const href = target.getAttribute('href');

    // Verifica se o link começa com "#" (indicando um ID interno)
    if (href.startsWith('#')) {
      e.preventDefault();

      if (href === '#') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // Se for um ID específico (ex: #projetos), busca o elemento e rola até ele
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }
  }
});
