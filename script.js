const redRange = document.getElementById('redRange');
const greenRange = document.getElementById('greenRange');
const blueRange = document.getElementById('blueRange');
const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
const colorPicker = document.getElementById('colorPicker');
const colorDisplay = document.getElementById('colorDisplay');
const hexCode = document.getElementById('hexCode');

function updateColor() {
    const red = redRange.value;
    const green = greenRange.value;
    const blue = blueRange.value;

    redInput.value = red;
    greenInput.value = green;
    blueInput.value = blue;

    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    const hexColor = rgbToHex(red, green, blue);

    colorDisplay.style.backgroundColor = rgbColor;
    hexCode.textContent = hexColor;
    colorPicker.value = hexColor;
}

function updateColorFromInput() {
    const red = redInput.value;
    const green = greenInput.value;
    const blue = blueInput.value;

    redRange.value = red;
    greenRange.value = green;
    blueRange.value = blue;

    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    const hexColor = rgbToHex(red, green, blue);

    colorDisplay.style.backgroundColor = rgbColor;
    hexCode.textContent = hexColor;
    colorPicker.value = hexColor;
}

function updateColorFromPicker() {
    const hexColor = colorPicker.value;
    const rgbColor = hexToRgb(hexColor);

    redRange.value = rgbColor.r;
    greenRange.value = rgbColor.g;
    blueRange.value = rgbColor.b;

    redInput.value = rgbColor.r;
    greenInput.value = rgbColor.g;
    blueInput.value = rgbColor.b;

    colorDisplay.style.backgroundColor = hexColor;
    hexCode.textContent = hexColor.toUpperCase();
}

function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (parseInt(r) << 16) + (parseInt(g) << 8) + parseInt(b)).toString(16).slice(1).toUpperCase()}`;
}

function hexToRgb(hex) {
    let bigint = parseInt(hex.slice(1), 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return { r, g, b };
}

redRange.addEventListener('input', updateColor);
greenRange.addEventListener('input', updateColor);
blueRange.addEventListener('input', updateColor);

redInput.addEventListener('input', updateColorFromInput);
greenInput.addEventListener('input', updateColorFromInput);
blueInput.addEventListener('input', updateColorFromInput);

colorPicker.addEventListener('input', updateColorFromPicker);

updateColor();  // Initial update to set default color
