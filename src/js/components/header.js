import javascriptLogo from "../../../javascript.svg";

const header = document.createElement("header");
const headerNav = `
    <img src="${javascriptLogo}" class="logo" alt="JavaScript logo" />
    <nav>
        <ul>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>
    <button></button>
    `;

header.innerHTML = headerNav;

export default header;
