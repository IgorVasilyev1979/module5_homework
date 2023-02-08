let value = +prompt("Введите число");
if ((typeof value != 'number') || (isNaN(value))) {
    console.log("Упс, кажется, вы ошиблись");
} else if (!isFinite(value)) {
    console.log("Infinity");
}
  else if (value % 2 == 0) {
    console.log("Чётное");
} else {
    console.log("Нечётное");
}