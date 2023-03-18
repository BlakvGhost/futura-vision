import messages from "./messages";
import session from "./session";

function utils(self) {
  self.$toastr = function (msg, title, type) {
    window.toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-top-right",
      preventDuplicates: true,
      onclick: null,
      showDuration: "700",
      hideDuration: "1000",
      timeOut: "5000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };
    window.toastr[type](title, msg);
  };
  self.$animate = function () {
    new fJs.Intersection({
      elt: '.fvSlideOn',
      class: "animate__animated animate__fadeInDown opacity-100",
      root: null,
      ratio: 0.2,
      rootMargin: '0px',
      threshold: 0.7,
    });
  },
    self.$owl = function (nd) {
      $(nd).owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplaySpeed: 1500,
        autoplayTimeout: 10000,
        autoHeight: true,
        responsive: {
          1279: {
            items: 1
          },
          1250: {
            items: 1
          },
          600: {
            items: 1
          }
        }
      });
    }
}

export default function globalVariable(context) {
  messages(context);
  session(context);
  utils(context);
}