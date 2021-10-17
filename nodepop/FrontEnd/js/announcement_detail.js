import announcementDetailCtlr from './controllers/announcementDetailCtrl.js'
import LoadingController from './controllers/LoadingController.js'
import MessageCtrl from './controllers/MessageCtrl.js'



window.addEventListener('DOMContentLoaded', function () {

  const loaderDiv = document.querySelector('.loader-ring')
  new LoadingController(loaderDiv)
  //  get id of announcements 
  const id = new URLSearchParams(window.location.search).get('id')

  // Intanciar el controlador con el button
  const announcementdetail = document.querySelector('.announcementdetail');
  new announcementDetailCtlr(announcementdetail, id);

  const messages = document.querySelector('.welcome')
  //Intancial de no tener anuncios 
  new MessageCtrl(messages)


});
