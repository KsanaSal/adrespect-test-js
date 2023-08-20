const realization = document.createElement("section");
realization.classList.add("grid");

const imageList = [
    {
        src: "https://cdn2.hubspot.net/hubfs/4795157/Idxcorporation_December2018/Images/architecturalmillwork/img22.jpg",
        alt: "Architectural Mill Work 22",
    },
    {
        src: "https://cdn2.hubspot.net/hubfs/4795157/Idxcorporation_December2018/Images/architecturalmillwork/img5.jpg",
        alt: "Architectural Mill Work 22",
    },
    {
        src: "https://cdn2.hubspot.net/hubfs/4795157/Idxcorporation_December2018/Images/architecturalmillwork/img3.jpg",
        alt: "Architectural Mill Work 22",
    },
    {
        src: "https://cdn2.hubspot.net/hubfs/4795157/Idxcorporation_December2018/Images/architecturalmillwork/img2.jpg",
        alt: "Architectural Mill Work 22",
    },
    {
        src: "https://cdn2.hubspot.net/hubfs/4795157/Idxcorporation_December2018/Images/architecturalmillwork/img1.jpg",
        alt: "Architectural Mill Work 22",
    },
    {
        src: "https://cdn2.hubspot.net/hubfs/4795157/Idxcorporation_December2018/Images/architecturalmillwork/img7.jpg",
        alt: "Architectural Mill Work 22",
    },
];

const realizationGallery = /*html*/ `
    <h2>Nasze projekty</h2>
    ${imageList
        .map(
            (image, index) => `<div class="grid-item 2 w-1/5 my-[10px]">
        <img
            src="${image.src}"
            alt="${image.alt}"
            class="w-full" />
    </div> `
        )
        .join("")}

`;

realization.innerHTML = realizationGallery;

export { realization };
