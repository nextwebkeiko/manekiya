const element = document.getElementById("urlParameter");
const params = document.location.search;
console.log(params);
// elementのvalueに設定
element.value = params;
