import { getData } from "../service/service.js"

const modalBasketWrapper = document.querySelector('#modal_basket');
const modalBasketClose = document.querySelector('.modal__basket_close');
const modalBashetOpen = document.querySelector('.header__basket');

const urlProductPath = 'https://64ca4856700d50e3c704a330.mockapi.io/product';

getData(urlProductPath)
    .then(products => {
        console.log(products);
    })

function toggleBasketModal(){
    modalBasketWrapper.classList.toggle('modal__hide');
    if (modalBasketWrapper.classList.contains('modal__hide')){
        document.body.style.overflow = '';
    } else {
        document.body.style.overflow = 'hidden';
    }
};

modalBashetOpen.addEventListener('click', toggleBasketModal);
modalBasketClose.addEventListener('click', toggleBasketModal);

modalBasketWrapper.addEventListener('click', (e) => {
    if (e.target === modalBasketWrapper){
        toggleBasketModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape'){
        if (!modalBasketWrapper.classList.contains('modal__hide')){
        modalBasketWrapper.classList.add('modal__hide');    
        }
    }
});