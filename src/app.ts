interface PasswordOptions {
    length: number;
    useUpperCase : boolean;
    useLowerCase : boolean;
    useNumber : boolean;
    useSymbol : boolean;

}


function generatorPasswords(options: PasswordOptions){
    let charset ="";
    let password = "";

    if(options.useUpperCase) charset +="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(options.useLowerCase) charset +="abcdefghijklmnopqrstuvwxyz";
    if(options.useNumber) charset +="0123456789";
    if(options.useSymbol) charset +="!@#$%^&*()_+[]{}|;:,.<>?";

    if(charset ==="")  charset ="abcdefghijklmnopqrstuvwxyz";

for(let i = 0; i < options.length; i++){
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
}

return password;
}

function handlePasswordGeneration(event: Event):void{

    event.preventDefault(); 

    const selectedRadio = document.querySelector('input[name="longueurPassword"]:checked') as HTMLInputElement;
    const longueurPassword = selectedRadio ? parseInt(selectedRadio.value) : null;
    const input = document.querySelector('#myPass') as HTMLInputElement;


    if(longueurPassword){

        const passwordOptions : PasswordOptions = {
            length: longueurPassword,
            useUpperCase:true,
            useLowerCase:true,
            useNumber:true,
            useSymbol:true
        }
        const generatedPassword = generatorPasswords(passwordOptions);
        console.log("Mot de passe généré : " + generatedPassword);
        input.value = generatedPassword;
    }
}



// Exercice 2

function analyseText(text: string): void {
    const mots: string[] = text.split(/\s+/); 
    const nombreMots: number = mots.length; 

    const phrases: string[] = text.split(/[.!?]/);
    const nombrePhrases: number = phrases.length;

    const frequenceLettre: { [key: string]: number } = {};

    for (let char of text) {
        char = char.toLowerCase();
        if (char >= 'a' && char <= 'z') {
            if (frequenceLettre[char]) {
                frequenceLettre[char] += 1;
            } else {
                frequenceLettre[char] = 1;
            }
        }
    }

    console.log("Analyse du texte :");
    console.log(`Nombre de mots : ${nombreMots}`);
    console.log(`Nombre de phrases : ${nombrePhrases}`);
    console.log("Fréquence des lettres :", frequenceLettre);
}

const text: string = "Ceci est un exemple de texte. Ce texte sert à analyser les mots et les phrases.";
analyseText(text);
