const modals = () => {
    let btnPressed;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');


        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                btnPressed = true;
                if (destroy) {
                    item.remove();
                }
                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fade')
                });
                
                document.body.style.overflow = 'hidden';
                document.body.style.paddingRight = '17px';
                modal.style.display = 'block';
              

            });
        });
        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';

            });
           
            document.body.style.paddingRight = '0px';
            modal.style.display = 'none';
            document.body.style.overflow = '';
          

        });

        modal.addEventListener('click', (e) => {

            if (e.target === modal) {
                windows.forEach(item => {
                    item.style.display = 'none';
                }); 
              
                document.body.style.paddingRight = '0px';
                document.body.style.overflow = '';
                modal.style.display = 'none';
              
            }
        })
    };




    bindModal('.contacts__btn', '.popup__call', '.popup__close');
    bindModal('.footer__btn', '.popup__call', '.popup__close');


};
export default modals;