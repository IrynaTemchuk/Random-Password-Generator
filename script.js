const lengthSlider = document.querySelector(".pass-length input"),
options = document.querySelectorAll(".option input"),
generateBtn = document.querySelector(".generate-btn");

const characters = {
    // object of letters, numbers & symbols
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}

const generatePassword = () => {
    let staticPassword = "",
    randomPassword = "",
    excludeDuplicate = false,
    passLength = lengthSlider.value;

    options.forEach(option => {
        if(option.checked) { // if checkbox is checked
            // if checkedbox id isn't exc-duplicate && spaces
            if(option.id !== "ex-dublicate" && option.id !== "spaces") {
                // adding particular key value from character object to staticPassword
                staticPassword += characters[option.id];
            } else if(option.id !== "spaces") { // if checkbox id is spaces
                staticPassword += `  ${staticPassword}  `; // adding space at the beggining & end of staticPassword
            } else { // else pass true value to excludeDuplicate
                excludeDuplicate = true;
            }
        }
    });

    for (let i = 0; i < passLength; i++) {
        // getting random character from the static password
        let randomChar = staticPassword += staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if(excludeDuplicate) { // if excludeDuplicate is true
            // if randomPassword doesn't contains the current random character or randomChar is equal 
            // to space " " then add random character to randomPassword else decrement i by -1
            !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
        } else { // else add random character to randomPassword
            randomPassword += randomChar;
        }
    }


}

const updateSlider = () => {
    // passing slider value as counter text
    document.querySelector(".pass-length span").innerText = lengthSlider.value;
}

updateSlider();

lengthSlider.addEventListener("input", updateSlider);

generateBtn.addEventListener("clisk", generatePassword);