const inputField = document.getElementById("input-field");
const convertBtn = document.getElementById("convert-btn");
const resultLength = document.getElementById("result-length");
const resultVolume = document.getElementById("result-volume");
const resultMass = document.getElementById("result-mass");

convertBtn.addEventListener("click", function () {
  let value = inputField.value;
  value = Number(value);
  resultLength.textContent = `${value} meters = ${(value * 3.281).toFixed(
    2
  )} feet | ${value} feet = ${(value / 3.281).toFixed(2)} meters`;

  resultVolume.textContent = `${value} liters = ${(value * 0.264).toFixed(
    2
  )} gallons | ${value} gallons = ${(value / 0.264).toFixed(2)} liters`;

  resultMass.textContent = `${value} kilos = ${(value * 2.204).toFixed(
    2
  )} pounds | ${value} pounds = ${(value / 2.204).toFixed(2)} kilos`;
});
