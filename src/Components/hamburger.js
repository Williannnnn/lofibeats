const hamburgerDiv = document.querySelector('.header__hamburger')
const hamburger = document.querySelector('.header__hamburger input')
const mobileNavigation = document.querySelector('.mobile-navigation')

hamburgerDiv.addEventListener('click', function () {
    const [hamburgerInput] = this.children

    mobileNavigation.style.right = hamburgerInput.checked ? '0px' : '-100%'

    document.body.style.overflowY =
        mobileNavigation.style.right === '0px' ? 'hidden' : 'auto'

    var scrollTopIntervalId = setInterval(() => {
        scrollY === 0
            ? clearInterval(scrollTopIntervalId)
            : scrollTo(0, scrollY - 1)
    }, 1)
})

document.addEventListener('DOMContentLoaded', () => {
    hamburger.checked = false

    mobileNavigation.style.right = '-100%'

    document.body.style.overflowX = 'hidden'
    document.body.style.overflowY = 'auto'
})
