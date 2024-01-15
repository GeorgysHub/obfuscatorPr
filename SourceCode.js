// Пример 1: Сумма чисел от 1 до 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log('Сумма чисел от 1 до 10:', sum);

// Пример 2: Проверка на четность
function isEven(number) {
  return number % 2 === 0;
}
console.log('Число 5 четное?', isEven(5));

// Пример 3: Факториал числа 5
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log('Факториал числа 5:', factorial(5));

// Пример 4: Поиск максимального элемента в массиве
const numbers = [3, 1, 8, 4, 6, 2];
let maxNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}
console.log('Максимальный элемент в массиве:', maxNumber);