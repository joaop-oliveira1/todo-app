var header = document.querySelector('#header');
var menuOptions = document.querySelectorAll('.menu-option');
window.addEventListener('scroll', function() {
    try {
        if (window.scrollY > 100) addActiveClass(header, menuOptions);
        else if (window.scrollY < 100) removeActiveClass(header, menuOptions);
    } catch (error) {
        console.error(error);
    }
});
function addActiveClass(header1, menuOptions1) {
    header1.setAttribute('data-state', 'active');
    menuOptions1.forEach((menuOption)=>{
        menuOption.classList.add('active-menu-option');
    });
}
function removeActiveClass(header2, menuOptions2) {
    header2.setAttribute('data-state', 'inactive');
    menuOptions2.forEach((menuOption)=>{
        menuOption.setAttribute('data-state', 'active');
    });
}

//# sourceMappingURL=index.7afa73b1.js.map
