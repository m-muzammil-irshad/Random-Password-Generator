let setLength = 8;
let useUpperCase = false;
let useNumber = false;
let useSymbol = false;
const passRange = document.getElementById("passRange");
const btn = document.getElementById("btn");
const setRangeLength = () => {
    const passRangeValue = document.getElementById("passRangeValue");
    setLength = passRange.value;
    passRangeValue.innerText = setLength; }
passRange.addEventListener("input", setRangeLength);
const passwordStatus = () => {
    const uppercase = document.getElementById("uppercase");
    const number = document.getElementById("numbers");
    const symbol = document.getElementById("symbols");
    useUpperCase = uppercase.checked;
    useNumber = number.checked;
    useSymbol = symbol.checked;
    makePassword(); }
btn.addEventListener("click", passwordStatus);
const makePassword = () => {
    let uppercaseArrray = [];
    let numberArray = [];
    let symbolArray = [];
    let chars = [];
    let password = '';
    for (let i = 97; i <= 122; i++) {
        uppercaseArrray.push(String.fromCharCode(i)); }
    chars = chars.concat(uppercaseArrray);
    if (useUpperCase) {
        uppercaseArrray = [];
        for (let i = 65; i <= 90; i++) {
            uppercaseArrray.push(String.fromCharCode(i));}
        chars = chars.concat(uppercaseArrray);
    }if (useNumber) {
        numberArray = [];
        for (let i = 0; i <= 9; i++) {
            numberArray.push(i); }
        chars = chars.concat(numberArray);
    }if (useSymbol) { symbolArray = ["!", "#", "$", "%", "&", "*", "(", ")", "@", "^", "_", "+"];
        chars = chars.concat(symbolArray); }
        for (let i = 0; i < setLength; i++) {
        const RandPick = Math.floor(Math.random()*chars. length);
        password += chars[RandPick]; }
    const passwordEl = document.getElementById("password");
    passwordEl.innerText = password; };
const copyAction = () => {
    const passwordText = document.getElementById("password");
    navigator.clipboard.writeText(passwordText.innerText)
    Toastify({text: "✔ Password is copied.",
        duration: 1500,
        gravity: "top",
        position: "center",
        backgroundColor: "red", }).showToast(); };
const copyIcon = document.getElementsByClassName("fa-copy")[0];
copyIcon.addEventListener("click", copyAction);
