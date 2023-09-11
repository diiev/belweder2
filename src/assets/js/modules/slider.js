import { tns } from "tiny-slider";

const slider = () => { 

    const mainSlider = tns({
        container: '.gifts__slider',
        items: 1,
        nav: true,
        navPosition: 'bottom',
        controls: false,
        mode: "gallery",
        autoplay: true,
        autoplayButtonOutput: false
        
    
    });
     

    const sliderPopular = tns({
        container: '#slider-popular',
        items: 1,
        nav: true,
        navPosition: 'bottom',
        controls: false, 
        controlsContainer: "#popular",
        loop: false,
        responsive: {
            390: {
                items: 2
            },
           
            1024: {
                items: 3
            },
            1180: {
                items: 4,
                controls: true,
                nav: false,
            }
          }
       
    });  

 
    const sliderLips = tns({
        container: '#slider-lips',
        items: 1,
        nav: true,
        navPosition: 'bottom',
        controls: false, 
        controlsContainer: "#lips",
        loop: false,
        responsive: {
            390: {
                items: 2
            },
           
            1024: {
                items: 3
            },
            1180: {
                items: 4, 
                controls: true,
                nav: false
                
            }
          }
       
    }); 



  
   
    const sliderFace = tns({
        container: '#slider-face',
        items: 1,
        nav: true,
        navPosition: 'bottom',
        controls: false, 
       controlsContainer: "#face",
        loop: false,
        responsive: {
            390: {
                items: 2
            },
           
            1024: {
                items: 3
            },
            1180: {
                items: 4,
                controls: true,
                nav: false
            }
          } 
       
    });  
  
   
    const sliderHands = tns({
        container: '#slider-hands',
        items: 1,
        nav: true,
        navPosition: 'bottom',
        controls: false,  
        controlsContainer: "#hands",
        loop: false,
        responsive: {
            390: {
                items: 2
            },
           
            1024: {
                items: 3
            },
            1180: {
                items: 4,
                controls: true,
                nav: false
            }
          }
       
    });   

   
  
   
    const sliderOffer = tns({
        container: '.offer__slider',
        items: 2,
        nav: true,
        navPosition: 'bottom',
        controls: false,  
        responsive: {
            1024: {
                items: 4
            }
          }
       
    });

};
export default slider;