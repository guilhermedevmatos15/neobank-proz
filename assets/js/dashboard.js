import { getData, setData } from './logic/database.js';

// Se já existir usuário no localStorage, muda de página.
if (!getData()?.name?.length) {
	window.location.assign('./index.html');
}
