const toggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.mobile-menu')
const searchForm = document.getElementById('search-form')
const registerForm = document.getElementById('newsletter-form')
const nameInput = document.getElementById('name-input')
const emailInput = document.getElementById('email-input')
const agreeCheckbox = document.getElementById('agree-checkbox')

toggle.addEventListener('click', () => {
    menu.classList.toggle('active')
})


searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const searchTerm = searchForm.querySelector('input').value
    const searchResult = document.querySelector('.search-result')

    if (!searchTerm) {
        searchResult.textContent = ''
        return
    }
    searchResult.textContent = `Você procurou por "${searchTerm}"`
})

registerForm.addEventListener('submit', (event) => {
    event.preventDefault()
    alert('Cadastro feito com sucesso!')

    nameInput.value = ''
    emailInput.value = ''
    agreeCheckbox.checked = false
})