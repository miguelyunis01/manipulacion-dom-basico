/*
// console.log(input.value);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

// h1.innerHTML = 'Patito <br> feo'; para protegernos es mejor usar inner text
h1.innerText = 'Patito feo';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');
h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('verde')

input.value = '456'

const img = document.createElement('img');
img.setAttribute('src', 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg');
console.log(img);
pid.append(img);
*/
const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}

