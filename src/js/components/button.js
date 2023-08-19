export const buttonPrimary = (title) => {
    return /*html*/ `
    <button type="button" class="transition ease-in-out delay-150 bg-primary py-[12px] px-[24px] w-max rounded-[200px] text-[16px] text-grayLight hover:-translate-y-1 duration-300 hover:scale-105 hover:shadow-box hover:text-primary hover:bg-grayLight border-2 border-primary">
        ${title}
    </button>
    `;
};

export const buttonSecondary = (title) => {
    return /*html*/ `
    <button type="button" class="transition ease-in-out delay-150 bg-grayLight py-[12px] px-[22px] w-max rounded-[200px] text-[16px] text-primary hover:-translate-y-1 duration-300 hover:scale-105 hover:shadow-box hover:text-grayLight hover:bg-primary border-2 border-primary">
        ${title}
    </button>
    `;
};
