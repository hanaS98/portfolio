let menu = document.getElementById('background');
let menuClicked = document.querySelector('.menu-burger');
let menuList = document.querySelector('.list ul');

menuClicked.onclick=()=>{
    if(menu.style.display==="block"){
        menu.style.display="none";
        menuList.classList.remove('open');
        menuClicked.classList.remove('active');
    }else{
        menu.style.display="block";
        menuList.classList.add('open');
        menuClicked.classList.add('active');
    }
}