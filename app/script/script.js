
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    const button = form.lastElementChild
    
    button.id === 'subscribe-button' ? console.log(button.id) : console.log('deu ruim')

    e.preventDefault()
})

function validation() {

    let errors = {}
    const emailValidation = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i


    if(form.email.value === '') {
        console.log('email vazio')
        errors.emptyEmail = true
    } 

    if(form?.name_field.value === '') {
        console.log('nome vazio')
        errors.emptyEmail = true
    } else if(form?.password.value === '') {
        console.log('sem senha')
        errors.emptyPassword === true
    }

    if(!emailValidation.test(form.email.value)) {
        console.log('formato inválido')
        errors.invalid = true
    } 

    return errors
}

function subscription() {

    let valid = validation()

    if(valid) {
        
    }
}

function errorStyle() {
    
}


