const lengthSlider = document.querySelector(".pass-length input");

const updateSlider = () => {
    // passing slider value as counter text
    document.querySelector(".pass-length span").innerText = lengthSlider.value;
}

updateSlider()

lengthSlider.addEventListener("input", updateSlider);
