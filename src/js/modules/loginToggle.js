// Получаем ссылки
const signUpLink = document.querySelector('.btn__login.login-up');
const loginLink = document.querySelector('.btn__login.login-in');

// Добавляем обработчики событий на ссылки
signUpLink.addEventListener('click', () => toggleActiveClass(signUpLink));
loginLink.addEventListener('click', () => toggleActiveClass(loginLink));

// Функция для переключения класса "active"
export function toggleActiveClass(element) {
  event.preventDefault(); // Предотвращаем стандартное поведение ссылки

  // Проверяем, существует ли элемент и определен ли он
  if (element && element.classList) {
    // Удаляем класс "active" у другой ссылки
    if (element === signUpLink) {
      loginLink.classList.remove('active');
    } else if (element === loginLink) {
      signUpLink.classList.remove('active');
    }

    // Добавляем или удаляем класс "active" на текущей ссылке
    element.classList.toggle('active');
  }
}
// !
// Получаем ссылки
const signUpLinkFooter = document.querySelector('.btn__login-footer.login-up-footer');
const loginLinkFooter = document.querySelector('.btn__login-footer.login-in-footer');

// Добавляем обработчики событий на ссылки
signUpLinkFooter.addEventListener('click', () => toggleActiveClassFooter(signUpLinkFooter));
loginLinkFooter.addEventListener('click', () => toggleActiveClassFooter(loginLinkFooter));

// Функция для переключения класса "active"
export function toggleActiveClassFooter(element) {
  event.preventDefault(); // Предотвращаем стандартное поведение ссылки

  // Проверяем, существует ли элемент и определен ли он
  if (element && element.classList) {
    // Удаляем класс "active" у другой ссылки
    if (element === signUpLinkFooter) {
      loginLinkFooter.classList.remove('activeFooter');
    } else if (element === loginLinkFooter) {
      signUpLinkFooter.classList.remove('activeFooter');
    }

    // Добавляем или удаляем класс "active" на текущей ссылке
    element.classList.toggle('activeFooter');
  }
}
// !
