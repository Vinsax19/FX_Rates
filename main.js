// destructuring
// const arr = [0, 1, 2];
// console.log(arr);

// const [one, two, three] = arr;
// console.log(two)

// const user = {
//     firstName: 'sameul',
//     lastName: 'Oketola',
//     age: 40
// }

// const {lastName, age} = user;
// console.log(age)

const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// fetchung the exchange Rate and Update to DOM
const calculate = () => {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    window.fetch(`https://v6.exchangerate-api.com/v6/d4e344d882d1d9bb4adc0c70/latest/${currency_one}`).then(res => res.json()).then(data => {
        console.log(data);

        const rate = data.conversion_rates[currency_two];

        rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2)


    })
}

//event listeners
currencyEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
amountEl_two.addEventListener('input', calculate);

//swap functionality
swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;

    calculate();
})

calculate();