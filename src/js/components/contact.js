import { buttonPrimary } from "./button";

const contact = document.createElement("section");

contact.classList.add(
    "w-full",
    "bg-secondary",
    "py-[30px]",
    "md:py-[40px]",
    "lg:py-[60px]",
    "lg:px-[180px]",
    "flex",
    "justify-center"
);
contact.setAttribute("id", "kontakt");

const contactContent = /*html*/ `
    <div class="flex flex-col lg:flex-row items-center md:items-start gap-[20px] md:gap-[40px] lg:gap-[64px] bg-primary py-[40px] md:py-[60px] lg:py-[120px] px-[24px] md:px-[60px] lg:px-[110px] text-grayLight w-full">
        <h2 class="font-[Montserrat] font-medium text-[28px] md:text-[36px] lg:text-[40px] md:text-start">
            Zostańmy w kontakcie!
            <br /> 
            Znajdziesz nas na 
            <span class="italic">Instagramie</span>.
        </h2>
        <div class="flex flex-col gap-[20px] items-center md:items-start w-[165px]">
            <p class="text-[16px] md:text-start">Śledź nasze najnowsze realizacje!</p>
            ${buttonPrimary(
                "Instagram",
                "text-primary border-grayLight bg-grayLight hover:text-accent hover:bg-primaryLight hover:border-accent hover:shadow-box"
            )}
        </div>
    </div>
`;

contact.innerHTML = contactContent;

export default contact;
