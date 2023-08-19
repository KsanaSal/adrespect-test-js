import { card } from "./card";
import projectIcon from "../../images/offer/project-icon.svg";
import realizationIcon from "../../images/offer/realization-icon.svg";
import visualizeIcon from "../../images/offer/visualize-icon.svg";

const cards = [
    {
        img: projectIcon,
        title: "Projekty",
        text: "Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.",
        link: "#projekty",
        linkTitle: "Dowiedz się więcej",
    },
    {
        img: visualizeIcon,
        title: "Wizualizacje",
        text: "Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.",
        link: "#wizualizacje",
        linkTitle: "Dowiedz się więcej",
    },
    {
        img: realizationIcon,
        title: "Realizacje",
        text: "Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.",
        link: "#realizacje",
        linkTitle: "Zobacz nasze realizacje",
    },
];

const offer = document.createElement("section");
offer.classList.add(
    "flex",
    "w-full",
    "bg-grayLight",
    "flex-col",
    "py-[40px]",
    "md:py-[80px]",
    "lg:py-[120px]",
    "items-center"
);

const offerContent = /*html*/ `
    <div class="flex flex-col gap-[24px] md:gap-[30px] lg:gap-[96px] px-[24px] lg:px-0 lg:items-center">
        <div class="flex flex-col gap-[16px] md:text-start md:w-[700px]">
            <h2 class="font-[Montserrat] font-medium text-[28px] md:text-[40px] lg:text-[48px]">Działamy 
                <span class="italic">kompleksowo</span>
            </h2>
            <p class="text-center text-[16px] md:text-start">Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne. Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie, a na każdym etapie posłużymy radą i wieloletnim doświadczeniem. </p>
        </div>
        <div class="flex flex-col md:flex-row md:flex-wrap gap-[24px] lg:gap-[64px]">
            ${cards.map((el) => card(el)).join("")}
        </div>
    </div>
`;

offer.innerHTML = offerContent;

export default offer;
