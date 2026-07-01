const sendingDialogWrapper = document.getElementById("sendingDialogWrapper");

// Contact Form 7 のフォーム要素を取得
const contactForm = document.querySelector(".wpcf7-form");

// 送信ボタンが押されたときのイベントリスナー
contactForm.addEventListener("submit", function (event) {
  sendingDialogWrapper.classList.remove("hidden");
});

// 送信完了（失敗）イベント
document.addEventListener(
  "wpcf7mailfailed",
  function (event) {
    sendingDialogWrapper.classList.add("hidden");
  },
  false
);

// バリデーション失敗イベント
document.addEventListener(
  "wpcf7invalid",
  function (event) {
    sendingDialogWrapper.classList.add("hidden");
  },
  false
);
