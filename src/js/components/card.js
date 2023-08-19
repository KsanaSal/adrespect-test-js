export const card = (el) => {
    return /*html*/ `
        <div class="flex flex-col gap-[24px] md:gap-[40px] md:w-[320px] lg:w-[378px] px-[24px] md:px-[30px] lg:px-[40px] py-[30px] md:py-[40px] lg:py-[48px] bg-white rounded-[28px] text-start transition ease-in-out delay-150 hover:-translate-y-1 duration-300 hover:scale-110 hover:shadow-box">
            <div class="flex flex-col text-start  gap-[24px]">
                <img src ="${el.img}" alt="Projekty"class="w-[30px] md:w-[40px] h-[30px] md:h-[40px"/>
                <div class="flex flex-col gap-[12px]">
                    <h3 class="font-[Montserrat] font-medium text-[24px]">${el.title}</h3>
                    <p>${el.text}</p>
                </div>
            </div>
            <div class="flex items-center gap-[10px] border-b-[1px] border-primary w-max pb-[4px] text-primary transition ease-in-out delay-150 hover:-translate-y-1 duration-300 hover:scale-110 hover:drop-shadow-textShadow hover:border-0">
                <a href="${el.link}">
                    ${el.linkTitle}
                    
                </a>
                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[16px] h-[16px]">
                    <path d="M29.7048 17.0607C30.2906 16.4749 30.2906 15.5251 29.7048 14.9393L20.1589 5.3934C19.5731 4.80761 18.6234 4.80761 18.0376 5.3934C17.4518 5.97919 17.4518 6.92893 18.0376 7.51472L26.5228 16L18.0376 24.4853C17.4518 25.0711 17.4518 26.0208 18.0376 26.6066C18.6234 27.1924 19.5731 27.1924 20.1589 26.6066L29.7048 17.0607ZM4.35571 17.5H28.6442V14.5H4.35571V17.5Z" fill="currentColor"/>
                    </svg>
            </div>
        </div>
    `;
};
