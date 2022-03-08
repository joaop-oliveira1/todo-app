var header = document.querySelector('#header');
var menuOptions = document.querySelectorAll('.menu-option')

window.addEventListener('scroll', function(){
    try {
        if(window.scrollY > 100){
            addActiveClass(header, menuOptions);
        } else if(window.scrollY < 100){
            removeActiveClass(header, menuOptions);
        }
    } catch (error) {
        console.error(error);
    }
});

function addActiveClass(header, menuOptions){
    header.setAttribute('data-state', 'active');
    menuOptions.forEach(menuOption => {
        menuOption.classList.add('active-menu-option');
    });
};

function removeActiveClass(header, menuOptions){
    header.setAttribute('data-state', 'inactive');
    menuOptions.forEach(menuOption => {
        menuOption.setAttribute('data-state', 'active');
    });
};