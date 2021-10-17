import { announcementDetailView } from '../views.js'
import DataService from '../services/DataService.js'
import PubSub from "../services/PubSub.js"




export default class announcementDetailCtlr {

  constructor(element, announcementiD) {
    this.element = element
    this.loadAnnouncementDetail(announcementiD)

  }

  async loadAnnouncementDetail(announcementiD) {

    PubSub.publish(PubSub.events.SHOW_LOADING)
    try {
      const announcement = await DataService.getAnnouncementDetail(announcementiD)
      this.element.innerHTML = announcementDetailView(announcement)
      this.buttonDeleteEvent(announcement)
      PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Detail Ads, load ok')
    } catch (error) {
      PubSub.publish(PubSub.events.SHOW_ERROR, error)
    } finally {
      PubSub.publish(PubSub.events.HIDE_LOADING)
    }
  }
  buttonDeleteEvent(announcement) {
    const button = this.element.querySelector('button')
    if (button) {
      button.addEventListener('click', async () => {
        const answer = confirm('¿Are you sure delete Ans?')
        if (answer === true) {
          PubSub.publish(PubSub.events.SHOW_LOADING)
          try {
            await DataService.deleteAnnouncement(announcement.id)
            window.location.href = '/'
          } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
          } finally {
            PubSub.publish(PubSub.events.HIDE_LOADING)
          }
        }
      })
    }
  }
}