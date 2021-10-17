import PubSub from '../services/PubSub.js';
import { errorView, successView } from '../views.js';

export default class MessageCtrl {
  constructor(element) {
    this.element = element;

    // suscribo el controlador  a los events  que necesito.
    PubSub.subscribe(PubSub.events.SHOW_ERROR, (error) => {
      this.showError(error);
    })

    // suscribe to event success 
    PubSub.subscribe(PubSub.events.SHOW_SUCCESS, message => {
      this.showSucess(message)
    })



  }


  closedMessage() {
    const button = this.element.querySelector('button');
    button.addEventListener('click', () => {
      this.hideError();
    });
  }

  showSucess(message) {
    this.element.innerHTML = successView(message);
    this.closedMessage();

  }

  showError(message) {
    this.element.innerHTML = errorView(message);
    this.closedMessage();
  }

  hideError() {
    this.element.innerHTML = '';
  }
}
