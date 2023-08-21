import imgAboutFirm from "../../images/imagesFirm/about-firm.webp";
import { buttonSecondary } from "../components/button";

const aboutFirm = document.createElement("section");

aboutFirm.classList.add("flex", "w-full", "bg-primary");
aboutFirm.setAttribute("id", "firma");

const aboutFirmContent = /*html*/ `
    <div class="flex flex-col lg:flex-row lg:justify-between lg:gap-[64px] w-full">
        <img src="${imgAboutFirm}" class="w-full lg:w-[688px] shrink-0 h-[300px] md:h-[550px] lg:h-[720px]" alt="Dom na odpoczynek"/>
        <div class="py-[40px] md:py-[60px] lg:py-0 px-[24px] lg:pl-[96px] lg:pr-0 flex flex-col gap-[24px] md:gap-[36px] lg:gap-[72px] items-center md:items-start text-grayLight lg:justify-center md:w-[700px]">
            <div class="text-center md:text-start flex flex-col gap-[10px] md:gap-[20px] lg:gap-[40px] lg:w-[500px]">
                <h2 class="font-[Montserrat] font-medium text-[28px] md:text-[40px] lg:text-[48px]">
                    Tworzymy z 
                    <span class="italic">pasją</span>
                </h2>
                <p class="text-center text-[16px] md:text-start">Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą wykwalifikowani projektanci oraz architekci, których zadaniem jest rozpoznanie i realizacja potrzeb każdego Klienta. Nasza specjalizacja to przestrzenie nowoczesne, które charakteryzuje minimalizm, geometria i elegancka prostota. Tworzymy ogrody małoobsługowe, dostosowane do współczesnego trybu życia.</p>
            </div>
            ${buttonSecondary(
                `
                <div class="flex items-center gap-[8px]">
                    <span>Poznaj nas bliżej</span>
                    <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-[16px] h-[16px] transform -rotate-90">
                        <path
                            d="M16.5 7.99529L15.6043 7.09959L9.13642 13.5769L9.13642 1.02988e-07L7.86358 8.78099e-08L7.86358 13.5675L1.3957 7.09959L0.5 7.99529L8.50471 16L16.5 7.99529Z"
                            fill="currentColor"/>
                    </svg>
                </div>
                `,
                "text-grayLight border-grayLight hover:text-accent hover:bg-primaryLight hover:border-accent"
            )}
        </div>
    </div>
`;

aboutFirm.innerHTML = aboutFirmContent;

export default aboutFirm;
