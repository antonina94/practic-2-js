// Завдання 1. Вивести привітання для змінної, якщо вона не порожня

let showMessage = 'Hello';

if(showMessage !== ''){
    alert('hello')
}
else(alert('пуста стрічка'))

// Завдання 2. Дано ціле число a. Визначити, чи воно парне (вивести “Yes” або “No”)
 const number = Number(prompt('Чи парне число'));
 console.log(number)

if (number % 2 === 0 && number !== 0){
    alert('Yes');
}
else if(number % 2 !== 0){
    alert('No');
}
else{
    alert('Enter number')
}


// Завдання 3. В залежності від номера дня тижня визначити, чи він є вихідним. Вивести “Yes” або “No”
for( let i = 1; i <=7; i++){
    console.log('Days of week', i )
    if(i <=5){
        console.log('yes, it is working day')
    }
    else(console.log('No, it is rest day'))
}