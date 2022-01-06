//import _, { divide } from 'lodash';

import json from './data/freulehuuske.json';
//import epub from './epub.js'

import './index.css';

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

function test(parent) {
  for (let i = 0; i < json.sections.length; i++) {
    const item = json.sections[i];
    const section = parent.appendChild(document.createElement('section'));
    section.classList.add("section")
    const titles = section.appendChild(document.createElement('div'));
    titles.classList.add("section-titles")
    const title = titles.appendChild(document.createElement('div'));
    title.classList.add("section-title")
    title.innerText = "section title"
    const subtitle = titles.appendChild(document.createElement('div'));
    subtitle.classList.add("section-subtitle")
    subtitle.innerText = "section subtitle"

    const columns = section.appendChild(document.createElement('div'));
    columns.classList.add('columns')

    for (let j = 0; j < item.cards.length; j++) {
      const object = item.cards[j];

      const card = columns.appendChild(document.createElement('div'));
      card.classList.add('card')
      const title = card.appendChild(document.createElement('div'));
      title.classList.add('card-title')
      title.innerText = "title" + j
      const img = card.appendChild(document.createElement('div'));
      img.classList.add('card-image')
      img.innerText = "imaage" + j
      const desc = card.appendChild(document.createElement('div'));
      desc.classList.add('card-description')
      desc.innerText = "desc" + j

    }
  }
}

function section(parent) {
  for (let i = 0; i < json.sections.length; i++) {
    const item = json.sections[i];
    const section = parent.appendChild(document.createElement('section'));
    section.classList.add("section")
    const container = section.appendChild(document.createElement('div'));
    container.classList.add("container")
    const title = container.appendChild(document.createElement('h1'));
    title.classList.add("title")
    title.innerText = item.title
    const subtitle = container.appendChild(document.createElement('h2'));
    subtitle.classList.add("subtitle")
    subtitle.innerHTML = item.subtitle;
    const columns = container.appendChild(document.createElement('div'));
    columns.classList.add('columns')

    for (let j = 0; j < item.cards.length; j++) {
      const object = item.cards[j];
      const column = columns.appendChild(document.createElement('div'));
      column.classList.add('column')
      const card = column.appendChild(document.createElement('div'));
      column.classList.add('card')
      const card_title = card.appendChild(document.createElement('h1'));
      card_title.classList.add('card-header')
      card_title.innerText = object.title
      if (object.picture) {
        const img = card.appendChild(document.createElement('img'));
        img.classList.add('card-image')
        img.src = "./images/" + object.picture
      }
      const cardDescription = card.appendChild(document.createElement('div'));
      cardDescription.classList.add('card-content')
      cardDescription.innerHTML = "<p>" + object.description + "</p>"

    }
  }
}


const div = document.body.appendChild(document.createElement('div'));
site(div);



function site(div) {

 test(div)
  // mainTitle(div)
  const content = div.appendChild(document.createElement('div'));
  content.classList.add("content")
  // section(content)
  //  hoofdMenu(div)
  //  tabMenu(div)
}