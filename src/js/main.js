import "../../style.css";
import aboutFirm from "./components/aboutFirm";
import header from "./components/header";
import intro from "./components/intro";
import offer from "./components/offer";

const app = document.querySelector("#app");

app.appendChild(header);
app.appendChild(intro);
app.appendChild(offer);
app.appendChild(aboutFirm);
