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
    "md:py-[60px]",
    "lg:py-[80px]",
    "px-[20px]",
    "md:px-[40px]",
    "lg:px-[200px]",
    "text-grayLight",
    "items-center",
    "gap-[30px]",
    "md:gap-[40px]",
    "lg:gap-[120px]"
);

const footerContent = /*html*/ `
    <div class="flex flex-col gap-[20px] md:gap-[42px] lg:gap-[62px] items-center w-full">
        <div class="flex flex-col md:flex-row gap-[16px] items-center md:justify-between w-full">
            <a href="/" class="hover:scale-110">
                <img src="${logoSite}" class="w-[115px] h-[19px]" alt="Giarddesign" />
            </a>
            <div class="flex flex-col md:flex-row gap-[16px] md:gap-[20px] lg:gap-[24px] items-center">
                <p class="text-[16px]">Daj znać, co możemy dla Ciebie zrobić!</p>
                ${buttonPrimary(
                    "Skontaktuj się z nami",
                    "text-grayLight hover:text-accent bg-primary border-primary hover:bg-primaryLight hover:shadow-boxLight hover:border-accent"
                )}
            </div>
        </div>
        <div class="h-[1px] bg-grayLight w-full"></div>
        <div class="flex flex-col md:flex-row md:justify-between gap-[16px] md:gap-0 items-center w-full">
            <ul class="flex flex-row gap-[20px] md:gap-[30px] lg:gap-[48px]">
            <!-- Links to social networks -->
                <li class="flex">
                    <a href="#" target="_blank" title="Social network Kontakt" class="hover:underline hover:text-accent hover:scale-110 hover:underline-offset-4 cursor-pointer">
                    Kontakt
                    </a>
                </li>
                <li class="flex">
                    <a href="#" target="_blank" title="Social network Instagram" class="hover:underline hover:text-accent hover:scale-110 hover:underline-offset-4 cursor-pointer">
                    Instagram
                    </a>
                </li>
                <li class="flex">
                    <a href="#" target="_blank" title="Social network Facebook" class="hover:underline hover:text-accent hover:scale-110 hover:underline-offset-4 cursor-pointer">
                    Facebook
                    </a>
                </li>
                <li class="flex">
                    <a href="#" target="_blank" title="Social network LinkedIn" class="hover:underline hover:text-accent hover:scale-110 hover:underline-offset-4 cursor-pointer">
                    LinkedIn
                    </a>
                </li>
            </ul>
            <ul class="flex flex-row gap-[20px] md:gap-[30px] lg:gap-[48px]">
                <li class="flex">
                    <a href="tel:000000000" target="_blank" title="Telephone" class="hover:underline hover:text-accent hover:scale-110 hover:underline-offset-4 cursor-pointer">
                    000-000-000
                    </a>
                </li>
                <li class="flex">
                    <a href="mailto:giarddesign@kontakt.pl" target="_blank" title="Email" class="hover:underline hover:text-accent hover:scale-110 hover:underline-offset-4 cursor-pointer">
                    giarddesign@kontakt.pl
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="flex flex-col md:flex-row md:justify-between gap-[16px] md:gap-0 items-center w-full">
        <p class="text-[16px]">Prawa zastrzeżone © 2022</p>
        <div class="flex flex-row items-center gap-[16px] lg:gap-[20px]">
            <span class="text-[16px]">made by</span>
            <a>
                <img src="${logoAdRespect}" class="w-[113px] h-[23px]" alt="adRespect"/>
            </a>
        </div>
    </div>
`;

footer.innerHTML = footerContent;

export default footer;
