import newAnnouncementCtrl from "./controllers/newAnnouncementCtrl.js"
import MessageCtrl from "./controllers/MessageCtrl.js"
import DataService from "./services/DataService.js"

window.addEventListener('DOMContentLoaded', function () {

  if (DataService.ConfirmIsAuthenticed() === false) {
    window.location.href = '/login.html?next=/newAnnouncement.html'
  }

  // 1. Seleccionamos el nodo 
  const form = document.querySelector('form')

  // 2.  Instaciar el Contralador 
  new newAnnouncementCtrl(form)

  // 3. Seleccionamos el nodo para mostrar mensajes de error
  const messages = document.querySelector('.messages')

  // // 4. Crear una instancia de ErrorMessageController
  new MessageCtrl(messages)

})
