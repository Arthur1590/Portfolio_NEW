// header scrolled => {}
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (this.window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//burger menu =>{

const burgerMenu = document.querySelector(".menu");
const headerNavList = document.querySelector(".header__nav-list");
burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("active");
  headerNavList.classList.toggle("active");
});

// section #hero - hero__content--more

const goLink = document.querySelector(".link__more");
goBack = document.querySelectorAll(".link__back");
const sectionContent = document.querySelector(".hero"),
  hiddenDetails = document.querySelector(".hero__more");

goLink.addEventListener("click", function () {
  sectionContent.classList.add("active");
  hiddenDetails.classList.add("active");
});

goBack.forEach((el) => {
  el.addEventListener("click", function () {
    sectionContent.classList.remove("active");
    hiddenDetails.classList.remove("active");
  });
});

// sec hero__more parallax =>

class ParallaxMove {
  constructor(el) {
    this.moveSection = document.querySelector(el);
    this.moveEl = this.moveSection.querySelectorAll(".parallax__decor");
    this.moveSection.addEventListener("mousemove", (e) => this.moveItem(e));
  }
  moveItem(e) {
    this.moveEl.forEach((item) => {
      const speed = item.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerWidth - e.pageY * speed) / 100;
      item.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
}

const parallaxMove = new ParallaxMove(".hero__more");
// hero__main parallax

class ParallaxMove2 extends ParallaxMove {
  constructor(el) {
    super(el);
  }
  moveItem(e) {
    this.moveEl = this.moveSection.querySelectorAll(".e");
    super.moveItem(e);
  }
}

const pic = new ParallaxMove2(".main__hero");

// scroll hero__content

class ScrollElem {
  constructor(section) {
    this.section = document.querySelector(section);
    window.addEventListener("scroll", () => this.fadeRight(this.section));
  }
  fadeRight(section) {
    const fadeRight = section.querySelectorAll(".fade");
    fadeRight.forEach((card) => {

      if (scrollY >= section.offsetTop - section.offsetHeight - 390) {
        card.classList.add("showContent");
      } else {
        card.classList.remove("showContent");
      }
    });
  }
}
const fadeInOnScroll = new ScrollElem(".citate");


