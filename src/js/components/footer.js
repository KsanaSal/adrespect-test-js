import logoSite from "../../images/logo/giarddesign-light.svg";
import { buttonPrimary } from "./button";
import logoAdRespect from "../../images/logo/logo-adRespect.svg";

const footer = document.createElement("footer");
footer.classList.add(
    "flex",
    "flex-col",
    "w-full",
    "bg-grayDark",
    "py-[30px]",
    "px-[20px]",
    "text-grayLight",
    "items-center",
    "gap-[30px]"
);

const footerContent = /*html*/ `
    <div class="flex flex-col gap-[20px] items-center">
        <div class="flex flex-col gap-[16px] items-center">
            <a href="/" class="hover:scale-110 h-[24px]">
                <img src="${logoSite}" class="w-[115px] h-[19px]" alt="Giarddesign" />
            </a>
            <div class="flex flex-col gap-[16px] items-center">
                <p class="text-[16px]">Daj znać, co możemy dla Ciebie zrobić!</p>
                ${buttonPrimary(
                    "Skontaktuj się z nami",
                    "text-grayLight hover:text-accent bg-primary border-primary hover:bg-primaryLight hover:shadow-boxLight hover:border-accent"
                )}
            </div>
        </div>
        <div class="h-[1px] bg-grayLight w-full"></div>
        <div class="flex flex-col gap-[16px] items-center">
            <ul class="flex flex-row gap-[20px]">
                <li>Kontakt</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
            </ul>
            <ul class="flex flex-row gap-[20px]">
                <li>000-000-000</li>
                <li>giarddesign@kontakt.pl</li>
            </ul>
        </div>
    </div>
    <div class="flex flex-col gap-[16px] items-center">
        <p class="text-[16px]">Prawa zastrzeżone © 2022</p>
        <div class="flex flex-row items-center gap-[16px]">
            <span class="text-[16px]">made by</span>
            <a>
                <img src="${logoAdRespect}" class="w-[113px] h-[23px]" alt="adRespect"/>
            </a>
        </div>
    </div>
`;

footer.innerHTML = footerContent;

export default footer;
