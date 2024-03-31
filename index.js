document.getElementsByTagName("button")[1].onclick = function () {
  let i = 0;

  while (i < 3) {
    i = Math.floor(Math.random() * 4);
    if (i === 0) {
      confirm(
        "I was adopted from Romania at the age of 6" + "\n Fun Fact #1 of 4"
      );
      break;
    } else if (i === 1) {
      confirm(
        "I am an Eagle Scout, my Eagle project was a children's book for the sick kids at a local hospital" +
          "\n Fun Fact #2 of 4"
      );
      break;
    } else if (i === 2) {
      confirm(
        "Turned the children's book I made for my Eagle project into a fully published children's book. My mother was the artist" +
          "\n Fun Fact #3 of 4"
      );
      break;
    } else if (i === 3) {
      confirm(
        "When I was about 9, I won first place for gymnastic floor routine " +
          "during the local special olympics while dealing with having Cerebral Palsy in " +
          "my legs and learning to walk after being in a wheelchair for over 2 years. " +
          "\n Fun Fact #4 of 4"
      );
      break;
    }
  }
};

function toggleMenu() {
  const i = document.getElementById("menu-box");
  const n = document.getElementById("menu-lightbox");
  i.classList.toggle("change");

  if (n.style.display === "block") {
    n.style.display = "none";
  } else {
    n.style.display = "block";
  }
}

let slideIndex = 1;
showSlides(slideIndex);
function changeSlides(n) {
  showSlides((slideIndex += n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let icons = document.getElementsByClassName("ss-icon");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  icons[slideIndex - 1].className += " active";
}
