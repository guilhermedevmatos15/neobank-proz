const KEY_LOCAL_STORAGE = 'neobank';

let data = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE)) || {};

function getData() {
	return data;
}

function setData(newData) {
	data = newData;
	localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(data));
}

export { getData, setData };
