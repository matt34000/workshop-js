var lg = console.log;
var tab1 = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];



tab1.forEach(function(element){
    lg(element)
});



var contientA = function(element, index, array) {
return element.includes('a');
}
cA = tab1.every(contientA);

lg('contient A : ' + cA);




var contientTiret = function(element, index, array) {
return element.includes('-');
}
cT = tab1.some(contientTiret);

lg('contient tiret : ' + cT);



var contientF = function(element, index, array) {
    return !element.includes('-') && !element.includes(' '); 
  }
cF = tab1.filter(contientF); 
  
lg('ne contient ni tiret ni espace : ' + cF);




lg(

tab1.filter(function(element){
        return element.endsWith('s'); 

}).map(function(element){
        return element.toUpperCase();
}) 


)


