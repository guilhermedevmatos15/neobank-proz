import { getData, setData } from './logic/database.js';

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
	saldoElement.innerHTML = 'R$ ***,**';
	console.log(saldoElement);
});

iconEyeSlash.addEventListener('click', () => {
	iconEyeSlash.classList.remove('active');
	iconEye.classList.add('active');

	saldoElement.classList.remove('hide');
	saldoElement.innerHTML = `R$ ${saldo.replace('.', ',')}`;
	console.log(saldoElement);
});

// Abrir Star Wars ao clicar
const iconQuestion = document.querySelector('.fa-circle-question');

iconQuestion.addEventListener('click', () => {
	window.open('https://pt.wikipedia.org/wiki/Star_Wars');
});

// Mudar de página
[...document.querySelectorAll('.actions-app .action')][0].addEventListener('click', () => {
	window.location.assign('./index.html');
});
[...document.querySelectorAll('.actions-app .action')][1].addEventListener('click', () => {
	window.location.assign('./deposit.html');
});

// Submit
const form = document.querySelector('main form');
const inputValor = document.getElementById('input-valor-saque');
const inputPassword = document.getElementById('input-password');

function limparMascara(valorFormatado) {
	return parseFloat(valorFormatado.replace(/[R$\s.]/g, '').replace(',', '.'));
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const valorNumerico = limparMascara(inputValor.value);

	if (valorNumerico <= 0 || isNaN(valorNumerico)) {
		alert('Por favor, insira um valor válido.');
		inputValor.focus();
		return;
	}

	if (inputPassword.value.trim() !== data?.password) {
		alert('Senha inválida, tente novamente.');
		inputPassword.value = '';
		inputPassword.focus();
		return;
	}

	if (valorNumerico > data?.saldo) {
		alert('Saldo insuficiente!');
		inputValor.focus();
		return;
	}

	// Atualiza o saldo
	alert('Saque efetuado!');
	data.saldo -= valorNumerico;
	setData(data);
	window.location.reload();
});

// Máscara de input
inputValor.addEventListener('input', () => {
	let valor = inputValor.value;

	valor = valor.replace(/\D/g, '');

	if (valor === '') {
		inputValor.value = '';
		return;
	}

	valor = (parseInt(valor, 10) / 100).toFixed(2);

	valor = valor.replace('.', ',');

	valor = `R$ ${valor}`;

	inputValor.value = valor;
});
