function trackScroll() {
  var scrolled = window.pageYOffset;
  var coords = document.documentElement.clientHeight;
  if (scrolled > coords) {goTopBtn.classList.add('upshow')}
  if (scrolled > coords) {menuTop.classList.add('menudown')}
  if (scrolled < coords) {goTopBtn.classList.remove('upshow')}
  if (scrolled < coords) {menuTop.classList.remove('menudown')}
}
function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 0);
  }
}
function tgameShow() {
  tgame.classList.add('popupShow');
  popupWindow.classList.add('oknoShow');
}
function tgameHide() {
  tgame.classList.remove('popupShow');
  popupWindow.classList.remove('oknoShow');
}
function burger(){
  if (lst.indexOf(' menu_active') == -1) {
  lst += ' menu_active';
  body.style.overflow = 'hidden';
  } else {
  body.style.overflow = 'auto';
  lst = lst.replace(' menu_active', '');
  }
  mlist.className = lst;
  if (burge.indexOf(' burg_active') == -1) {
  burge += ' burg_active';
  } else {
  burge = burge.replace(' burg_active', '');
  }
  burg.className = burge;
  return false;
}
function faqtoggle(){
  var faqbutton = this.className;
  var faqinfogtoggle = this.parentElement.nextElementSibling.className;
  if (faqbutton.indexOf(' faq-btn-active') == -1){
    faqbutton += ' faq-btn-active';
  } else {
    faqbutton = faqbutton.replace(' faq-btn-active', '');
  }
  this.className = faqbutton;
  if (faqinfogtoggle.indexOf(' faq-info-active') == -1){
    faqinfogtoggle += ' faq-info-active';
  } else {
    faqinfogtoggle = faqinfogtoggle.replace(' faq-info-active', '');
  }
  this.parentElement.nextElementSibling.className = faqinfogtoggle;
  return false
}
var lst = mlist.className;
var burge = burg.className;
var goTopBtn = document.querySelector('.up');
var menuTop = document.querySelector('.menu');
var body = document.querySelector('body');

window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", backToTop);
faqbtn1.addEventListener("click", faqtoggle);
faqbtn2.addEventListener("click", faqtoggle);
faqbtn3.addEventListener("click", faqtoggle);