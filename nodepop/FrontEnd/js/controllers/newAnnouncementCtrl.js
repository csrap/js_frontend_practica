import PubSub from "../services/PubSub.js";
import DataService from "../services/DataService.js"

export default class newAnnouncementCtrl {

  constructor(element) {
    this.element = element;
    this.cathEventSumit();

  }

  cathEventSumit() {
    this.element.addEventListener('submit', async event => {
      event.preventDefault();

      if (this.element.checkValidity()) {
        const data = new FormData(this.element);
        const photo = data.get('photo')
        const name = data.get('name')
        const price = data.get('price')
        const saleOrbuy = data.get('saleOrbuy')

        try {
          const result = await DataService.createAnnouncement(photo, name, price, saleOrbuy);
          PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Announcement Create')
        } catch (error) {
          PubSub.publish(PubSub.events.SHOW_ERROR, error);
        }
      }
    })
  }
}