const whatsApp = () => {
  let whatsappWrap = document.querySelector('.whatsapp-wrapper');
  let offset = 150;
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > offset) {
      whatsappWrap.classList.add('active-progress');
    } else {
      document
        .querySelector('.whatsapp-wrapper')
        .classList.remove('active-progress');
    }
  });
  whatsappWrap.addEventListener('click', function (event) {
    event.preventDefault();
    window.open('https://wa.me/923076078089', '_blank');
    return false;
  });
};

export default whatsApp;
