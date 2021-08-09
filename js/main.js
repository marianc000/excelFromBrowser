// main.js
import { loadData } from './data.js';
import { render } from './view.js';
import { saveToXlsx } from './export.js'

loadData().then(data => {
    render(data);
    document.querySelector('button').onclick = () => saveToXlsx(data);
});