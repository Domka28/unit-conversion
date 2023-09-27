/*
*/
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const button = document.getElementById("button")
const input = document.getElementById("input")


button.addEventListener("click", function () {
    let num = input.value;
    input.value = "";
    const feet = num * 3.281;
    const meter = num * 0.3048;
    const liter = num * 3.785;
    const gallon = num * 0.264;
    const kilogram = num * 0.45359237;
    const pound = num * 2.204;
    length.textContent = `${num} meters = ${feet.toFixed(2)} feet | ${num} feet = ${meter.toFixed(2)} meters`
    volume.textContent = `${num} liters = ${gallon.toFixed(2)} gallons | ${num} gallons = ${liter.toFixed(2)} liters`
    mass.textContent = `${num} kilos = ${pound.toFixed(2)} pounds | ${num} pounds ${kilogram.toFixed(2)} kilos`
})



