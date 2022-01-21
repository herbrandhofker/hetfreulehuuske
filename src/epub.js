
import './epub.css';
export default function epub(parent, name, aantal, extension) {
  const epubContainer = parent.appendChild(document.createElement('div'));
  epubContainer.classList.add("epub-container")
  const epubMenu = parent.appendChild(document.createElement('div'));
  epubMenu.classList.add("epub-menu")

  for (let i = 1; i <= aantal; i++) {
    const slides = epubContainer.appendChild(document.createElement('div'));
    slides.classList.add("mySlides","fade")
    const img = slides.appendChild(document.createElement('img'));
    const src = "./data/" + name + "/" + getImageId(i) + "." + extension;
    img.src = src;
    img.style = "width:100%";
    img.loading = "lazy";

    const span = epubMenu.appendChild(document.createElement('span'));
    span.classList.add("dot");
    span.addEventListener("click", () => currentSlide(epubContainer,i))
  }

  const prev = epubContainer.appendChild(document.createElement('a'));
  prev.classList.add("epub-prev")
  prev.addEventListener("click", () => plusSlides(epubContainer,-1))
  prev.innerHTML = "&#10094;"

  const next = epubContainer.appendChild(document.createElement('a'));
  next.classList.add("epub-next")
  next.innerHTML = "&#10095;"
  next.addEventListener("click", () => plusSlides(epubContainer,+1))

  var slideIndex = 1;
  showSlides(epubContainer,slideIndex);


  function getImageId(i) {
    let number = i;
    if (number < 10)
      return '0' + number;
    return number;
  }



  function plusSlides(parent,n) {
    showSlides(parent,slideIndex += n);
  }

  function currentSlide(parent,n) {
    showSlides(parent,slideIndex = n);
  }

  function showSlides(parent,n) {
    const slides = parent.getElementsByClassName("mySlides");

    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
}
