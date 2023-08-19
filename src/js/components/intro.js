import { buttonPrimary, buttonSecondary } from "./button";
import imgGarden from "../../images/imagesIntro/garden.webp";

const intro = document.createElement("section");
intro.classList.add("flex", "w-full", "bg-secondary");

const introContent = /*html*/ `
    <div class="flex flex-col lg:flex-row lg:justify-between w-full">
        <div class="py-[20px] md:py-[30px] px-[24px] lg:pl-[90px] lg:pr-0 flex flex-col gap-[20px] md:gap-[30px] w-full lg:w-[600px] items-center md:items-start lg:justify-center">
            <h1 class="font-[Montserrat] text-[36px] leading-[42px] md:text-[48px] md:leading-[56px] lg:text-[60px] lg:leading-[70px] font-medium text-center md:text-start">Nowoczesna aranżacja
            Twojego ogrodu </h1>
            <p class="text-[16px] text-center md:text-start">Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.</p>
            <div class="flex flex-col items-center md:flex-row gap-[20px] md:gap-[36px]">
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
        </div>
        <div class="flex relative">
            <img src="${imgGarden}" class="w-full lg:w-[688px] shrink-0 h-[250px] md:h-[437px] lg:h-[737px]" alt="Ogród" />
            <div class="flex absolute  right-0 bottom-0 bg-grayLight py-[8px] md:py-[16px] lg:py-[24px] px-[16px] md:px-[24px] lg:px-[32px] gap-[32px] md:gap-[42px]">
                <button type="button" class="transition ease-in-out delay-150 text-grayDark hover:-translate-y-1 duration-300 hover:scale-110 hover:text-primary hover:drop-shadow-textShadow">
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[32px] md:w-[48px] h-[32px] md:h-[48px]">
                        <path d="M3.29518 14.9393C2.70939 15.5251 2.70939 16.4749 3.29518 17.0607L12.8411 26.6066C13.4269 27.1924 14.3766 27.1924 14.9624 26.6066C15.5482 26.0208 15.5482 25.0711 14.9624 24.4853L6.47716 16L14.9624 7.51472C15.5482 6.92893 15.5482 5.97918 14.9624 5.3934C14.3767 4.80761 13.4269 4.80761 12.8411 5.3934L3.29518 14.9393ZM28.6443 14.5L4.35584 14.5L4.35583 17.5L28.6443 17.5L28.6443 14.5Z" fill="currentColor"/>
                    </svg>
                </button>
                <button type="button" class="transition ease-in-out delay-150 text-grayDark hover:-translate-y-1 duration-300 hover:scale-110 hover:text-primary hover:drop-shadow-textShadow">
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[32px] md:w-[48px] h-[32px] md:h-[48px]">
                        <path d="M29.7048 17.0607C30.2906 16.4749 30.2906 15.5251 29.7048 14.9393L20.1589 5.3934C19.5731 4.80761 18.6234 4.80761 18.0376 5.3934C17.4518 5.97919 17.4518 6.92893 18.0376 7.51472L26.5228 16L18.0376 24.4853C17.4518 25.0711 17.4518 26.0208 18.0376 26.6066C18.6234 27.1924 19.5731 27.1924 20.1589 26.6066L29.7048 17.0607ZM4.35571 17.5H28.6442V14.5H4.35571V17.5Z" fill="currentColor"/>
                        </svg>
                </button>
            </div>
        </div>
    </div>
`;

intro.innerHTML = introContent;

export default intro;
