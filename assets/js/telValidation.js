const alertMsg = "電話番号が不正です。";

// いたずらとみなす個人識別番号
const ngIdentifiedNumbers = [
  "00000000",
  "11111111",
  "22222222",
  "33333333",
  "44444444",
  "55555555",
  "66666666",
  "77777777",
  "88888888",
  "99999999",
  "12345678",
  "23456789",
  "98765432",
  "87654321",
  "01234567",
  "0000000",
  "1111111",
  "2222222",
  "3333333",
  "4444444",
  "5555555",
  "6666666",
  "7777777",
  "8888888",
  "9999999",
  "0123456",
  "1234567",
  "9876543",
];

const correctPreNumbers = [
  "090",
  "080",
  "070",
  "060",
  "050",
  "040",
  "030",
  "020",
  "010",
];

const isMischief = (targetNumber) => {
  let isMischief = false;

  //入力した電話番号を整形
  let formattedTel = formatTel(targetNumber);

  // 市外局番 or 0X0番号
  const preNumber = formattedTel.split("-")[0];
  // 個別識別番号
  const idetifiedNumber =
    formattedTel.split("-")[1] + formattedTel.split("-")[2];

  // 電話番号（ハイフンなし）
  const telExcludedpyhen = preNumber + idetifiedNumber;

  if (telExcludedpyhen.indexOf("NaN") >= 0) {
    isMischief = true;
  }

  // 10, 11桁以外不正
  if ([10, 11].includes(telExcludedpyhen.length) == false) {
    isMischief = true;
  }

  // 0X0 で始まるならば
  if (correctPreNumbers.includes(preNumber) == true) {
    if (idetifiedNumber.length != 8) {
      isMischief = true;
    }
  }

  // 個人識別番号がいたずらとみなす個人識別番号に含まれる
  if (ngIdentifiedNumbers.includes(idetifiedNumber)) {
    isMischief = true;
  }

  return isMischief;
};

// 整形関数
let formatTel = function (value) {
  return new libphonenumber.AsYouType("JP").input(value);
};

// -----------------------------
// 入力エリア離脱時
// -----------------------------

window.addEventListener("load", function () {
  const inputTel = document.getElementById("your-phone"); //＝電話番号の入力欄

  if (!inputTel) {
    return;
  }
  //電話番号の入力欄から離れたら発動
  inputTel.addEventListener("blur", () => {
    // 入力した電話番号を取得
    let postdata = inputTel.value;

    // 入力がないならば何もしない
    if (postdata == "") return;

    if (isMischief(postdata)) {
      window.alert(alertMsg);
      inputTel.style.color = "red";
    } else {
      inputTel.style.color = "#222";
    }

    //入力した電話番号を整形
    let formattedTel = formatTel(postdata);

    // 整形した電話番号を入力欄に出力
    inputTel.value = formattedTel;
  });
});

const myButton = document.getElementById("formButton");

myButton.addEventListener("click", (e) => {
  // デフォルトのイベントをキャンセル
  const inputTel = document.getElementById("your-phone"); //＝電話番号の入力欄

  // 入力した電話番号を取得
  let postdata = inputTel.value;

  if (isMischief(postdata)) {
    window.alert(alertMsg);
    e.preventDefault();
  }
});
