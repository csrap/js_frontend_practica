import { announcementView } from '../views.js'
import DataService from '../services/DataService.js'
import PubSub from '../services/PubSub.js';


export default class AnnouncementController {

    constructor(element) {
        this.element = element
        // this.addEvent()
    }

    async loadAnnouncements() {
        PubSub.publish(PubSub.events.SHOW_LOADING)
        try {
            const announcements = await DataService.getAnnouncements()
            for (const announcement of announcements) {
                const announcementElement = document.createElement('article')
                announcementElement.innerHTML = announcementView(announcement)
                this.element.appendChild(announcementElement)
                PubSub.publish(PubSub.events.SHOW_SUCCESS, ' Welcome Nodepop, Load Correct')
            }
        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        } finally {
            PubSub.publish(PubSub.events.HIDE_LOADING)
        }
    }
}

