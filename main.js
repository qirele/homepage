

function showNav(){
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
}


function showMeme(){
  const triggerImg = document.querySelectorAll('.memeHeight');
  const modal = document.querySelector('#myModal');
  const modalImg = document.querySelector('#img01');
  const nav = document.querySelector('nav');

  triggerImg.forEach((object) => {
    object.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = object.src;
      nav.style.display = 'none';
    });
  });

  var span = document.querySelector('#closeButton');
  span.addEventListener('click', () => {
    modal.style.display = 'none';
    nav.style.display = 'flex';
  });

}



document.addEventListener('DOMContentLoaded', () => {
  showNav();
  if (document.title === "Gallery")
    showMeme();
});

