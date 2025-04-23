function renderHeaderLayout() {
    const headerContainer = document.getElementById('header-container')

    headerContainer.innerHTML = ''

    if (window.innerWidth < 1024) {
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
            <div class="header-content">
                <img src="assets/logo.png" alt="Logo Avanti">

                <form id="search-form">
                    <input type="text" placeholder="Digite aqui o que você procura">
    
                    <button><i class="ph ph-magnifying-glass"></i></button>
                </form>

                <div class="user-info">
                    <i class="ph ph-user"></i>

                    <div class="user-name">
                        <span>Olá,</span>
                        <span>Giovanni Noda!</span>
                    </div>
                </div>

                <button class="cart-button">
                    <i class="ph ph-shopping-cart"></i>

                    <span>2</span>
                </button>
            </div>

            <p class="search-result"></p>

            <ul class="menu-desktop">
                <li>
                    <button class="menu-toggle">
                        <i class="ph ph-list"></i>
                        <span>Todas as Categorias</span>
                    </button>
                </li>

                <li>
                    <a href="#">Departamento</a>
                </li>

                <li>
                    <a href="#">Departamento</a>
                </li>

                <li>
                    <a href="#">Departamento</a>
                </li>

                <li>
                    <a href="#">Departamento</a>
                </li>

                <li>
                    <a href="#">Departamento</a>
                </li>
                
                <li>
                    <a href="#">Departamento</a>
                </li>
            </ul>
        `
    }
} 

renderHeaderLayout()

window.addEventListener('resize', () => {
    renderHeaderLayout()
})