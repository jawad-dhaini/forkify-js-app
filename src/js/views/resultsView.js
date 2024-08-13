import View from './View';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again.';
  _message = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);
    return this._data
      .map(
        res => `
      <li class="preview">
        <a class="preview__link ${
          res.id === id ? 'preview__link--active' : ''
        }" href="#${res.id}">
          <figure class="preview__fig">
            <img src="${res.image}" alt="${res.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${res.title}</h4>
            <p class="preview__publisher">${res.publisher}</p>
            <div class="preview__user-generated ${res.key ? '' : 'hidden'}">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>         
          </div>
        </a>
      </li>
      `
      )
      .join(' ');
  }
}

export default new ResultsView();
