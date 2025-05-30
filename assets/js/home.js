import { getData, setData } from './logic/database.js';

// Verificação: Se já existir usuário no localStorage, muda de página.
if (getData().length) {
   window.location.assign('./dashboard.html');
}

// Abrir Star Wars ao clicar
const iconQuestion = document.querySelector('.fa-circle-question');

iconQuestion.addEventListener('click', () => {
	window.open('https://pt.wikipedia.org/wiki/Star_Wars');
});

// Verificação de formulário
const form = document.querySelector('form');
const inputName = form.querySelectorAll('input')[0];
const inputPassword = form.querySelectorAll('input')[1];

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const nameValue = String(inputName).trim().split(' ')[0];

	if (!nameValue.length) {
		alert('Por favor, informe seu nome.');
		return;
	}

	if (!inputPassword.value.length) {
		alert('Por favor, informe uma senha.');
		return;
	}

	alert('Usuário cadastrado com sucesso!');

	setData({ name: nameValue, password: inputPassword.value, saldo: 0 });
});
