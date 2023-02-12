'use strict';

console.log('1. +10\n2. +20\n3. +48\n4. +12\n5. +20');

//burger
const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.burger');
const itemMenu = document.querySelectorAll('.header__link');

const body = document.body;

if(menu && burger) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('active__menu');
    burger.classList.toggle('active');
    body.classList.toggle('lock');
  });
}

itemMenu.forEach((e) => {
  e.addEventListener('click', () => {
    if(burger.classList.contains('active')) {
      menu.classList.remove('active__menu');
      burger.classList.remove('active');
      body.classList.remove('lock');
    }
  });
});



//blur

const itemCardBlur = document.querySelectorAll('.body__item');

const cardGardens = document.querySelectorAll('#gardens');
const cardPlanting = document.querySelectorAll('#planting');
const cardLawn = document.querySelectorAll('#lawn');


const gardensBtn = document.querySelector('#gardens-btn');
const lawnBtn = document.querySelector('#lawn-btn');
const plantingBtn = document.querySelector('#planting-btn');

const btnService = document.querySelectorAll('.btn__service');

let gardensH = 0;
let lawnH = 0;
let plantingH = 0;
function blur() {
  gardensBtn.addEventListener('click', () => {
    if (lawnH == 1 && plantingH == 1) {
      return;
    }
    if(gardensH == 1){
      gardensH = 0;
      gardensBtn.classList.remove('_active-services');

    }else {
      gardensBtn.classList.add('_active-services');
      gardensH = 1;
    }
    if(lawnH == 1) {
      cardGardens.forEach((e) => {
        if(e.classList.contains('show')){
          e.classList.add('blur');
          e.classList.remove('show');
        } else {
          e.classList.add('show');
          e.classList.remove('blur');
        }
      });
    } else if(plantingH == 1) {
      cardGardens.forEach((e) => {
        if(e.classList.contains('show')){
          e.classList.add('blur');
          e.classList.remove('show');
        } else {
          e.classList.add('show');
          e.classList.remove('blur');
        }
      });
    } else {
      cardPlanting.forEach((e) => {
        if(e.classList.contains('show')){
          e.classList.add('blur');
          e.classList.remove('show');
        } else {
          e.classList.add('show');
          e.classList.remove('blur');
        }
      });
      cardLawn.forEach((e) => {
        if(e.classList.contains('show')){
          e.classList.add('blur');
          e.classList.remove('show');
        } else {
          e.classList.add('show');
          e.classList.remove('blur');
        }
      });
    }
  })
  lawnBtn.addEventListener('click', () => {
    if(gardensH == 1 && plantingH == 1){
      return;
    }
    if(lawnH == 1){
      lawnBtn.classList.remove('_active-services');
      lawnH = 0;
    }else {
      lawnH = 1;
      lawnBtn.classList.add('_active-services');
    }
    if(gardensH == 1) {
      cardLawn.forEach((e) => {
        if(e.classList.contains('show')){
          e.classList.add('blur');
          e.classList.remove('show');
        } else {
          e.classList.add('show');
          e.classList.remove('blur');
        }
      });
    } else if(plantingH == 1) {
      cardLawn.forEach((e) => {
        if(e.classList.contains('show')){
          e.classList.add('blur');
          e.classList.remove('show');
        } else {
          e.classList.add('show');
          e.classList.remove('blur');
        }
      });
    } else {
      cardPlanting.forEach((e) => {
        if(e.classList.contains('show')){
          e.classList.add('blur');
          e.classList.remove('show');
        } else {
          e.classList.add('show');
          e.classList.remove('blur');
        }
      });
      cardGardens.forEach((e) => {
        if(e.classList.contains('show')){
          e.classList.add('blur');
          e.classList.remove('show');
        } else {
          e.classList.add('show');
          e.classList.remove('blur');
        }
      });
    }
  })
  plantingBtn.addEventListener('click', () => {
    if(gardensH == 1 && lawnH == 1){
      return;
    }
    if(plantingH == 1){
      plantingBtn.classList.remove('_active-services');
      plantingH = 0;
    }else {
      plantingH = 1;
      plantingBtn.classList.add('_active-services');
    }
    if(gardensH == 1) {
      cardPlanting.forEach((e) => {
        if(e.classList.contains('show')){
          e.classList.add('blur');
          e.classList.remove('show');
        } else {
          e.classList.add('show');
          e.classList.remove('blur');
        }
      });
    } else if(lawnH == 1) {
      cardPlanting.forEach((e) => {
        if(e.classList.contains('show')){
          e.classList.add('blur');
          e.classList.remove('show');
        } else {
          e.classList.add('show');
          e.classList.remove('blur');
        }
      });
    } else {
      cardLawn.forEach((e) => {
        if(e.classList.contains('show')){
          e.classList.add('blur');
          e.classList.remove('show');
        } else {
          e.classList.add('show');
          e.classList.remove('blur');
        }
      });
      cardGardens.forEach((e) => {
        if(e.classList.contains('show')){
          e.classList.add('blur');

      e.classList.remove('show');
        } else {
          e.classList.add('show');
          e.classList.remove('blur');
        }
      });
    }
  })
}

