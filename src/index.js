//import _, { divide } from 'lodash';
import './index.css';
//import './tabmenu.css';
import json from './data/freulehuuske.json';
//import epub from './epub.js'

function mainTitle(parent) {
  const heading = parent.appendChild(document.createElement('div'));
  heading.classList.add("heading")
  const span = heading.appendChild(document.createElement('span'));
  span.classList.add("centered")

  const title = span.appendChild(document.createElement('h1'));
  title.classList.add("main-title")
  title.innerText = json.title
  const subtitle = span.appendChild(document.createElement('h2'));
  subtitle.classList.add("sub-title")
  subtitle.innerText = json.subtitle
}

function purpose(parent) {
  for (let i = 0; i < json.purpose.length; i++) {
    const item = json.purpose[i];
    const title = parent.appendChild(document.createElement('h1'));
    title.classList.add("title")
    title.innerText = item.title
    const subtitle = parent.appendChild(document.createElement('p'));
    subtitle.classList.add("subtitle")
    subtitle.innerHTML = item.subtitle;
    const cardContainer = parent.appendChild(document.createElement('div'));
    cardContainer.classList.add('card-container')

    for (let j = 0; j < item.cards.length; j++) {
      const object = item.cards[j];
      const card = cardContainer.appendChild(document.createElement('div'));
      card.classList.add('card')
      card.innerHTML = "<h2>" + object.title + "</h2>"
      if (object.picture) {
        const img = card.appendChild(document.createElement('img'));
        img.classList.add('picture')
      img.src = "./images/" + object.picture
       }
      const desc = card.appendChild(document.createElement('div'));
      desc.innerHTML = "<p>" + object.description + "</p>"

    }
  }
}


const div = document.body.appendChild(document.createElement('div'));
site(div);


function site(div) {
  mainTitle(div)
  const content = div.appendChild(document.createElement('div'));
  content.classList.add("content")
  purpose(content)
  //  hoofdMenu(div)
  //  tabMenu(div)
}