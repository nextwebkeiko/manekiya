"use strict";
jQuery(function (c) {
  console.log("Linking Customer Rings"),
    c(document).on("wpcf7mailsent", () => {
      var e = "&lp-type=" + c(location).attr("pathname").replaceAll("/", ""),
        t = c(location)
          .attr("search")
          .match(/inflow-route=[^&]*/);
      let r = "",
        n =
          (t && (r = "&" + t[0]),
          "&" +
            c("form")
              .serialize()
              .replace(/_wpcf7[^=]*=[^&]*&/g, "")
              .replace(/&s=[^&]*/, "")
              .replace(
                "subscribe-newsletter" + encodeURI("[]"),
                "subscribe-newsletter"
              )
              .replace(
                encodeURI("フランチャイズサロンからのメルマガを希望する"),
                "true"
              )
              .replace(/is-insurance=[^&]+/, "is-insurance=true"));
      -1 === n.indexOf("subscribe-newsletter=") &&
        (n += "&subscribe-newsletter=false");
      t = e + r + n;
      const a =
        c(location).attr("origin") +
        "/" +
        c(location).attr("pathname").replaceAll("/", "") +
        "/thanks/";
      c.ajax({
        url: "https://q.c-rings.net/?enq=bCI1gN3S0Fc%3d" + t,
        type: "GET",
      }).always(() => {
        location.href = a;
      });
    });
});
