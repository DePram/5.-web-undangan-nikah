// countdown
simplyCountdown(".countdown", {
  year: 2025, // required
  month: 6, // required
  day: 28, // required
  hours: 5, // Default is 0 [0-23] integer
  words: {
    //words displayed into the countdown
    days: { singular: "hari", plural: "hari" },
    hours: { singular: "jam", plural: "jam" },
    minutes: { singular: "menit", plural: "menit" },
    seconds: { singular: "detik", plural: "detik" },
  },
});

// bug overflow
const hamburger = document.querySelector(".navbar-toggler");
const stickyTop = document.querySelector(".sticky-top");
const close = document.querySelector(".offcanvas");

hamburger.addEventListener("click", function () {
  stickyTop.style.overflow = "visible";
});

close.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});

// fitur scroll disable
const rootElement = document.querySelector(":root");
function disableScroll() {
  scrollTop = window.scrollY || document.documentElement.scrollTop;
  scrollLeft = window.scrollX || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };

  rootElement.style.scrollBehavior = "auto";
}

function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  localStorage.setItem("opened", "true");
}

if (!localStorage.getItem("opened")) {
  disableScroll();
}
// form
window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Konfirmasi Berhasil terkirim!");
    });
  });
});
