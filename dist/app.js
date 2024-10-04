function generatorPasswords(options) {
    var charset = "";
    var password = "";
    if (options.useUpperCase)
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.useLowerCase)
        charset += "abcdefghijklmnopqrstuvwxyz";
    if (options.useNumber)
        charset += "0123456789";
    if (options.useSymbol)
        charset += "!@#$%^&*()_+[]{}|;:,.<>?";
    if (charset === "")
        charset = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < options.length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
function handlePasswordGeneration(event) {
    event.preventDefault();
    var selectedRadio = document.querySelector('input[name="longueurPassword"]:checked');
    var longueurPassword = selectedRadio ? parseInt(selectedRadio.value) : null;
    var input = document.querySelector('#myPass');
    if (longueurPassword) {
        var passwordOptions = {
            length: longueurPassword,
            useUpperCase: true,
            useLowerCase: true,
            useNumber: true,
            useSymbol: true
        };
        var generatedPassword = generatorPasswords(passwordOptions);
        console.log("Mot de passe généré : " + generatedPassword);
        input.value = generatedPassword;
    }
}
