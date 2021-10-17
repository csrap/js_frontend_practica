import AnnouncementController from './controllers/AnnouncementController.js'
import ShowAnnouncement from './controllers/ShowAnnouncementController.js'
import LoadingController from './controllers/LoadingController.js';
import MessageCtrl from './controllers/MessageCtrl.js'

window.addEventListener('DOMContentLoaded', function () {
  // Obtener el elemento desde el DOM(html)
  const annoucementList = document.querySelector('.announcement')

  // crear un controlador pasándole el elemento del DOM donde cargar los anuncios
  const annoucementController = new AnnouncementController(annoucementList)

  annoucementController.loadAnnouncements()

  //Pintar los anuncios
  const buttonAnnouncement = document.querySelector('.load');

  // Intanciar el controlador con el button
  const ButtonCtr = new ShowAnnouncement(buttonAnnouncement);

  //pinto el mensaje por no tener anuncios el usuari 
  const messages = document.querySelector('.welcome')
  //Intancial de no tener anuncios 
  new MessageCtrl(messages)


  const loadingDiv = document.querySelector('.loader')
  new LoadingController(loadingDiv)





})
