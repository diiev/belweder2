const menu = () => {
    function addPlus(selector) {
        const menuElem = document.querySelectorAll(selector);
        menuElem.forEach(item => {
            if (item.querySelector('ul')) {
                const span = document.createElement('span');
                span.classList.add('plus');
                item.querySelector('a').append(span);

            }
        });
    }
    function showMenu () {
        const burger = document.querySelector('.burger');
        const menu = document.querySelector('.menu');
        burger.addEventListener('click', ()=> {
                burger.classList.toggle('burger__active');
                menu.classList.toggle('menu__active');
                menu.classList.toggle('fade');
            
               
        });
    }
  
    function clickMenu() {
        const links = document.querySelectorAll('.menu a');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.querySelector('.plus')) {
                    e.preventDefault();
                    link.querySelector('.plus').classList.toggle('plus__active');
                    if (link.querySelector('.plus').classList.contains('plus__active')) {
                        link.parentNode.querySelector('ul').style.maxHeight = link.parentNode.querySelector('ul').scrollHeight + 80 + 'px';
                        link.parentNode.querySelector('ul').style.opacity = 1;
                        link.parentNode.querySelector('ul').style.visibility = 'visible';

                        link.style.color = '#706056';
                        link.style.fontWeight = '700';
                    }
                    else {
                        link.parentNode.querySelector('ul').style.maxHeight = '0px';
                        link.parentNode.querySelector('ul').style.opacity = 0;
                        link.parentNode.querySelector('ul').style.visibility = 'hidden';
                        link.style.color = '';
                        link.style.fontWeight = ''; 
                    
                    }

                }

            });
        });
    }
    addPlus('.menu__item');
    addPlus('.submenu__item');
    clickMenu();
    showMenu();
};

export default menu;