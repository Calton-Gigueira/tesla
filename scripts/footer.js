import { elements } from "./ft_data.js";

const footer = document.querySelector('#f-container');

function renderFooter(elements) {
	let html;

	elements.map((el) => {
		html = `
			<div> 
          <p>
            <sup>${el.sup}</sup> 
            ${el.text} ${el.sup === 1 ? '<a href="#" style="text-decoration: underline">Est. gas savings</a>' : ''}
          </p>
          <a href="#" style="color: rgb(182, 181, 181)">${el.link}</a>
        </div>
		`;

		footer.innerHTML += html;
	});
}

renderFooter(elements);
