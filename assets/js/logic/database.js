const KEY_LOCAL_STORAGE = 'neobank';

let data;

try {
	data = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE)) || {};
} catch (e) {
	console.warn('Dados corrompidos no localStorage, redefinindo...');
	data = {};
	localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(data));
}

function getData() {
	return data;
}

function setData(newData) {
	localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(newData));
}

export { getData, setData };
