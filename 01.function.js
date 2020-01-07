//console.log("01 - Fonctions");

var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1,nb2) {
        return nb1 + nb2;
}

var resultat1 = additionner(nombre1, nombre2);
console.log('resultat1 : ' + resultat1);

var somme = additionner(nombre1, nombre2);
var resultat2 = somme;
console.log('resultat2 : ' + resultat2);


function multiplication(nb1,nb2) {
    return nb1 * nb2;
}
var resultat3 = multiplication(nombre1, nombre2);
console.log('resultat3 : ' + resultat3);


function afficherOperation(nomOperation,nb1,nb2) {
    
    var resu;
    if (nomOperation == 'additionner') {
        resu = additionner(nb1,nb2);
    }
    else if (nomOperation == 'multiplication') {
        resu = multiplication(nb1,nb2);
    }
    else if (nomOperation == 'soustraction') {
        resu = nb1 - nb2;
    }

    console.log('<' + nomOperation + '>(<' + nb1 + '>, <' + nb2 + '>) = <' + resu + '>');
}

afficherOperation('additionner',20,40);
afficherOperation('multiplication',10,20);
afficherOperation('soustraction',15,5);






