import logoSite from "../../images/logo/giarddesign-black.svg";
import searchIcon from "../../images/icons/search-icon.svg";
import arrowDownRightIcon from "../../images/icons/arrow-down-right-icon.svg";
import projectIcon from "../../images/offer/project-icon.svg";
import realizationIcon from "../../images/offer/realization-icon.svg";
import visualizeIcon from "../../images/offer/visualize-icon.svg";
import menuIcon from "../../images/icons/menu-icon.svg";
import closeIcon from "../../images/icons/close-icon.svg";

const header = document.createElement("header");
header.classList.add(
    "flex",
    "w-full",
    "lg:w-[1262px]",
    "justify-between",
    "py-[24px]",
    "px-[24px]",
    "lg:px-0",
    "mx-auto"
);
const headerNav = /*html*/ `
    <a href="/" class="hover:scale-110 h-[24px]">
        <img src="${logoSite}" class="w-[115px] h-[19px]" alt="Giarddesign" />
    </a>
    <nav id="nav" class="flex flex-row gap-[48px] md:items-center">
        <div id="menu" class="hidden md:flex w-[90vw] md:w-full bg-grayLight md:bg-white p-[16px] md:p-0 relative z-30">
            <div class="relative w-full h-[20px] md:hidden">
                <button id="close" type="button" class="right-0 absolute">
                    <img src="${closeIcon}" class="w-[20px] h-[20px]" alt="Close"/>
                </button>
            </div>
            <ul  class="flex flex-col md:flex-row gap-[32px] md:gap-[48px] items-start md:items-center w-full">
                <li class="flex flex-row gap-[5px] items-center relative group">
                    <a href="#oferta" class="flex items-center gap-[4px] hover:underline hover:text-accent hover:scale-110 hover:underline-offset-4">
                    Oferta
                        <svg class="w-[12px] h-[12px] -rotate-90 md:-rotate-0" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.13017 4.81427C1.95661 4.6407 1.95661 4.3593 2.13017 4.18573C2.28796 4.02794 2.53487 4.0136 2.70887 4.1427L2.75871 4.18573L6 7.42681L9.24129 4.18573C9.39907 4.02794 9.64599 4.0136 9.81998 4.1427L9.86983 4.18573C10.0276 4.34352 10.042 4.59043 9.91286 4.76442L9.86983 4.81427L6.31427 8.36983C6.15648 8.52761 5.90957 8.54196 5.73558 8.41286L5.68573 8.36983L2.13017 4.81427Z" fill="currentColor"/>
                        </svg>
                    </a>
                    
                    <div class="hidden group-hover:block absolute left-[60px] md:left-0 top-[-12px] md:top-[12px] px-[6px] py-[6px] z-10">
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
                <li class="flex">
                    <a href="#firma" class="hover:underline hover:text-accent hover:scale-110 hover:underline-offset-4">O firmie</a>
                </li>
                <li class="flex">
                    <a href="#realizacje" class="hover:underline hover:text-accent hover:scale-110 hover:underline-offset-4">Realizacje</a>
                </li>
                <li class="flex">
                    <a href="#kontakt" class="hover:underline hover:text-accent hover:scale-110 hover:underline-offset-4">Kontakt</a>
                </li>
            </ul>
        </div>
        <button id="searchButton" type="button" class="flex hover:scale-110">
            <img src="${searchIcon}" class="w-[24px] h-[24px]" alt="Search" />
        </button>
        <button type="button" id="menuButton" class="block md:hidden">
            <img src="${menuIcon}" class="w-[24px] h-[24px]" alt="Menu" />
        </button>
        <div id="searchContainer" class="hidden absolute top-20 left-1/2 -translate-x-1/2 z-30">
            <input type="text" id="searchInput" class="px-2 py-1  w-[400px] h-[40px] border border-grayLight rounded" placeholder="Search..." />
        </div>
    </nav>
    `;

header.innerHTML = headerNav;

const menuButton = header.querySelector("#menuButton");
const searchButton = header.querySelector("#searchButton");
const menu = header.querySelector("#menu");
const nav = header.querySelector("#nav");
const searchContainer = header.querySelector("#searchContainer");
const searchInput = header.querySelector("#searchInput");

menuButton.addEventListener("click", () => {
    menu.classList.add("block");
    menuButton.classList.add("hidden");
    searchButton.classList.add("hidden");
    menu.classList.remove("hidden");
    nav.classList.add("absolute");
});

const close = header.querySelector("#close");
close.addEventListener("click", () => {
    menu.classList.add("hidden");
    menu.classList.remove("block");
    menuButton.classList.remove("hidden");
    searchButton.classList.remove("hidden");
    nav.classList.remove("absolute");
});

searchButton.addEventListener("click", () => {
    searchContainer.classList.toggle("hidden");
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        searchContainer.classList.add("hidden");
    }
});

searchInput.addEventListener("keyup", (event) => {
    // here you can implement search logic
    if (event.key === "Enter") {
        searchContainer.classList.add("hidden");
    }
});

export default header;
