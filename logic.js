// stampare numeri da 1 a 100

// fizz miltipli 3
  // i % 3 === 0

// buzz miltipli 5
  // i % 5 === 0

// FizzBuzz miltipli 3 e 5
  // i % 3 && 5 === 0

const container = document.querySelector("div.container");

for (let i = 0; i < 101; i++){
    const element = `<div class="box box-${i}">${i}</div>`;
    container.innerHTML += element;

    if (i % 3 === 0) {
        element 
    } else if (i % 5 === 0) {

    } else if (i % 3 === 0 && i % 5 === 0) {

    } else () {

    }
}