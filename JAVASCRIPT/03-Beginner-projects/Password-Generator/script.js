// Variables to use
const passwordLength = 18;
const lowerCase = true;
const upperCase = true;
const includeNumbers = true;
const includeSymbols = true;

// generating password
function generatePassword(length, lowerCase, upperCase, includeNumbers, includeSymbols) {
    
    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789"
    const symbols = "#$%^&<>?*|@_!`~"

    let allowedChars = ""
    let password = ""

    allowedChars += lowerCase ? lowercase : "";
    allowedChars += upperCase ? uppercase : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols: "";

    if (length !== 18) {
        return `(password length must be exactly 18 characters)`;
    }
    if (allowedChars.length === 0) {
        return `(At least 1 set of character needs to be selected)`;
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}


function handleGeneratePassword() {
    const passwordInput = document.getElementById("generated-password");
    const password = generatePassword(passwordLength, lowerCase, upperCase, includeNumbers, includeSymbols);
    passwordInput.value = password;
} 

// Add click event listener
Generate = document.getElementById("generate-password").addEventListener("click", handleGeneratePassword);