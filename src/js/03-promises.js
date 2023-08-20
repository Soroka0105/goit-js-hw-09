import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const timeDelay = document.querySelector('input[name="delay"]');
const timeStep = document.querySelector('input[name="step"]');
const repeatAmount = document.querySelector('input[name="amount"]');
let promise;

function submit(evt) {
  evt.preventDefault();
  let delay = Number(timeDelay.value);
  const step = Number(timeStep.value);
  const amount = Number(repeatAmount.value);
  let position;
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay);
    delay += step;
  }
}

function createPromise(position, delay) {
  // position = Number(elements.amount.value);

  const shouldResolve = Math.random() > 0.3;
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

form.addEventListener('submit', submit);
