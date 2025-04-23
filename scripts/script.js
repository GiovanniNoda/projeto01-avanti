const registerForm = document.getElementById('newsletter-form')
const nameInput = document.getElementById('name-input')
const emailInput = document.getElementById('email-input')
const agreeCheckbox = document.getElementById('agree-checkbox')
const categories = document.querySelectorAll('.category')

// user register form

registerForm.addEventListener('submit', (event) => {
    event.preventDefault()
    alert('Cadastro feito com sucesso!')

    nameInput.value = ''
    emailInput.value = ''
    agreeCheckbox.checked = false
})

// subtitles animation

categories.forEach(category => {
    category.addEventListener('click', () => {
        category.classList.toggle('open')
    })
})