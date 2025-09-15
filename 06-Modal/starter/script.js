'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');
console.log('btnOpenModal');

const openModal= function {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEvenListener('click', openModal);
  
const closeModal = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  btnCloseMOdal.addEvenListener('click',closeModal);
  overlay.addEventListener('click',closeModal);

  document.addEventListener('keydown',function(e){
    if(e.key === 'Escape') {
        if(!modal.classList.conta(ins('hidden'))){
            closeModal();
        }
    }
  })