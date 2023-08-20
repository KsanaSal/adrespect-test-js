export const buttonPrimary = (
    title,
    className = "text-grayLight hover:text-primary bg-primary border-primary hover:bg-inherit"
) => {
    return /*html*/ `
    <button type="button" class="${className} transition ease-in-out delay-150  py-[12px] px-[24px] w-max rounded-[200px] text-[16px]  hover:-translate-y-1 duration-300 hover:scale-105 hover:shadow-box border-2 ">
        ${title}
    </button>
    `;
};

export const buttonSecondary = (
    title,
    className = "text-primary border-primary hover:text-grayLight hover:bg-primary"
) => {
    return /*html*/ `
    <button type="button" class="${className} transition ease-in-out delay-150 bg-inherit py-[12px] px-[22px] w-max rounded-[200px] text-[16px]  hover:-translate-y-1 duration-300 hover:scale-105 hover:shadow-box border-2">
        ${title}
    </button>
    `;
};
