const card = () => {

    function showActionPrice () {
       const action = document.querySelectorAll('.card__action'),
             prices = document.querySelectorAll('.card__price');
        action.forEach(item => {
        if (item.textContent == '') {
            item.style.display = 'none';
        }
       
        });
        prices.forEach(price => {
          if (price.querySelector('.card__price-old').textContent != '') {
                 price.querySelector('.card__price-new').style.color = 'red';
          }
        });
    }

    function showImage() {
        const cards = document.querySelectorAll('.card');
      
        cards.forEach(card => {
          const cardImg = card.querySelector('img').src,
            cardnewImg = card.querySelector('img').getAttribute('data-src'),
             imgElement = card.querySelector('img');
          let startTime, progress;
      
          function animate() {
            progress = (Date.now() - startTime) / 100; 
            progress = Math.min(progress, 1); 
      
            imgElement.style.cssText = `opacity: ${progress}`; 
      
            if (progress < 1) {
              requestAnimationFrame(animate); 
            }
          }
      
          card.addEventListener('mouseenter', () => {
            if (cardnewImg != null) {
              startTime = Date.now();
              imgElement.src = cardnewImg;
           //   animate();
            }
          });
      
          card.addEventListener('mouseleave', () => {
            if (cardnewImg != null) {
            startTime = Date.now();
            imgElement.src = cardImg;
         //   animate();
            }
          });
        
        });
      }
    showActionPrice();
    showImage();
};
export default card;


