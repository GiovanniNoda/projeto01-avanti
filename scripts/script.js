const toggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.mobile-menu')

toggle.addEventListener('click', () => {
    menu.classList.toggle('active')
})

const searchForm = document.getElementById('search-form')

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