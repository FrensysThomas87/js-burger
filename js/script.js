var checkboxes = document.getElementById('checkbox-container').getElementsByTagName('input');

// console.log(checkboxes);

var somma = 0;

document.getElementsByTagName('button')[0].addEventListener("click", function(){

var totalPrice = document.getElementById('total-container').getElementsByTagName('span')[0];

//Ad ogni click del pulsante riporto la somma a zero
somma = 0;

console.log(somma);
for(var i = 0; i < checkboxes.length; i++){
  //Qui faccio in modo che la somma venga ricalcolata in base agli elementi chekkati
  if(checkboxes[i].checked){
    somma += parseInt(checkboxes[i].value);
  }
}
totalPrice.innerText = '$ ' + somma;

}




);
