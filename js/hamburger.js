const openNav = document.querySelector('.open-nav')
const closeBtn = document.querySelector('.close')
const hamBg = document.querySelector('.hamburger')

hamBg.addEventListener('click', () =>{
    openNav.classList.add('display-allow')
})

closeBtn.addEventListener('click', () =>{
    openNav.classList.remove('display-allow')
})

