import logoSite from "../../images/logo/giarddesign.svg";
import search from "../../images/icons/search-icon.svg";
import arrowDown from "../../images/icons/arrow-down-icon.svg";

const header = document.createElement("header");
header.classList.add("flex", "w-[1262px]", "justify-between", "py-[24px]");
const headerNav = /*html*/ `
    <a href="/">
        <img src="${logoSite}" class="w-[115px] h-[19px]" alt="Giarddesign" />
    </a>
    <nav class="flex flex-row gap-[48px] items-center">
        <ul class="flex flex-row gap-[48px] items-center">
            <li class="flex flex-row gap-[5px] items-center">
                <a href="#oferta">Oferta</a>
                <img src="${arrowDown}" class="w-[12px] h-[12px]" alt="Search"/>
            </li>
            <li><a href="#firma">O firmie</a></li>
            <li><a href="#realizacje">Realizacje</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
        </ul>
        <button>
            <img src="${search}" class="w-[24px] h-[24px]" alt="Search" />
        </button>
    </nav>
`;

header.innerHTML = headerNav;

export default header;
