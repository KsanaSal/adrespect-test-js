import { buttonPrimary, buttonSecondary } from "./button";
import imgGarden from "../../images/imagesIntro/garden.webp";

const intro = document.createElement("section");
intro.classList.add("flex", "w-full", "bg-secondary");

const introContent = /*html*/ `
    <div>
        <div class="py-[20px] px-[24px] flex flex-col gap-[20px] w-full items-center">
            <h1 class="text-[36px] font-medium text-center m-auto">Nowoczesna aranżacja
            Twojego ogrodu </h1>
            <p class="text-[16px] text-center m-auto">Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.</p>
            ${buttonPrimary("Skontaktuj się z nami")}
            ${buttonSecondary(
                `<div class="flex items-center gap-[8px]">
                    <span>Zobacz nasze realizacje</span>
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[16px] h-[16px]">
                        <path d="M16.5 7.99529L15.6043 7.09959L9.13642 13.5769L9.13642 1.02988e-07L7.86358 8.78099e-08L7.86358 13.5675L1.3957 7.09959L0.5 7.99529L8.50471 16L16.5 7.99529Z" fill="currentColor"/>
                    </svg>
                </div>`
            )}
        </div>
        <img src="${imgGarden}" class="w-full h-[250px]" alt="Ogród" />
    </div>
`;

intro.innerHTML = introContent;

export default intro;
