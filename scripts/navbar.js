class MobileNavbar {
  constructor(mobileMenu, navBar, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navBar = document.querySelector(navBar);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }
  handeClick() {
    console.log(this);
    this.navBar.classList.toggle(this.activeClass);
  }
  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }
  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}
const mobileNavbar = new MobileNavbar(".mobile-menu", ".navbar", ".navbar li");
mobileNavbar.init();
