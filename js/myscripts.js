let menu = document.getElementById('background');
let menuClicked = document.querySelector('.menu-burger');
let menuList = document.querySelector('.list ul');
let darkMode = document.querySelector('.darkMode');
let lightMode = document.querySelector('.lightMode');

let header = document.querySelector(".header");
let ulLis = document.querySelectorAll(".list ul li");
let ulLisA = document.querySelectorAll(".list ul li a");
let ulLisI = document.querySelectorAll(".list ul li i");
let burgerColor = document.querySelectorAll('.menu-burger span');
let landingBg = document.querySelector('.landingBG');
let landingHeader = document.querySelector('.landingContent .text h1');
let landingPar = document.querySelector('.landingContent .text p');
let title = document.querySelectorAll('.title');
let shadow = document.querySelectorAll('.skill-box');
let projectBG = document.querySelector('.project');
let projectCard = document.querySelectorAll('.card');
let projectCardHeader = document.querySelectorAll('.card .text h2');
let projectCardPar = document.querySelectorAll('.card .text p');
let cardTextLinks = document.querySelectorAll('.card .text .links a i');
let footer = document.querySelector('.footer');

let arabic = document.querySelector('.list .Ar');
let english = document.querySelector('.list .Eng');
let myContainer = document.querySelector('.myContainer');

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

darkMode.onclick=()=>{
    darkMode.style.display='none';
    lightMode.style.display='block';
    document.body.style.backgroundColor = 'var(--dark-header-BG)';
    header.style.backgroundColor = 'var(--dark-header-BG)';
    for(let a = 0 ; a<ulLisA.length;a++){
        ulLisA[a].style.color = 'var(--dark-main-color)';
    }
    for(let i = 0 ; i<ulLisI.length;i++){
        ulLisI[i].style.color = 'var(--dark-main-color)';
    }
    for(let b = 0 ; b<burgerColor.length;b++){
        burgerColor[b].style.backgroundColor = 'var(--dark-main-color)';
    }
    menuList.style.backgroundColor = 'var(--dark-header-BG)';
    
    landingBg.style.backgroundColor = 'var(--dark-header-BG)';
    landingBg.style.borderBottom = '4px solid #373737';
    landingHeader.style.color = 'var(--dark-main-color)';
    landingPar.style.color = '#e1e1e1';
    for(let t = 0 ; t<title.length;t++){
        title[t].style.color = 'var(--dark-main-color)';
    }
    for(let s = 0 ; s<shadow.length;s++){
        shadow[s].style.boxShadow = 'none';
        shadow[s].style.backgroundColor = '#3b3b3b';
    }
    projectBG.style.backgroundColor = 'var(--dark-header-BG)';
    projectBG.style.borderTop = '4px solid #373737';
    for(let p =0 ; p<projectCard.length;p++){
        projectCard[p].style.backgroundColor = '#3b3b3b';
    }
    for(let pH = 0; pH<projectCardHeader.length;pH++){
        projectCardHeader[pH].style.color = 'var(--dark-main-color)';
    }
    for(let pcp = 0 ; pcp<projectCardPar.length;pcp++){
        projectCardPar[pcp].style.color = '#ccc';
    }
    for(let ctl= 0 ; ctl<cardTextLinks.length;ctl++){
        cardTextLinks[ctl].style.color='var(--dark-main-color)';
    }
    footer.style.backgroundColor ='var(--dark-header-BG)';
    footer.style.borderTop = '1px solid #ccc';
    menuList.style.borderTopColor='#2c2c2c';
    for(let ul=0; ul<ulLis.length;ul++){
        ulLis[ul].style.color ='var(--dark-main-color)';
    }
}

