import { getData } from './logic/database.js';

let data = getData();

// Se já existir usuário no localStorage, muda de página.
if (!data?.name?.length) {
	window.location.assign('./index.html');
}

// Renderizar dados
const nameElement = document.querySelector('header .name');
const saldoElement = document.querySelector('main .saldo');

const name = data?.name || 'usuário';
const saldo = String(data?.saldo.toFixed(2)) || '0';

nameElement.innerHTML = name;
saldoElement.innerHTML = `R$ ${saldo.replace('.', ',')}`;

// Esconder e visualizar saldo
const iconEye = document.querySelector('header i.fa-eye');
const iconEyeSlash = document.querySelector('header i.fa-eye-slash');

iconEye.addEventListener('click', () => {
	iconEye.classList.remove('active');
	iconEyeSlash.classList.add('active');

	saldoElement.classList.add('hide');
	console.log(saldoElement);
});

iconEyeSlash.addEventListener('click', () => {
	iconEyeSlash.classList.remove('active');
	iconEye.classList.add('active');

	saldoElement.classList.remove('hide');
	console.log(saldoElement);
});

// Abrir Star Wars ao clicar
const iconQuestion = document.querySelector('.fa-circle-question');

iconQuestion.addEventListener('click', () => {
	window.open('https://pt.wikipedia.org/wiki/Star_Wars');
});
