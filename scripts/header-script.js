function renderHeaderLayout() {
    const headerContainer = document.getElementById('header-container')

    headerContainer.innerHTML = ''

    if (window.innerWidth < 768) {
        headerContainer.innerHTML = `
            <div class="header-content">
                <button class="menu-toggle">
                    <i class="ph ph-list"></i>
                </button>

                <img src="assets/logo.png" alt="Logo Avanti">

                <button class="cart-button">
                    <i class="ph ph-shopping-cart"></i>

                    <span>2</span>
                </button>
            </div>

            <form id="search-form">
                <input type="text" placeholder="Digite aqui o que você procura">

                <button><i class="ph ph-magnifying-glass"></i></button>
            </form>

            <p class="search-result"></p>
        `
    } else {
        headerContainer.innerHTML = `
            <p> Ola mundo </p>
        `
    }
} 

renderHeaderLayout()

window.addEventListener('resize', () => {
    renderHeaderLayout()
})