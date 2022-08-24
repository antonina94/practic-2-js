
// Завдання 4. Дано три числа. 1. Знайти більше серед перших двох чисел, maxAB
// 2. Знайти найбільше серед всіх трьох чисел, maxABC
// 3. Знайти число, що знаходиться між двома іншими, averageABCПриклад роботи скрипта:

const numberA = document.querySelector("#A");
const numberB = document.querySelector("#B");
const numberC = document.querySelector("#C");
const button = document.querySelector("[type=submit]");

button.addEventListener("click", onBtnClick);

function onBtnClick(event) {
  event.preventDefault();
  const inputValueA = Number(numberA.value);
  const inputValueB = Number(numberB.value);
  const inputValueC = Number(numberC.value);
  let maxAB = 0;
  let maxABC = 0;t
  let averageABC = 0;
  if (inputValueA && inputValueB) {
    if (inputValueA > inputValueB) {
      console.log("maxAB:", (maxAB = inputValueA));
    } else {
      console.log("maxAB:", (maxAB = inputValueB));
    }

    if (inputValueA > inputValueB && inputValueA > inputValueC) {
      console.log("maxABC:", (maxABC = inputValueA));
    } else if (inputValueB > inputValueA && inputValueB > inputValueC) {
      console.log("maxABC:", (maxABC = inputValueB));
    } else if (inputValueC > inputValueA && inputValueC > inputValueB) {
      console.log("maxABC:", (maxABC = inputValueC));
    }

    if (inputValueA > inputValueB && inputValueA < inputValueC) {
      console.log("avarage:", (averageABC = inputValueA));
    } else if (inputValueB > inputValueA && inputValueB < inputValueC) {
      console.log("avarage:", (averageABC = inputValueB));
    } else if (inputValueC > inputValueA || inputValueC < inputValueB) {
      console.log("avarage:", (averageABC = inputValueC));
    }
  } else {
    console.log("Введіть коректні дані");
  }
}

// Завдання 5. Дано номер місяця і номер року.
// 1. Вивести назву місяця
// 2. Вивести назву пори року
// 2. Визначити, чи рік високосний
// 3. Визначити кількість днів у місяцi
const inputYear = document.querySelector("#year");
const inputMonth = document.querySelector("#month");
const showResult = document.querySelector(".btn");

showResult.addEventListener("click", onShowResultClick);

function onShowResultClick(event) {

  if(inputYear.value && inputMonth.value){
    getMonthName();
    getSeason();
    getFullYear();
    getDayInMonth();
  }
  else{
    console.log('Введіть коректні дані')
  }
}

function getMonthName() {
  const date = new Date();
  date.setMonth(inputMonth.value - 1);
  const monthName = date.toLocaleString("en-US", {
    month: "long",
  });
  console.log("Month is", monthName);
  return monthName;
}

function getSeason() {
  const month = inputMonth.value;
  let season = "";
  switch (month) {
    case "12":
    case "1":
    case "2":
      season = "winter";
      break;
    case "3":
    case "4":
    case "5":
      season = "spring";
      break;
    case "6":
    case "7":
    case "8":
      season = "summer";
      break;
    case "9":
    case "10":
    case "11":
      season = "autumn";
      break;
  }
  console.log("Season is", season);
}

function getFullYear() {
  let year = inputYear.value;
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log("Year intercalary");
  } else {
    console.log("Year is not intercalary");
  }
}

function getDayInMonth() {
  let month = inputMonth.value;
  let year = inputYear.value;
  const daysInMonth = new Date(year, month, 0).getDate();
  console.log(`Day:`, daysInMonth);
}

// Завдання 6. Із списку днів тижня, вибраний день повинен підставлятись у речення
//  «Похід відбудеться в …»
const container = document.querySelector(".container");
const selectDays = document.querySelector("#days");

selectDays.addEventListener("change", onDaysChange);

function onDaysChange() {
  const days = selectDays.value;
  console.log(days);
  container.innerHTML = `<p>Похід відбудеться в <strong>${days}</strong></p>`;
}

// Завдання 7. Нам потрібно придбати житло (квартиру або будинок) при таких умовах:
// 1) Ціна не перевищує 600 тис. грн.
// 2) Новобуд (з 2-го по 6-тий поверх) або приватний будинок
// За даною пропозицією визначте, чи можемо ми придбати дану нерухомість
const btn = document.querySelector(".btn-build");
const inputBuild = document.querySelector("#new-build");
const inputSecodBuild = document.querySelector("#second-build");
const inputHouse = document.querySelector("#house");
const inputPrice = document.querySelector("#price");
const inputFloor = document.querySelector("#floor");

btn.addEventListener("click", onBtnClick1);

function onBtnClick1() {
  const inputValueBuild = inputBuild.value;
  const inputValueSecodBuild = inputSecodBuild.value;
  const inputValueHouse = inputHouse.value;
  const inputValuePrice = Number(inputPrice.value);
  const inputValueFloor = Number(inputFloor.value);

  if (
    inputValueBuild &&
    inputValueSecodBuild &&
    inputValueHouse &&
    inputValuePrice &&
    inputValueFloor
  ) {
    if (
      inputValuePrice <= 600000 &&
      inputValueFloor <= 6 &&
      inputValueFloor >= 2
    ) {
      console.log("Interested!");
    } else {
      console.log("Not Interested");
    }
  } else {
    console.log("Enter all information!");
  }
}