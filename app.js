const menu = document.getElementById('menu');
const list = document.querySelector('.list');
const closeBtn = document.querySelector('.fa-times');
const li_el = list.querySelectorAll('li');


menu.addEventListener('click',()=>{
    list.classList.toggle('active')
    menu.classList.toggle('fa-times')
})


li_el.forEach(item=>{
    item.addEventListener('click',()=>{
        list.classList.remove('active')
        menu.classList.toggle('fa-times')
    })
})