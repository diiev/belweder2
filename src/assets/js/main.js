import menu from "./modules/menu";
import slider from "./modules/slider";
import tabs from "./modules/tabs";
import card from "./modules/card";
import scrolling from "./modules/scrolling";
import modals from "./modules/modal";
import Form from "./modules/forms";

document.addEventListener('DOMContentLoaded', ()=> {
    'use strict';
   try   {
    menu();
    slider();
    tabs('.musthave__tabs', '.musthave__tab', '.musthave .musthave__slider-wrapper', 'musthave__tab-active', 'block');
    card();
    scrolling ('.btn_up');
    modals();
   new Form('#call-form', 'Мы свяжемся с вами в ближайшие 30 минут').init();
   new Form('.consultaion__form', 'Мы свяжемся с вами в ближайшие 30 минут', 'flex').init();
   new Form('.footer__form', 'Вы получили скидку 15% на первый заказ! Код в вашем почтовом ящике.').init();
   }
   catch (e) {}

   

});