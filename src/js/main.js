import Masonry from "masonry-layout";
import SimpleLightbox from "simplelightbox";
import "../../style.css";
import "simplelightbox/dist/simple-lightbox.min.css";
import aboutFirm from "./components/aboutFirm";
import header from "./components/header";
import intro from "./components/intro";
import offer from "./components/offer";
import { realization } from "./components/realization";
import contact from "./components/contact";
import footer from "./components/footer";
import emmiter from "../utils/eventEmmiter";

const app = document.querySelector("#app");

app.appendChild(header);
app.appendChild(intro);
app.appendChild(offer);
app.appendChild(aboutFirm);
app.appendChild(realization);
app.appendChild(contact);
app.appendChild(footer);

window.onload = () => {
    const masonry = new Masonry(".masonry-grid ", {
        // options...
        gutter: 30,
        fitWidth: true,
        originLeft: true,
        horizontalOrder: true,
        itemSelector: ".grid-item",
    });

    emmiter.on("listUpdated", () => {
        console.log("firstChild");
        masonry.reloadItems();
        masonry.layout();
    });

    let lightbox = new SimpleLightbox(".masonry-grid a", {
        captionsData: "alt",
        captionDelay: 250,
    });
};
