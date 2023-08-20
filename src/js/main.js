import Masonry from "masonry-layout";
import "../../style.css";
import aboutFirm from "./components/aboutFirm";
import header from "./components/header";
import intro from "./components/intro";
import offer from "./components/offer";
import { realization } from "./components/realization";

const app = document.querySelector("#app");

app.appendChild(header);
app.appendChild(intro);
app.appendChild(offer);
app.appendChild(aboutFirm);
app.appendChild(realization);
window.onload = () => {
    const masonry = new Masonry(".grid ", {
        // options...
        gutter: 30,
        originLeft: true,
        horizontalOrder: true,
        itemSelector: ".grid-item",
    });
};
