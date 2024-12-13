
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    const button = form.lastElementChild
    
    button.id === 'subscribe-button' ? console.log(button.id) : console.log('deu ruim')

    e.preventDefault()
})


function subscription() {
    
    const invalid = validationParameters()

    if(invalid) {
    validation(invalid)
}




}

function validationParameters() {

    let errors = {}
    const emailValidation = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
    const formType = form.lastElementChild.id


    if(form.email.value === '') {
        console.log('email vazio')
        errors.email = true
    } else if(!emailValidation.test(form.email.value)) {
        console.log('formato inválido')
        errors.invalid = true
    }

    

    if(formType === 'subscribe-button' && form?.name_field.value === '') {
        console.log('nome vazio')
        errors.name_field = true
    } else if(formType === 'login-button' && form.password.value === '') {
        console.log('sem senha')
        errors.password === true
    } else  {
        
    }


    return errors
}



function validation(invalid) {

    Object.keys(invalid).forEach(key => {
    
        let field 
        let section
        let message
    
        if(key === 'name_field') {
            field = form.name_field
            section = document.querySelector(`form section#form-enter-name section.error-section`)
            message = 'Por favor, digite o seu nome.'        
        }
        else if(key === 'password') {
            field = form.password
            section = document.querySelector(`form section#form-enter-password section.error-section`)
            message = 'Por favor, digite sua senha.'
        }
        
    
        if(key === 'invalid') {
            field = form.email
            section = document.querySelector(`form section#form-enter-email section.error-section`)
            message = 'Por favor, digite um endereço de e-mail válido.'
    
        } else if(key === `email`) {
            field = form.email
            section = document.querySelector(`form section#form-enter-email section.error-section`)
            message = 'Por favor, digite um endereço de e-mail.'
        }
    
    
        const errorField = document.createElement('p')
        const errorFieldContent = document.createTextNode(message)
        const errorIcon = document.createElement('img')
        errorIcon.src = '../assets/attention.svg'
        errorField.appendChild(errorFieldContent)
        errorIcon.classList.add('errorIcon')
        errorField.style.color = 'rgba(255, 0, 0, 0.61)'
        errorField.style.fontSize = '14px'
        section.appendChild(errorIcon)
        section.appendChild(errorField)
    
        field.classList.add(`error`)
        
    })
}

const invalid = validationParameters()

if(invalid) {
validation(invalid)

}

