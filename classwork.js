// Создаем пустой массив
let numbers = [];

// Заполняем массив 10 числами
for (let i = 1; i <= 10; i++) {
  numbers.push(i);
}

// Умножаем каждое четное число на 2
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    numbers[i] *= 2;
  }
}

// Выводим результат
console.log(numbers);