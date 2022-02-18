let i = 3;

while (i) {
  alert( i-- );
}

let i = 3;

alert(i--); // выведет 3, затем уменьшит i до 2

alert(i--) // выведет 2, затем уменьшит i до 1

alert(i--) // выведет 1, затем уменьшит i до 0

// все, проверка while(i) не даст выполняться циклу дальше

let i = 0;
while (++i < 5) alert( i );

// до 4

let i = 0;
while (i++ < 5) alert( i );

// до 5

for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }


let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);


