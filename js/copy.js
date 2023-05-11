const currentYear = new Date().getFullYear();
const copyrightElement = document.querySelector('#copyright');
const appTitle = 'Gorjeta';

copyrightElement.innerHTML =
  `&copy; ${currentYear} ${appTitle}`;
