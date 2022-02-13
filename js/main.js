// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let form1 = document.createElement('FORM');
    form1.className = 'form1';
let input1Form1 = document.createElement('INPUT');
    input1Form1.className = 'input'
    input1Form1.id = 'inputId1F1';
let input2Form1 = document.createElement('INPUT');
    input2Form1.className = 'input';
    input2Form1.id = 'inputId2F1';
form1.append(input1Form1, input2Form1);
document.body.append(form1);

let  form2 = document.createElement('FORM');
    form2.className = 'form2';
let input1Form2 = document.createElement('INPUT');
    input1Form2.className = 'input'
    input1Form2.id = 'inputId1F2';
let input2Form2 = document.createElement('INPUT');
    input2Form2.className = 'input'
    input2Form2.id = 'inputId2F2';
form2.append(input1Form2, input2Form2);
document.body.append(form2);

let input = document.getElementsByClassName('input');

let btn = document.createElement('BUTTON');
btn.className = 'btn';
btn.id = 'btnId';
btn.innerText = 'Send';
btn.style = `
    position: relative;
    left: 165px;
    top: 10px;   
    border: 1px solid;
    border-radius: 5px;
`;
document.body.append(btn);

let forms = document.forms;

btn.addEventListener('click', function () {
    console.log('Input 1 from Form 1', forms[0][0].value);
    console.log('Input 2 from Form 1', forms[0][1].value);
    console.log('Input 1 from Form 2', forms[1][0].value);
    console.log('Input 2 from Form 2', forms[1][1].value);
});

// - Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеэк, третій вміст ячеэк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
let form3 = document.createElement('FORM');
document.body.append(form3);
form3.style = `
    display: flex;
    justify-content: center;
    align-items: center;
`;

let input31 = document.createElement('INPUT');
    input31.className = 'input';
    input31.setAttribute('value', 'input кількість рядків');
let input32 = document.createElement('INPUT');
    input32.className = 'input';
    input32.setAttribute('value', 'input кількість ячеэк');
let input33 = document.createElement('INPUT');
    input33.className = 'input';
    input33.setAttribute('value', 'input вміст ячеэк');
let btn3 = document.createElement('BUTTON');
btn3.className = 'btn';
btn3.innerText = 'SEND';
btn3.style = `
    position: relative;
    left: -305px;
    top: 40px;
    border: 1px solid;
    border-radius: 5px;
`;

form3.append(input31, input32, input33, btn3);

let forms3 = document.forms;

let table = document.createElement('TABLE');
document.body.append(table);

btn3.addEventListener('click', function (e) {
    e.preventDefault();
    let inputTr = forms3[2][0].value;
    let inputTd = forms3[2][1].value;
    let inputText = forms3[2][2].value;

    for (let i = 0; i < +inputTr; i++) {
        let tr = document.createElement('TR');
        table.append(tr);
        for (let j = 0; j < +inputTd; j++) {
            let td = document.createElement('TD');
            td.style = `
                    border: 1px solid darkgoldenrod;
            `;
            td.innerText = inputText;
            tr.append(td);
        };
    };
});

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let arrError = [
    'gad',
    'urod',
    'rediska',
    'idiot',
];

let label = document.createElement('LABEL');
document.body.append(label);
label.innerText = 'Check words ';

let inputTextErrors = document.createElement('INPUT');
inputTextErrors.setAttribute('type', 'text');
let btnError = document.createElement('BUTTON');
btnError.innerText = 'Check';
label.append(inputTextErrors, btnError);

btnError.addEventListener('click', function (e) {
    for (let i = 0; i < arrError.length; i++) {
        let arrErrorElement = arrError[i];
        if (arrErrorElement === inputTextErrors.value) {
            alert(`Не можна використовувати не цензурні слова!!! а ${inputTextErrors.value} одне з них!`);
            inputTextErrors.value = '';
        };
    };
});

// - Сворити масив не цензцрних слів.
let arrError2 = [
    'gad',
    'urod',
    'rediska',
    'idiot',
    'padlo',
];
//     Сворити інпут текстового типу.
let div = document.createElement('DIV');
div.style = `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;
document.body.append(div);
div.innerText = 'Check words in text:';

let inputTextErrors2 = document.createElement('INPUT');
inputTextErrors2.setAttribute('type', 'text');
let btnError2 = document.createElement('BUTTON');
btnError2.innerText = 'Check';
div.append(inputTextErrors2, btnError2);

//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
btnError2.addEventListener("click", function (e) {
    for (let i = 0; i < arrError2.length; i++) {
        let arrError2Element = arrError2[i];
        if (inputTextErrors2.value.includes(arrError2Element)) {
            alert(`Не можна використовувати не цензурні слова!!!`);
            inputTextErrors.value = '';
        };
    };
});

