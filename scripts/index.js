import { data } from "./data.js";

const models = document.querySelector('.models');

function renderModels(data) {
	let html;

	data.map((el) => {
		html = `
			<div style="
				background-image: url(${el.bgImage});
				background-repeat: no-repeat;
				background-position: center center;
				background-size: cover;" 
				class="model"
			>
				<div class="content content2">
					<div class="sub" 
							style="display: ${el.model === "CyberTruck" ? "none" : "block"}"
					>
						<div>
							<h1 style="
								color: ${el.model === "Solar Panels" ? "#fff" : "#000"}
							">
								${el.model}
							</h1>
						</div>
						<div 
							class="link" 
							style="display: ${
                el.model === "Solar Panels" ||
                el.model === "Solar Roof" ||
                el.model === "Powerwall" ||
                el.model === "Accessories"
                  ? "none"
                  : "block"
              }"
						>
							<a href="#">${el.price} <sup>${changeSup(el)}</sup></a>
						</div>
						<div style="
								color: ${el.model === "Solar Panels" ? "#fff" : "#000"};
								text-decoration: ${el.model === "Solar Panels" ? "underline" : "none"};
								cursor: ${el.model === "Solar Panels" ? "pointer" : ""};
								display: ${
                  el.model === "Powerwall" || el.model === "Accessories"
                    ? "none"
                    : "block"
                };
							"
						>
							<p>${el.text}</p>
						</div>
					</div>
					${el.model === "CyberTruck" ? renderCyberTruckButtons(el) : ""}
					<div class="buttons"
						style="
							display: ${el.model === "CyberTruck" ? "none" : "grid"}
						"
					>
						<button class="order-button ${el.model === "Accessories" ? "access" : ""}">
              ${el.buttons.order}
            </button>
						<button class="demo-button"
							style="
								display: ${el.model === "Accessories" ? "none" : "block"};
							"
						>${el.buttons.demo}</button>
					</div>
				</div>
			</div>
		`;
		
		models.innerHTML += html;
	});

}

function changeSup(el) {
	let sup;

	if (el.model === "Model 3") sup = 2;
  else if (el.model === "Model X") sup = 3;
  else if (el.model === "Model S") sup = 4;
  else if (el.model === 'CyberTruck') sup = '';

	return sup;
}

function renderCyberTruckButtons(el) {
	return `
		<div class="truck-buttons">
			<button id="truck-order-button">${el.buttons.order}</button>
			<button>${el.buttons.demo}</button>
		</div>
	`;
}

renderModels(data);
