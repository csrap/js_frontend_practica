import DataService from '../services/DataService.js'
import { announcementView } from '../views.js'


export default class ShowAnnouncement {
  constructor(element) {
    this.element = element // <- Esto sera el buttonAnnouncements
    // this.addEvent()
  }
  async loadAnnouncements() {
    try {
      const announcements = await DataService.getAnnouncements()
      for (const announcement of announcements) {
        const announcementElement = document.createElement('h1')
        announcementElement.innerHTML = announcementView(announcement)
        this.element.appendChild(announcementElement)
      }
    } catch (error) {
      // this.errorMessageController.showError(error)
      console.log(error)
    }
  }
  // addEvent() {
  //   // agrego el evento al botón 
  //   this.element.addEventListener("click", e => {
  //     // console.log('User Click', e)
  //     this.loadAnnouncements()
  //   })
  // }
}