lightMode.onclick=()=>{
    lightMode.style.display='none';
    darkMode.style.display='block';
    document.body.style.backgroundColor = 'var(--light-header-BG)';
    header.style.backgroundColor = 'var(--light-header-BG)';
    for(let a = 0 ; a<ulLisA.length;a++){
        ulLisA[a].style.color = 'var(--light-main-color)';
    }
    for(let i = 0 ; i<ulLisI.length;i++){
        ulLisI[i].style.color = 'var(--light-main-color)';
    }
    for(let b = 0 ; b<burgerColor.length;b++){
        burgerColor[b].style.backgroundColor = 'var(--light-main-color)';
    }
    menuList.style.backgroundColor = 'var(--light-header-BG)';
    landingBg.style.backgroundColor = 'var(--light-landing-BG)';
    landingHeader.style.color = 'var(--light-main-color)';
    landingPar.style.color = '#5E5E5E';
    for(let t = 0 ; t<title.length;t++){
        title[t].style.color = 'var(--light-main-color)';
    }
    for(let s = 0 ; s<shadow.length;s++){
        shadow[s].style.boxShadow = '0 0 15px 0 #b1cec8';
        shadow[s].style.backgroundColor = 'white';
    }
    projectBG.style.backgroundColor = 'var(--light-landing-BG)';
    for(let p =0 ; p<projectCard.length;p++){
        projectCard[p].style.backgroundColor = 'white';
    }
    for(let pH = 0; pH<projectCardHeader.length;pH++){
        projectCardHeader[pH].style.color = 'var(--light-main-color)';
    }
    for(let pcp = 0 ; pcp<projectCardPar.length;pcp++){
        projectCardPar[pcp].style.color = '#232121';
    }
    for(let ctl= 0 ; ctl<cardTextLinks.length;ctl++){
        cardTextLinks[ctl].style.color='var(--light-main-color)';
    }
    footer.style.backgroundColor ='#002a21';
    footer.style.borderTop = 'none';
    landingBg.style.borderBottom = 'none';
    projectBG.style.borderTop = 'none';
    menuList.style.borderTopColor='white';
    for(let ul=0; ul<ulLis.length;ul++){
        ulLis[ul].style.color ='var(--light-main-color)';
    }
}


arabic.onclick=()=>{
    arabic.style.display='none';
    english.style.display='block';
    document.head.setAttribute("lang","ar");
    document.head.setAttribute("dir","rtl");
    menuList.classList.add('arb');
    myContainer.classList.add('arb');
    menuClicked.classList.add('arb');
    for(let a=0; a<ulLisA.length;a++){
        if(ulLisA[a].innerHTML === 'HOME'){
            ulLisA[a].innerHTML = 'الرئيسية';
        }
        if(ulLisA[a].innerHTML === 'SKILLS'){
            ulLisA[a].innerHTML = 'المهارات';
        }
        if(ulLisA[a].innerHTML === 'PROJECTS'){
            ulLisA[a].innerHTML = 'المشاريع';
        }
    }
    for(let b=0;b<ulLis.length;b++){
        ulLis[b].style.marginRight = "30px";
        ulLis[b].style.marginLeft = "0";
    }
    landingHeader.innerHTML = "أهلاً,أنا هناء";
}

english.onclick=()=>{
    english.style.display='none';
    arabic.style.display='block';
    document.head.setAttribute("lang","en");
    document.head.setAttribute("dir","ltr");
    menuList.classList.remove('arb');
    myContainer.classList.remove('arb');
    menuClicked.classList.remove('arb');
    for(let a=0; a<ulLisA.length;a++){
    if(ulLisA[a].innerHTML === 'الرئيسية'){
        ulLisA[a].innerHTML = 'HOME';
    }
    if(ulLisA[a].innerHTML === 'المهارات'){
        ulLisA[a].innerHTML = 'SKILLS';
    }
    if(ulLisA[a].innerHTML === 'المشاريع'){
        ulLisA[a].innerHTML = 'PROJECTS';
    }
    }
    for(let b=0;b<ulLis.length;b++){
        ulLis[b].style.marginRight = "0";
        ulLis[b].style.marginLeft = "30px";
    }
    landingHeader.innerHTML = "Hello, I'm Hana.";
}