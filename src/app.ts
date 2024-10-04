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


