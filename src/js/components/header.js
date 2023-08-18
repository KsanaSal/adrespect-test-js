import logoSite from "../../images/logo/giarddesign.svg";
import searchIcon from "../../images/icons/search-icon.svg";
import arrowDownIcon from "../../images/icons/arrow-down-icon.svg";
import projectIcon from "../../images/offer/project-icon.svg";
import realizationIcon from "../../images/offer/realization-icon.svg";
import visualizeIcon from "../../images/offer/visualize-icon.svg";
import menuIcon from "../../images/icons/menu-icon.svg";

const header = document.createElement("header");
header.classList.add(
    "flex",
    "w-full",
    "lg:w-[1262px]",
    "justify-between",
    "py-[24px]",
    "px-[24px]",
    "lg:px-0"
);
const headerNav = /*html*/ `
    <a href="/">
        <img src="${logoSite}" class="w-[115px] h-[19px]" alt="Giarddesign" />
    </a>
    <nav class="flex flex-row gap-[48px] items-center">
        
        <ul class="hidden md:flex flex-row gap-[32px] md:gap-[48px] items-center">
            <li class="flex flex-row gap-[5px] items-center relative group">
                <a href="#oferta">Oferta</a>
                <img src="${arrowDownIcon}" class="w-[12px] h-[12px]" alt="Search"/>
                <div class="hidden group-hover:block absolute left-0 top-[12px] py-[6px]">
                <ul class="mt-[4px] bg-white w-[135px] border-2 border-grayLight rounded-[8px] overflow-hidden shadow-box">
                    <li class="hover:bg-primaryLight py-[8px] px-[10px] flex flex-row items-center gap-[4px] w-full">
                        <img src="${projectIcon}" class="w-[18px] h-[18px]" alt="Projekty"/>
                        <a href="#projekty">Projekty</a>
                    </li>
                    <li class="hover:bg-primaryLight py-[8px] px-[10px] flex flex-row items-center gap-[4px] w-full">
                        <img src="${visualizeIcon}" class="w-[18px] h-[18px]" alt="Projekty"/>
                        <a href="#wizualizacje">Wizualizacje</a>
                    </li>
                    <li class="hover:bg-primaryLight py-[8px] px-[10px] flex flex-row items-center gap-[4px] w-full">
                        <img src="${realizationIcon}" class="w-[18px] h-[18px]" alt="Projekty"/>
                        <a href="#realizacje">Realizacje</a>
                    </li>
                </ul>
                </div>
            </li>
            <li><a href="#firma">O firmie</a></li>
            <li><a href="#realizacje">Realizacje</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
        </ul>
        <button>
            <img src="${searchIcon}" class="w-[24px] h-[24px]" alt="Search" />
        </button>
        <button class="block md:hidden">
            <img src="${menuIcon}" class="w-[24px] h-[24px]" alt="Search" />
        </button>
    </nav>
`;

header.innerHTML = headerNav;

export default header;
