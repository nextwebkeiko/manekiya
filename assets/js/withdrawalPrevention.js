"use strict";
const INPUT_ELEMENT_NAMES = [
  "your-company",
  "your-jobtitle",
  "your-name",
  "your-ruby",
  "your-dob",
  "your-email",
  "your-zip",
  "your-address",
  "your-phone",
];
$(() => {
  function n() {
    var e = window.scrollY;
    "none" !== $("#preventDialogWrapper").css("display")
      ? window.history.back()
      : ($("#preventDialogWrapper").show(),
        localStorage.setItem("POSITION_Y", e));
  }
  history.pushState(null, null, null),
    $(document).ready(() => {
      function e() {
        this.initialize();
      }
      var t;
      (t = $),
        (e.prototype = {
          _initialize: function () {
            history.replaceState("beforeunload", null, null),
              history.pushState(null, null, null),
              t(window).on("popstate", t.proxy(this.popstate, this));
          },
          get initialize() {
            return this._initialize;
          },
          set initialize(e) {
            this._initialize = e;
          },
          popstate: function (e) {
            "beforeunload" === e.originalEvent.state && n();
          },
          pushstate: function (e) {
            "beforeunload" === e.originalEvent.state && n();
          },
        }),
        new e();
    }),
    $("#answerBack").on("click", function () {
      $("#preventDialogWrapper").hide(), history.pushState(null, null, null);
    });
}),
  (window.onbeforeunload = (e) => {
    var t = !1;
    if (
      (INPUT_ELEMENT_NAMES.map((e) => {
        null !== document.getElementsByName(e)[0] &&
          void 0 !== document.getElementsByName(e)[0] &&
          0 < document.getElementsByName(e)[0].value.length &&
          (t = !0);
      }),
      t)
    )
      return " ";
  }),
  $(document).on("click touchend", function (e) {
    $(e.target).closest(".prevent_dialog").length ||
      ("prevent_dialog_wrapper" === e.target.className &&
        ($(".prevent_dialog_wrapper").hide(),
        history.pushState(null, null, null)));
  }),
  window.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      var e = localStorage.getItem("POSITION_Y");
      null !== e &&
        ((document.documentElement.scrollTop = e),
        localStorage.removeItem("POSITION_Y"));
    });
  });
