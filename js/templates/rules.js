import getElementFromTemplate from '../getElementFromTemplate.js';
import setActiveScreen from '../setActiveScreen.js';
import header from '../blocks/header.js';
import game1 from './game1.js';
import greeting from './greeting.js';

export default function rules() {
  const node = getElementFromTemplate(`
    ${header()}
    <div class="rules">
      <h1 class="rules__title">Правила</h1>
      <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
        src="img/photo_icon.png" width="16" height="16"> или рисунок <img
        src="img/paint_icon.png" width="16" height="16" alt="">.<br>
        Фотографиями или рисунками могут быть оба изображения.<br>
        На каждую попытку отводится 30 секунд.<br>
        Ошибиться можно не более 3 раз.<br>
        <br>
        Готовы?
      </p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>
  `);

  const backButton = node.querySelector(`.header__back`);
  const continueButton = node.querySelector(`.rules__button`);
  const nameInput = node.querySelector(`.rules__input`);

  nameInput.addEventListener(`input`, () => {
    continueButton.disabled = nameInput.value.length === 0;
  });

  backButton.addEventListener(`click`, () => {
    setActiveScreen(greeting());
  });

  continueButton.addEventListener(`click`, () => {
    setActiveScreen(game1());
  });

  return node;
}
