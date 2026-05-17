/*==================== THEME TOGGLE (LIGHT/DARK) ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const moonIcon = 'ri-moon-line'
const sunIcon = 'ri-sun-line'

if (themeButton) {
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(sunIcon) ? moonIcon : sunIcon

    if (selectedTheme) {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    }

    themeButton.classList.remove(moonIcon, sunIcon)
    themeButton.classList.add(selectedIcon || (document.body.classList.contains(darkTheme) ? sunIcon : moonIcon))

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme)

        if (document.body.classList.contains(darkTheme)) {
            themeButton.classList.remove(moonIcon)
            themeButton.classList.add(sunIcon)
        } else {
            themeButton.classList.remove(sunIcon)
            themeButton.classList.add(moonIcon)
        }

        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')
        const sectionLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionLink ? .classList.add('active-link')
        } else {
            sectionLink ? .classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)