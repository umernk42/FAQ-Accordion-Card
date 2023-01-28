const acc = document.getElementsByClassName('accordion-item');
const answer = document.getElementsByClassName('accordion-answer');
const question = document.getElementsByClassName('accordion-question');
const arrows = document.getElementsByClassName('arrow-icon');


for(let i = 0; i < acc.length; i++){
  acc[i].addEventListener('click',(e) => {
    answer[i].classList.toggle('show');
    question[i].classList.toggle('bold');
    arrows[i].classList.toggle('rotate');
  });
}

