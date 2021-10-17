import loginCtrl from "./controllers/loginCtrl.js"
import MessageCtrl from "./controllers/MessageCtrl.js"


window.addEventListener('DOMContentLoaded', function () {

  const form = document.querySelector('form')
  new loginCtrl(form)


  const messages = document.querySelector('.error-message')
  new MessageCtrl(messages)




})
