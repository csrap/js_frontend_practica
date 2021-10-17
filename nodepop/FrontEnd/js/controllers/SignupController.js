import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js"

export default class SignupController {

    constructor(element) {
        this.element = element
        this.cathEventSumit()

    }

    confirmPasswordEqual() {
        const inputsPassword = this.element.querySelectorAll('input[type="password"]')
        let passwords = []
        for (const input of inputsPassword) {
            if (passwords.includes(input.value) === false) {
                passwords.push(input.value)
            }
        }
        if (passwords.length == 1) {
            for (const input of inputsPassword) {
                input.setCustomValidity('')
            }
        } else {
            for (const input of inputsPassword) {
                input.setCustomValidity('Passwords are not the Same')
            }
        }

    }

    cathEventSumit() {
        // capturar el evento submit para validar formulario

        this.element.addEventListener('submit', async function (event) {
            // evitar que el formulario se envie, para poder validar lo que el usuario escribe
            event.preventDefault()
            // validación del formulario 
            if (this.checkValidity()) {
                try {
                    const data = new FormData(this)
                    const username = data.get('username').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') // valor del input[name="username"]
                    const password = data.get('password').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') // valor del input[name="password"]
                    const result = await DataService.registerUser(username, password)
                    PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Registered Successfully')
                } catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                }
            } else {
                let errorMessage = ''
                for (const element of this.elements) {
                    if (element.validity.valid === false) {
                        errorMessage += `Error en el campo ${element.name}: ${element.validationMessage} `
                    }
                }
                PubSub.publish(PubSub.events.SHOW_ERROR, errorMessage)
            }

        })

        // personalizo los password tipo input 
        this.element.querySelectorAll('input[type="password"]').forEach(input => {
            input.addEventListener('input', () => {
                this.confirmPasswordEqual()
            })
        })


        this.element.querySelectorAll('input').forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                if (this.element.checkValidity()) {
                    this.element.querySelector('button').removeAttribute('disabled')
                } else {
                    this.element.querySelector('button').setAttribute('disabled', true)
                }
            })
        })

    }

}
