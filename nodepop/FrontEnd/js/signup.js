import SignupController from "./controllers/SignupController.js"
import MessageCtrl from "./controllers/MessageCtrl.js"

window.addEventListener('DOMContentLoaded', function () {

    // 1. Seleccionamos el nodo 
    const form = document.querySelector('form')

    // 2.  Instaciar el Contralador 
    new SignupController(form)

    // 3. Seleccionamos el nodo para mostrar mensajes de error
    const messages = document.querySelector('.error-message')

    // // 4. Crear una instancia de ErrorMessageController
    new MessageCtrl(messages)

})
