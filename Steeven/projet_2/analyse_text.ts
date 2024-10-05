const le_text : string = "Salut comment ça va";
let len : number = le_text.length;

function words() : void
{
    let mystring = le_text.replaceAll(/[^\w\s]/i, '');
    let mylist = [""];
    //^ = negation, w = mot, s = espaces, i = insensible à la casse
    //On recherche tous charactères spéciaux

    mylist = mystring.split(" ");
    let nb_mots : number = mylist.length;
    console.log("Le texte contient " + nb_mots + " mot(s)");
}

function phrase() : void
{
    let occur : number = 0;
    let nb_phrases : number = 0;

    for(let k = 0; k < len; k++)
    {
        console.log(le_text[k].match(/[a-z]/i));
        if(le_text[k].match(/[a-z]/i))
        {
            occur++;
        }
        if(occur == 2)
        {
            nb_phrases++;
        }
        if(le_text[k] == ".")
        {
            occur = 0;
        }  
    }
    console.log(nb_phrases);
}

function hzchara(arg : string) : void
{
    let occur = 0;
    for(let k = 0; k < len; k++)
    {
        if(le_text[k] == arg)
        {
            occur++;
        }      
    }
    console.log(arg +" apparait "+ occur + " fois dans le texte")
}

function hzword(arg : string) : void
{
    let occur : number = 0;
    let mylist = [""];
    mylist = le_text.split(/[.,\s]/);

    for(let k = 0; k < len; k++)
    {
        if(mylist[k] == arg)
        {
            occur++;
        }
    }
    console.log(arg +" apparait "+ occur + " fois dans le texte");
}

function statsWords() : void
{
    let occur : number = 0;
    let mylist = [""];
    mylist = le_text.split(/[.,\s]/);

    for(let k = 0; k < mylist.length; k++)
    {
        for(let j = 0; j < mylist.length; j++)
        {
            if(mylist[k] == mylist[j])
            {
                occur++;
            }
        }
        console.log(mylist[k] + " apparait " + occur + " fois dans le texte");
        occur = 0;
    }
}