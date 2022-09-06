'use strict'

const seriesDB = {
  series: [
    'Marvel',
    'The Final Legacy',
    'Ertugrul',
    'Magnificent Century',
    'The Great Seljuks: Guardians...',
  ],
}

 const promoAdvImg = document.querySelectorAll(".promo__adv img"),
 promoGenre = document.querySelector(".promo__genre"),
 promoBg = document.querySelector(".promo__bg"),
 list = document.querySelector(".promo__interactive-list");

 promoAdvImg.forEach((item) => {
  item.remove()
 })

 promoGenre.innerHTML ="COMEDY";
 promoGenre.style.color ="red";
 promoBg.style.backgroundImage = `url("img/1.jpg")`;
 
 list.innerHTML = "";
 seriesDB.series.forEach((item, number) => {
  list.innerHTML +=`
  <li class="promo__interactive-item">
    ${number + 1}. ${item}
  <div class="delete"></div>
</li>`
 })