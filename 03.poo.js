
var lg = console.log;

function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return 'nom : ' + this.nom + ' prenom : ' + this.prenom + ' pseudo : ' + this.pseudo;
    }
    this.getInitiales = function () {
        return 'Initiales : ' + this.nom.charAt(0) + ' ' + this.prenom.charAt(0);
    }
}

function afficherPersonne(Personne) {
    lg('nom : ' + Personne.nom + ' prenom : ' + Personne.prenom + ' pseudo : ' + Personne.pseudo);
}


var p1 = new Personne('LE MAIRE', 'Jules', 'jules77');

var p2 = new Personne('LE MAIRE', 'Paul', 'paul44');

//lg(p1);

//lg(p1.getNomComplet());

//lg(p1.nom);

//lg(p2.pseudo);

afficherPersonne(p1);

p1.pseudo = 'jules44';

afficherPersonne(p1);

lg(p1.age);

Personne.prototype.age = 'NON RENSEIGNE';

lg(p1.age);

p1.age = 30;

lg(p1);

lg(p1.getInitiales());


var p3 = {
    nom: 'LEPREFET',
    prenom: 'Robert',
    pseudo: 'robert77',
};

afficherPersonne(p3);


function Client(nom, prenom, pseudo, numeroclient) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.numeroclient = numeroclient;
    this.getInfos = function () {
        return 'nom : ' + this.nom + ' prenom : ' + this.prenom + ' numeroclient : ' + this.numeroclient;
    }
}

Client.call('robert');

var c1 = new Client('LUCAS', 'Steve', 'steve44', 'A01');

afficherPersonne(c1);

lg(c1.numeroclient);

lg(c1.getInfos());

