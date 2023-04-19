const menubtn =  document.querySelector("#open-menu-btn");
const closebtn =  document.querySelector("#close-menu-btn");
const menu =  document.querySelector(".nav-menu");

// OPEN NAV MENU
menubtn.addEventListener('click', () =>{
    menu.style.display = 'block';
    closebtn.style.display = 'inline-block';
    menubtn.style.display = 'none';
})

// CLOSE NAV MENU
const closenav = () =>{
    menu.style.display = 'none';
    closebtn.style.display = 'none';
    menubtn.style.display = 'inline-block';
}

closebtn.addEventListener('click', closenav);