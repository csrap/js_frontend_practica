import ShowAnnouncement from './controllers/ShowAnnouncementController.js';

//ejecutar el DOM

window.addEventListener('DOMContentLoaded', function () {


  // Seleccionamos el nodo del button, aqui se tiene que colocar buton para que funcione
  const buttonAnnouncement = document.querySelector('.load');

  // Intanciar el controlador con el button
  const ButtonCtr = new ShowAnnouncement(buttonAnnouncement);
});
