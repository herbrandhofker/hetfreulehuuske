
import './index.css'
import epub from './epub.js'
const body = document.body;

function createDagboek(parent) {
    const dagboekDiv = parent.appendChild(document.createElement("div"))
    dagboekDiv.id="dagboek"
    dagboekDiv.classList.add("epub-div")
    const a = dagboekDiv.appendChild(document.createElement("a"))
    a.innerText = "Naar top"
    a.href="#home"

    const h1 = dagboekDiv.appendChild(document.createElement("h1"))
    h1.innerText = "Dagboek van Willem Hofker over de restauratie (1982-1992)"
    epub(dagboekDiv, 'dagboek', 80, "jpg");
}

function createAmelander(parent) {
    const amelanderDiv = parent.appendChild(document.createElement("div"))
    amelanderDiv.id="amelander"
    amelanderDiv.classList.add("epub-div")
    const a = amelanderDiv.appendChild(document.createElement("a"))
    a.innerText = "Naar top"
    a.href="#home"

    const h1 = amelanderDiv.appendChild(document.createElement("h1"))
    h1.innerText = "De Amelander over het Vermaningspad (september 2021)"
    epub(amelanderDiv, 'amelander', 2, "jpg");
}

fetch("./data/freulehuuske.json")
    .then(response => {
        return response.json();
    })
    .then(data => { 
        doit(body, data); 
        createDagboek(body) ; 
        createAmelander(body);
    });

function doit(parent, data) {    
    const buttonContainer= parent.appendChild(document.createElement("div"));
    buttonContainer.classList.add("button-container")
    buttonContainer.id="home"
    const dagboekButton= buttonContainer.appendChild(document.createElement("a"));
    dagboekButton.href="#dagboek"
    dagboekButton.innerText="Naar dagboek Willem Hofker";
    const amelanderButton= buttonContainer.appendChild(document.createElement("a"));
    amelanderButton.href="#amelander"
    amelanderButton.innerText="Naar 'De Amelander' over het Vermaningspad";
    for (let i = 0; i < data.sections.length; i++) {
        const section = data.sections[i];
        const sectionDiv = parent.appendChild(document.createElement("div"));
        sectionDiv.classList.add("section")
        if (i == 0) {
            sectionDiv.classList.add("main-section")
        }
        const h1 = sectionDiv.appendChild(document.createElement("h1"));
        h1.classList.add("section-title")
        h1.innerHTML = section.title;
        if (section.subtitle != null) {
            const h2 = sectionDiv.appendChild(document.createElement("h2"));
            h2.innerHTML = section.subtitle;
            h2.classList.add("section-subtitle")
        }

        if (section.cards.length > 0) {
            const grid = sectionDiv.appendChild(document.createElement("div"));
            grid.classList.add("card-grid")
            for (let j = 0; j < section.cards.length; j++) {
                const cardData = section.cards[j]
                const card = grid.appendChild(document.createElement("div"));
                card.classList.add("card", "card-shadow");
                const cardImage = card.appendChild(document.createElement("div"));
                cardImage.classList.add("card-image");
                if (cardData.picture != null) {
                    const img = cardImage.appendChild(document.createElement("img"));
                    img.src = "./images/" + cardData.picture
                    img.loading = "lazy"
                }

                if (cardData.title != null) {
                    const cardTitle = card.appendChild(document.createElement("div"));
                    cardTitle.classList.add("card-title");
                    cardTitle.innerHTML = cardData.title
                }
                if (cardData.description != null) {
                    const cardFooter = card.appendChild(document.createElement("div"));
                    cardFooter.classList.add("card-description");
                    cardFooter.innerHTML = cardData.description
                }
            }
        }
    }
}