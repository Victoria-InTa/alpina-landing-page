import '../css/main.css'


const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu')
const toggleLine = document.querySelector('.toggle__line')

toggle.addEventListener('click',()=>{
    toggle.classList.toggle('open')
    menu.classList.toggle('open')
})