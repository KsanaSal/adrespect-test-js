import photo1 from "../../images/imageGallery/photo1.webp";
import photo2 from "../../images/imageGallery/photo2.webp";
import photo3 from "../../images/imageGallery/photo3.webp";
import photo4 from "../../images/imageGallery/photo4.webp";
import photo5 from "../../images/imageGallery/photo5.webp";
import photo6 from "../../images/imageGallery/photo6.webp";
import photo7 from "../../images/imageGallery/photo7.webp";
import photo8 from "../../images/imageGallery/photo8.webp";
import photo9 from "../../images/imageGallery/photo9.webp";
import photo10 from "../../images/imageGallery/photo10.webp";
import photo11 from "../../images/imageGallery/photo11.webp";
import photo12 from "../../images/imageGallery/photo12.webp";
import photo13 from "../../images/imageGallery/photo13.webp";
import photo14 from "../../images/imageGallery/photo14.webp";
import photo15 from "../../images/imageGallery/photo15.webp";
import photo16 from "../../images/imageGallery/photo16.webp";
import photo17 from "../../images/imageGallery/photo17.webp";
import photo18 from "../../images/imageGallery/photo18.webp";
import photo19 from "../../images/imageGallery/photo19.webp";
import photo20 from "../../images/imageGallery/photo20.webp";
import photo21 from "../../images/imageGallery/photo21.webp";
import photo22 from "../../images/imageGallery/photo22.webp";
import photo23 from "../../images/imageGallery/photo23.webp";
import photo24 from "../../images/imageGallery/photo24.webp";
import photo25 from "../../images/imageGallery/photo25.webp";
import photo26 from "../../images/imageGallery/photo26.webp";
import photo27 from "../../images/imageGallery/photo27.webp";
import photo28 from "../../images/imageGallery/photo28.webp";
import { buttonSecondary } from "../components/button";
import emitter from "../../utils/eventEmitter";

const realization = document.createElement("section");

realization.classList.add(
    "w-full",
    "bg-secondary",
    "py-[40px]",
    "md:py-[80px]",
    "lg:py-[120px]",
    "relative"
);
realization.setAttribute("id", "realizacje-projekty");

const imageList = [
    {
        src: photo1,
        alt: "Ogród dwupoziomowy",
    },
    {
        src: photo2,
        alt: "Altana z basenem",
    },
    {
        src: photo3,
        alt: "Rosarium",
    },
    {
        src: photo4,
        alt: "Altana z ogrodem",
    },
    {
        src: photo5,
        alt: "Jezioro",
    },
    {
        src: photo6,
        alt: "Ścieżka w ogrodzie",
    },
    {
        src: photo7,
        alt: "Ogród w budynku",
    },
    {
        src: photo8,
        alt: "Patio",
    },
    {
        src: photo9,
        alt: "Taras z kwiatami",
    },
    {
        src: photo10,
        alt: "Alpejski ogród",
    },
    {
        src: photo11,
        alt: "Altana z ogrodem",
    },
    {
        src: photo12,
        alt: "Obszar rekreacyjny",
    },
    {
        src: photo13,
        alt: "Trochę odpoczynku",
    },
    {
        src: photo14,
        alt: "Ogród na schodach",
    },
    {
        src: photo15,
        alt: "Alpejskie jezioro",
    },
    {
        src: photo16,
        alt: "Fontanna z jeziorem",
    },
    {
        src: photo17,
        alt: "Ścieżka w ogrodzie",
    },
    {
        src: photo18,
        alt: "Mini altana",
    },
    {
        src: photo19,
        alt: "Loft na patio",
    },
    {
        src: photo20,
        alt: "Mini patio i ogród",
    },
    {
        src: photo21,
        alt: "Ścieżka do Krainy Oz",
    },
    {
        src: photo22,
        alt: "Letni prysznic",
    },
    {
        src: photo23,
        alt: "Ścieżka plażowa",
    },
    {
        src: photo24,
        alt: "Małe patio na poddaszu",
    },
    {
        src: photo25,
        alt: "Obszar rekreacyjny",
    },
    {
        src: photo26,
        alt: "Nowoczesny styl",
    },
    {
        src: photo27,
        alt: "Fontanna",
    },
    {
        src: photo28,
        alt: "Minimalizm",
    },
];

const imgPerPage = 9;
let pageNumber = 1;

let lastIndex = imgPerPage * pageNumber;

let imgListSliced = imageList.slice(0, imgPerPage);

const realizationGallery = /*html*/ `
    <h2 class="font-[Montserrat] font-medium text-[28px] md:text-[40px] lg:text-[48px] text-center lg:text-start lg:pl-[160px] mb-[20px] md:mb-[30px] lg:mb-[96px]">
        Nasze 
        <span class="italic">projekty</span>
    </h2>
    <div class="masonry-grid overflow-hidden mx-auto">
        ${imgListSliced
            .map(
                (image, index) => `
                <a class="gallery-item" href="${image.src}">
                    <div class="grid-item my-[20px]">
                        <img
                        src="${image.src}"
                        alt="${image.alt}"
                        class="w-full" />
                    </div> 
                </a>`
            )
            .join("")}
    </div>
    <div class="gallery-gradient w-full h-[1000px] absolute bottom-[120px] pt-[860px] z-20">
        ${buttonSecondary(
            `
            <div class="flex items-center gap-[8px]">
                <span>Rozwiń</span>
                <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[16px] h-[16px]">
                    <path
                        d="M16.5 7.99529L15.6043 7.09959L9.13642 13.5769L9.13642 1.02988e-07L7.86358 8.78099e-08L7.86358 13.5675L1.3957 7.09959L0.5 7.99529L8.50471 16L16.5 7.99529Z"
                        fill="currentColor"/>
                </svg>
            </div>
            `,
            "text-grayDark border-grayDark hover:text-primary hover:bg-grayLight hover:border-primary"
        )}
    </div>
`;

realization.innerHTML = realizationGallery;

const masonryContainer = realization.querySelector(".masonry-grid");
const galleryGradient = realization.querySelector(".gallery-gradient");

const button = realization.querySelector("button");
button.addEventListener("click", () => {
    pageNumber += 1;
    lastIndex = imgPerPage * pageNumber;
    imgListSliced =
        imageList.length <= lastIndex
            ? imageList
            : imageList.slice(0, lastIndex);
    masonryContainer.innerHTML = "";
    masonryContainer.innerHTML = imgListSliced
        .map(
            (image, index) => `
            <a class="gallery-item" href="${image.src}">
                <div class="grid-item my-[20px]">
                    <img
                    src="${image.src}"
                    alt="${image.alt}"
                    class="w-full" />
                </div> 
            </a>`
        )
        .join("");

    emitter.emit("listUpdated");
    if (imageList.length <= lastIndex) {
        button.classList.add("hidden");
        galleryGradient.classList.add("hidden");
    }
});

export { realization };
