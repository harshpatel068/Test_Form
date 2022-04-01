const Uname = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if(Uname.value === '' || Uname.value === null){
        messages.push('Name is required')
    }

    if(password.value.length > 8){
        messages.push('The password must be less than 8 characters.')
    }

    if(password.value.length < 5){
        messages.push('The password must be longer than 5 characters.')
    }

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})