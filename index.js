import { code, foto, img1, img2, img3, img4, img5, img6, live, logoboot, logocss, logoexp, logofoo, logogit, logoHeader, logohtml, logojs, logoreact, logoredux, logosass, logosuper, logotild, logovscode, vector1, vector2, vector3 } from "./logo.js";

const content = document.querySelector(".content");
const logo = document.querySelector(".logo");
const logosocial = document.querySelector(".logo-social");
const fotoImg = document.querySelector(".foto")
const logostack = document.querySelector(".logostack")
const cards = document.querySelector(".cards")
const logofooter = document.querySelector(".logoFooter")
const logosocialfooter = document.querySelector(".logo-social-footer");
const navFooter = document.querySelector(".navFooter")

const arrMenuHeader = ['Home','About','Tech Stack','Projects','Contact'];
const arrLogoStack = [logohtml,logocss,logojs,logoreact,logoredux,logoboot,logotild,logosass,logoexp,logosuper,logovscode,logogit]
const arrCards = [img1, img2, img3, img4, img5,img6]
logo.innerHTML = logoHeader
content.innerHTML = arrMenuHeader.map((item)=>`<a href="#">${item}</a>`).join('')
logosocial.innerHTML = [vector1, vector2,vector3].join('')
fotoImg.innerHTML = foto
logostack.innerHTML = arrLogoStack.map(item=>`<div class="itemLogo">${item}</div>`).join('')
cards.innerHTML = arrCards.map((item)=>`
<div class="card">
    <div class="imgCard">${item}</div>
    <div class="titelCard">Project Tile goes here</div>
    <div class="contentCard">This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</div>
    <div class="stackCard">Tech stack : HTML , JavaScript, SASS, React</div>
    <div class="linkCard">
    <span>${live}<a>Live Preview</a></span>
    <span>${code}<a>View Code</a></span>
    </div>
</div>
`).join('')
logofooter.innerHTML = logofoo
logosocialfooter.innerHTML = [vector1, vector2,vector3].join('')
navFooter.innerHTML = arrMenuHeader.map((item)=>`<a href="#">${item}</a>`).join('')

