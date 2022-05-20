import { getData } from "./getData.js";
import image from "../images/webpack.png";
import "../styles/card.scss";

const root = document.getElementById("app");

const render = (data) => {
  let htmlCode = ``;

  data.map((elem) => {
    htmlCode += `
            <div class="card" key="${elem.id}">
                <h3>${elem.title}</h3>
                <p>${elem.completed}</p>
            </div>
        `;
  });

  root.innerHTML = `
    <img src=${image} alt="webpack" width="200" />
    <div class="cardBox">
      <div class="cardBox-wrapper">
        ${htmlCode}
      </div>
    </div>
  `;
};

getData().then(render);
