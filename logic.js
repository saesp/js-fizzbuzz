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
    const element3 = `<div class="box box-${i % 3 === 0}">Fizz</div>`;
    const element5 = `<div class="box box-${i % 5 === 0}">Buzz</div>`;
    const element35 = `<div class="box box-${i % 3 === 0 && i % 5 === 0};">FizzBuzz</div>`;

    if (i % 3 === 0) {
        container.innerHTML += element3;
    } else if (i % 5 === 0) {
        container.innerHTML += element5;
    } else if (i % 3 === 0 && i % 5 === 0) {
        container.innerHTML += element35;
    } else {
        container.innerHTML += element;
    }
}