blur();

//accordion

const accordionBtn = document.querySelectorAll('.accordion__btn');
const accordionContent = document.querySelectorAll('.content');


function accordionShow() {
  accordionBtn.forEach((e) => {
    e.addEventListener('click', () => {

      accordionBtn.forEach((e) => {
        e.classList.remove('_active');
      });

      let content = e.nextElementSibling;
  
      if(content.style.maxHeight) {
        document.querySelectorAll('.content').forEach((e) => e.style.maxHeight = null);
      } else {
        document.querySelectorAll('.content').forEach((e) => e.style.maxHeight = null);
        content.style.maxHeight = content.scrollHeight + 'px';
        e.classList.add('_active');
      }
    });
  });
}

accordionShow();


//select

let selectHeader = document.querySelectorAll('.select__header');
let selectItem = document.querySelectorAll('.select__item');

selectHeader.forEach((e) => {
  e.addEventListener('click', function () {
    this.parentElement.classList.toggle('is-active');
  });
});

selectItem.forEach((e) => {
  e.addEventListener('click', selectChoose);
});

function selectChoose() {
  let text = this.innerText;
  let currentText = this.closest('.select').querySelector('.select__current');
  let select = this.closest('.select');
  currentText.innerText = text;
  select.classList.remove('is-active');
}

//select значение

const cananBtn = document.querySelector('#Canan');
const newYorkBtn = document.querySelector('#NewYork');
const yonkersBtn = document.querySelector('#Yonkers');
const sherrillBtn = document.querySelector('#Sherrill');

const cityItem = document.querySelector('#city');
const officeItem = document.querySelector('#office');
const adressItem = document.querySelector('#adress');

const tableActive = document.querySelector('.contact__info-table');

const imgHide = document.querySelector('.contacts__img');
const selectHeaderColor = document.querySelector('.select__header');

const numbCall = document.querySelector('.numbCall');



function callNumbContact() {
  let phoneNumber = Number(officeItem.textContent.replace(/ /g,''));
  numbCall.setAttribute('href', 'tel:' + phoneNumber);
}


function cananAdd () {
  cananBtn.addEventListener('click', () => {
    cityItem.innerHTML = 'Canandaigua, NY';
    officeItem.innerHTML = '+1 585 393 0001';
    adressItem.innerHTML = '151 Charlotte Street';
    tableActive.classList.add('contact__active');
    imgHide.classList.add('hide');
    selectHeaderColor.classList.add('color__active');
    callNumbContact();
  });
}


function newYorkAdd () {
  newYorkBtn.addEventListener('click', () => {
    cityItem.innerHTML = 'New York City';
    officeItem.innerHTML = '+1 212 456 0002';
    adressItem.innerHTML = '9 East 91st Street';
    tableActive.classList.add('contact__active');
    imgHide.classList.add('hide');
    selectHeaderColor.classList.add('color__active');
    callNumbContact();
  });
}


function yonkersAdd () {
  yonkersBtn.addEventListener('click', () => {
    cityItem.innerHTML = 'Yonkers, NY';
    officeItem.innerHTML = '+1 914 678 0003';
    adressItem.innerHTML = '511 Warburton Ave';
    tableActive.classList.add('contact__active');
    imgHide.classList.add('hide');
    selectHeaderColor.classList.add('color__active');
    callNumbContact();
  });
}


function sherrillAdd () {
  sherrillBtn.addEventListener('click', () => {
    cityItem.innerHTML = 'Sherrill, NY';
    officeItem.innerHTML = '+1 315 908 0004';
    adressItem.innerHTML = '14 WEST Noyes BLVD';
    tableActive.classList.add('contact__active');
    imgHide.classList.add('hide');
    selectHeaderColor.classList.add('color__active');
    callNumbContact();
  });
}

cananAdd ();
newYorkAdd ();
yonkersAdd ();
sherrillAdd ();