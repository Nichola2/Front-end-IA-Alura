const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const setToggleState = (isDark) => {
  themeToggle.setAttribute('aria-pressed', String(isDark));
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem('netflixTheme');
  const isDark = savedTheme === 'dark';
  if (isDark) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
  setToggleState(isDark);
};

const toggleTheme = () => {
  const isDark = body.classList.toggle('dark');
  localStorage.setItem('netflixTheme', isDark ? 'dark' : 'light');
  setToggleState(isDark);
};

const saveActiveProfile = (name, image) => {
  if (!name || !image) return;
  localStorage.setItem('perfilAtivoNome', name);
  localStorage.setItem('perfilAtivoImagem', image);
};

const bindProfileCards = () => {
  const profileLinks = document.querySelectorAll('.profile');
  profileLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const profileName = link.querySelector('figcaption')?.textContent?.trim();
      const profileImage = link.querySelector('img')?.getAttribute('src');
      saveActiveProfile(profileName, profileImage);
      const href = link.getAttribute('href');
      if (href && href !== '#') {
        window.location.href = href;
      }
    });
  });
};

themeToggle.addEventListener('click', toggleTheme);
loadTheme();
bindProfileCards();