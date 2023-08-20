import Masonry from "masonry-layout";
import SimpleLightbox from "simplelightbox";
import "../../style.css";
import "simplelightbox/dist/simple-lightbox.min.css";
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
    const masonry = new Masonry(".masonry-grid ", {
        // options...
        gutter: 30,
        originLeft: true,
        horizontalOrder: true,
        itemSelector: ".grid-item",
    });

    let lightbox = new SimpleLightbox(".masonry-grid a", {
        captionsData: "alt",
        captionDelay: 250,
    });
};
