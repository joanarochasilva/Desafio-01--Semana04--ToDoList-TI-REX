
const form = document.querySelector('form')

form.addEventListener('focus', (e) => {
    document.querySelector('div.success-notification-container').style.display = 'none'

}, true)

form.addEventListener('submit', (e) => {

    const button = form.lastElementChild.id
    document.querySelectorAll('section.error-section').forEach(child => child.innerHTML = '')


    if(button === 'subscribe-button') {
        form.email.classList.remove('error')
        form.name_field.classList.remove('error')
    }
    else {
        form.email.classList.remove('error')
        form.password.classList.remove('error')
    }

    if(button === 'subscribe-button') subscription()
    else login()
    
    e.preventDefault()
})

function login() {

    const invalid = validationParameters()

    invalid ? validation(invalid) : window.location.replace('kanban.html')

}

function subscription() {
    
    const invalid = validationParameters()

    if(invalid) validation(invalid)
    else {
        toStorage()
        document.querySelector('div.success-notification-container').style.display = 'flex'
    }


}

function toStorage() {
    console.log(form.email.value)
    console.log(form.name_field.value)
    localStorage.setItem('email', form.email.value)
    localStorage.setItem('name', form.name_field.value)
}


function validationParameters() {

    let errors = {}
    let count = 0

    const emailValidation = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
    const formType = form.lastElementChild.id
    console.log(formType)


    if(form.email.value === '') {
        console.log('email vazio')
        errors.email = true
        count++
    } else if(!emailValidation.test(form.email.value)) {
        console.log('formato inválido')
        errors.invalid = true
        count++
    }

    

    if(formType === 'subscribe-button' && form?.name_field.value === '') {
        console.log('nome vazio')
        errors.name_field = true
        count++
    } else if(formType === 'login-button' && form?.password.value === '') {
        console.log('sem senha')
        errors.password = true
        count++
    } 

    console.log(errors)
    if(count > 0) return errors
    else return false
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
    
        if(section.childElementCount < 1) {
            const errorField = document.createElement('p')
            const errorFieldContent = document.createTextNode(message)
            const errorIcon = document.createElement('img')
            errorIcon.src = '../assets/attention.svg'
            errorField.appendChild(errorFieldContent)
            errorIcon.classList.add('errorIcon')
            errorField.style.color = 'rgba(255, 0, 0, 0.61)'
            errorField.style.fontSize = '0.875em'
            errorField.style.textWrap = 'wrap'
            section.appendChild(errorIcon)
            section.appendChild(errorField)
        
            field.classList.add(`error`)
        }
        
    })
}


