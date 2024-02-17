function clickValue(num) {
  document.querySelector("#js-cal-display").value += num;
}

function clickAC() {
  document.querySelector("#js-cal-display").value = "";
}

function delNum() {
  document.querySelector("#js-cal-display").value = document
    .querySelector("#js-cal-display")
    .value.toString()
    .slice(0, -1);
}

function calculation() {
  document.querySelector("#js-cal-display").value = eval(
    document.querySelector("#js-cal-display").value
  );
}
