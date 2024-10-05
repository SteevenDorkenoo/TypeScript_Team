
let attente : any = [];
let ticket : number = 0;

interface Client
{
    Nom : string;
    n_ticket : number;
    Vip : string;
}

console.log("\n=== Bonjour et bienvenue dans ce simulateur de liste d'attente ===");

main();

function main() : void
{
    let action : any;
    action = prompt("\nQuelle sera votre prochaine action ?" +
    "\nEtat de la file d'attente : e   ---   Arrivée d'un client : a   ---   Recevoir un client : r" +
    "\nFin de simulation : f");

    if(action == "e")
    {
        etat();
    }
    else if(action == "a")
    {
        add_client();
    }
    else if(action == "r")
    {
        avance();
    }
    else if(action == "f")
        {
            return;
        }
    else
    {
        console.log("Erreur, Instruction non comprise : veuillez Réesayez");
        main();
    }
    return;
}

function etat() : void
{
    if(!attente[0])
    {
        console.log("\n Il n'y a personne...")
    }
    else
    {
        for(let k = 0;k in attente; k++)
        {
            console.log(attente[k].Nom + "\nPosition dans la file : " + Number(k)+1 +"\nNuméro client : " +  attente[k].n_ticket);
        }
    }
    return main();
}

function avance() : void
{
    console.log(attente[0].Nom + "A été reçu. \n Au suivant !");
    attente.shift();
    return main();
}

function add_client() : void
{
    let name : any = prompt("\nQuel est ton nom ?");

    let vip : any = prompt("\nAvez vous le pass prioritaire ? \n y = oui  |  n = non");

    while(!(vip == "y" || vip == "n"))
    {
        vip = prompt("\nEntrée incorrecte veuillez réesayer ? \n y = oui  |  n = non");
    }

    ticket++;

    let new_client = {
        Nom : name,
        n_ticket : ticket,
        Vip : vip,
    };

    if(new_client.Vip == "n")
    {
        attente.push(new_client);
    }
    else
    {
        attente.unshift(new_client);
    }
    return main();
}