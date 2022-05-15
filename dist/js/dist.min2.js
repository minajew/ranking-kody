const month = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

const d = new Date();
let monthName = month[d.getMonth()];




if (window.location.href.indexOf('gclid=') != -1) {
  document.title = `Ranking bukmacherów ${monthName} 2022 - ofertatop.pl`;


}

"use strict";
var btnCode = document.querySelectorAll(".btnaction"),
  btnCopy = (btnCode.forEach(function (e) {
    e.addEventListener("click", function (e) {
      e.preventDefault();
      var e = e.target,
        t = e.parentElement.querySelector(".btncode").textContent.trim(),
        n = document.createElement("textarea");
      n.id = "temp_element", n.style.height = 0, document.body.appendChild(n), n.value = t;
      document.querySelector("#temp_element").select(), document.execCommand("copy"), document.body.removeChild(n);
      var t = e.dataset.link,
        n = document.createElement("a"),
        o = (n.href = "https://dobre-typy.pl/", n.classList.add("btn"), n.textContent = "Odbierz typy", n.addEventListener('click', () => {
          dataLayer.push({
            'event': 'odbierz-typy'
          });
        }), n.target = "_blank", n.ref = "nofollow noreferrer", document.createElement("a")),
        t = (o.href = t, o.classList.add("btn", "registration"), o.addEventListener('click', () => {
          dataLayer.push({
            'event': 'klik_rejestracja'
          });
        }), o.textContent = "Odbierz bonus", o.target = "_blank", o.ref = "nofollow noreferrer", e.parentElement);
      t.querySelector(".btncode").remove(), e.remove(), t.appendChild(n), t.appendChild(o)
    })
  }), document.querySelectorAll(".btncopy"));
btnCopy.forEach(function (e) {
  e.addEventListener("click", function (e) {
    e.preventDefault();
    var t = e.target,
      e = t.parentElement.querySelector(".btncode").textContent.trim(),
      n = document.createElement("textarea");
    n.id = "temp_element", n.style.height = 0, document.body.appendChild(n), n.value = e, document.querySelector("#temp_element").select(), document.execCommand("copy"), document.body.removeChild(n), t.textContent = "Kod skopiowany", setTimeout(function () {
      t.textContent = "Skopiuj kod"
    }, 2500)
  })
});

let getCode = document.getElementsByClassName('btnaction');


for (let i = 0; i < getCode.length; i++) {
  getCode[i].addEventListener('click', function () {
    dataLayer.push({
      'event': 'kod pobrany'
    });


  });
}