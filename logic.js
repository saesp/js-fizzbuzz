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
    const element3 = `<div class="box box-div3">Fizz</div>`;
    const element5 = `<div class="box box-div5">Buzz</div>`;
    const element35 = `<div class="box box-div35;">FizzBuzz</div>`;

    if (i % 3 === 0 && i % 5 === 0) {
        container.innerHTML += element35;
        const element35Sec = "FizzBuzz";
        console.log(element35Sec);
    } else if (i % 5 === 0) {
        container.innerHTML += element5;
        const element5Sec = "Buzz";
        console.log(element5Sec);
    } else if (i % 3 === 0) {
        container.innerHTML += element3;
        const element3Sec = "Fizz";
        console.log(element3Sec);
    } else {
        container.innerHTML += element;
        const elementSec = i;
        console.log(elementSec);
    }
}