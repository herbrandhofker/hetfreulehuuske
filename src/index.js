
import './index.css'
import epub from './epub.js'

const body = document.body;

function createBijlagen(parent, data) {

    createDagboek(parent, data);
    parent.appendChild(document.createElement("hr"))
    createAmelander(parent, data);
    
    function createExtra(parent, id) {
        const div = parent.appendChild(document.createElement("div"))
        div.classList.add("extra")
        div.id = id
        const a = div.appendChild(document.createElement("a"))
        a.innerText = "Terug naar top"
        a.href = "#home"
        return div;
    }
    function createDagboek(parent) {
        const dagboekDiv = createExtra(parent, "dagboek")
        dagboekDiv.classList.add("epub-div")

        const h1 = dagboekDiv.appendChild(document.createElement("h1"))
        h1.classList.add("extra-items")
        h1.innerText = "Dagboek van Willem Hofker over de restauratie (1982-1992)"
        epub(dagboekDiv, 'dagboek', 80, "jpg");
    }

    function createAmelander(parent) {
        const amelanderDiv = createExtra(parent, "amelander")

        const div = amelanderDiv.appendChild(document.createElement("div"));
        div.classList.add("de-amelander", "extra-items")
        const a = div.appendChild(document.createElement("a"));
        a.href = "https://drive.google.com/file/d/1Ie5GE7C-QJt-1SrWzCD-D6FsavthZiCY/view?usp=sharing"
        a.target = "_blank";
        a.innerText = "Klik hier voor artikel over Vermaningspad en Het Freule Huuske"

        const h1 = div.appendChild(document.createElement("h3"));
        h1.innerHTML = `<b style="font-size:2vw">Boodschap van Jacob Roep en Afke Schols van de 'Amelander Musea': </b><br><i>wij vinden het
    belangrijk dat dit historische pad in Nes behouden blijft. Amelander
    Musea erkennen ook het historische belang van het Vermaningspad door
    tijdens vakanties Free Tours te organiseren. (Zie <a href="https://www.vvvameland.nl/zien-en-doen/excursies/free-tour#:~:text=Stichting%20Amelander%20Musea%20organiseert%20free%20tours%20in%20de,de%20leukste%20introductie%20tot%20de%20cultuurhistorie%20van%20Ameland" target="_blank">Free Tour</a>) Deze vrijblijvende
    rondleidingen leiden u langs de bijzondere geschiedenis van het
    Vermaningspad en gaan over de bestuurlijke en religieuze geschiedenis
    van Ameland en de walvisvaart.</i>`;
        const deAmelander = amelanderDiv.appendChild(document.createElement("a"))
        deAmelander.classList.add("extra-items");

        deAmelander.innerText = "Maandblad 'de Amelander', (bijna) overal op Ameland te koop"
        deAmelander.href = "https://www.deamelander.nl/"
        deAmelander.target = "_blank"

        const yt = amelanderDiv.appendChild(document.createElement("a"))
        yt.classList.add("extra-items")

        yt.innerText = "Freetour met bezoek Freule Huuske"
        yt.href = "https://www.youtube.com/watch?v=0Sc-1cLTR7A&ab_channel=AmelandVandaag"
        yt.target = "_blank"
    }

  
}


fetch("./data/freulehuuske.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        doit(body, data);
        createBijlagen(body, data)
    });

function doit(parent, data) {
    const buttonContainer = parent.appendChild(document.createElement("div"));
    buttonContainer.classList.add("button-container")
    buttonContainer.id = "home"
    const dagboekButton = buttonContainer.appendChild(document.createElement("a"));
    dagboekButton.href = "#dagboek"
    dagboekButton.innerText = "Naar dagboek Willem Hofker";
    const amelanderButton = buttonContainer.appendChild(document.createElement("a"));
    amelanderButton.href = "#amelander"
    amelanderButton.innerText = "Naar Amelander Musea over het Freule Huuske";
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
