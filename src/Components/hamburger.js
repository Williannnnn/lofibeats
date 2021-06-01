const hamburger = document.querySelector('.header__hamburger')
const mobileNavigation = document.querySelector('.mobile-navigation')

hamburger.addEventListener('click', function() {
    const [hamburgerInput] = this.children

    mobileNavigation.style.right = hamburgerInput.checked ? '0' : '-100%' 
})
