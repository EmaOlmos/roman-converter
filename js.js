const btn = document.getElementById("convert-btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.getElementById("number");
  const intInput = parseInt(input.value);
  const result = document.getElementById("res");

  result.classList.remove("hidden");
  input.value = "";

  if (!intInput) {
    result.textContent = "Please enter a valid number";
    return;
  }
  if (intInput < 0) {
    result.textContent = "Please, enter a number greater than or equal to 1";
    return;
  }
  if (intInput > 3999) {
    result.textContent = "Please, write a number less than or equal to 3999";
    return;
  }

  result.textContent = convertToRoman(intInput);
});

const convertToRoman = (num) => {
  const roman = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ],
    value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let res = "";

  for (let i = 0; num > 0; i++) {
    while (num >= value[i]) {
      res += roman[i];
      num -= value[i];
    }
  }
  return res;
};
