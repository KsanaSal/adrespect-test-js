import logoSite from "../../images/logo/giarddesign.svg";
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
    "lg:px-0"
);
const headerNav = /*html*/ `
    <a href="/" class="hover:scale-110">
        <img src="${logoSite}" class="w-[115px] h-[19px]" alt="Giarddesign" />
    </a>
    <nav class="flex flex-row gap-[48px] md:items-center">
        <div id="menu" class="hidden md:flex w-screen md:w-full bg-grayLight md:bg-white p-[16px] md:p-0 relative">
            <div class="relative w-full h-[20px] md:hidden">
                <button id="close" type="button" class="right-0 absolute">
                    <img src="${closeIcon}" class="w-[20px] h-[20px]" alt="Close"/>
                </button>
            </div>
            <ul  class="flex flex-col md:flex-row gap-[32px] md:gap-[48px] items-start md:items-center w-full">
                <li class="flex flex-row gap-[5px] items-center relative group">
                    <a href="#oferta" class="flex items-center gap-[4px] hover:underline hover:text-accent hover:scale-110 hover:underline-offset-4">
                    Oferta
                    <img src="${arrowDownRightIcon}" class="w-[12px] h-[12px] -rotate-90 md:-rotate-0" alt="Arrow"/>
                    </a>
                    
                    <div class="hidden group-hover:block absolute left-[60px] md:left-0 top-[-12px] md:top-[12px] px-[6px] py-[6px]">
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
        <button type="button" class="flex hover:scale-110">
            <img src="${searchIcon}" class="w-[24px] h-[24px]" alt="Search" />
        </button>
        <button type="button" id="menuButton" class="block md:hidden">
            <img src="${menuIcon}" class="w-[24px] h-[24px]" alt="Menu" />
        </button>
    </nav>
`;

header.innerHTML = headerNav;

const menuButton = header.querySelector("#menuButton");
const menu = header.querySelector("#menu");
menuButton.addEventListener("click", () => {
    menu.classList.add("block");
    menu.classList.remove("hidden");
});

const close = header.querySelector("#close");
close.addEventListener("click", () => {
    menu.classList.add("hidden");
    menu.classList.remove("block");
});

export default header;
