var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  let closePopup = document.querySelector(".popup-close"),
  showPopupButton = document.querySelector(".popup-button"),
  popup = document.querySelector(".popup"),
  popupBody = document.querySelector(".popup-body");

//show button
showPopupButton.onclick = function () {
  popup.classList.add("active");
};
//hide button

//hide on click parent
popup.onclick = function () {
  popup.classList.remove("active");
};

//stop propagation from child
popupBody.onclick = function (e) {
  e.stopPropagation();
};


     