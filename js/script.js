var checkboxes = document.getElementById('checkbox-container').getElementsByTagName('input');
var burgerName = document.getElementsByTagName('input')[0];
var coupon = document.getElementsByTagName('input')[7];
var totalPrice = document.getElementById('total-container').getElementsByTagName('strong')[1];

var discount = 20;
var sommaScontata = 0;

//Somma dell'hamburger base
var baseHamburgerCost = 3;
var somma = 0;

//Variabile che mi che mi controlla quanti elementi sono stati selezionati
var checkedElementsCounter = 0;

//Lista coupon sconto
var couponList = ['123ABCDE', '456FGHI', '890BVCDF'];


//INIZIO FUNZIONE CLICK PULSANTE
document.getElementsByTagName('button')[0].addEventListener("click", function(){

//Recupero il valore di burgerName quando clicco sul pulsante
burgerName = document.getElementsByTagName('input')[0].value;

//Ad ogni click del pulsante resetto la somma al suo costo base
somma = baseHamburgerCost;
var selezionato = false;

//Ciclo all'interno delle checkboxes
for(var i = 0; i < checkboxes.length; i++){

  //Se ci sono degli elementi selezionati fai la somma e aumenta il contatore
  if(checkboxes[i].checked){
    checkedElementsCounter++;
    somma += parseInt(checkboxes[i].value);
}

}
//Se il contatore è minore di due o se non è stato specificato il nome dell'hamburger manda un alert
if(checkedElementsCounter < 2 || burgerName == '' ){
  alert('Devi selezionare 2 o più elementi e scrivere il nome dell\'hamburger')
  checkedElementsCounter = 0;
  somma = baseHamburgerCost;
  //Non mostro il prezzo finchè le condizioni sopra non vengono soddisfatte
  totalPrice.innerText = '$ ' + somma ;
  // Altrimenti scrivi la somma da spendere
}else{
  totalPrice.innerText = '$ ' + somma;

  //Azzero il contatore altrimenti dopo il primo avviso il programma va avanti lo stesso
  checkedElementsCounter = 0;

//Recupero la lista dei coupon sconto
  for(var x = 0; x < couponList.length; x++){

    //Se il codice coupon corrisponde con la lista allora applico il 20% di sconto
    if(coupon.value === couponList[x]){
    sommaScontata = somma - (somma / 100) * discount;
    totalPrice.innerText = '$ ' + sommaScontata + ' con ' + discount + '% di sconto !!!!';
  }


  }
}

}

); //FINE FUNZIONE CLICK PULSANTE
