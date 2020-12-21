var checkboxes = document.getElementById('checkbox-container').getElementsByTagName('input');
var burgerName = document.getElementsByTagName('input')[0];
var coupon = document.getElementsByTagName('input')[7];
var sommaScontata = 0;


var somma = 0;

var couponList = ['123ABCDE', '456FGHI', '890BVCDF'];

var discount = false;



//Inizio funzione click per pulsante
document.getElementsByTagName('button')[0].addEventListener("click", function(){
burgerName = document.getElementsByTagName('input')[0].value;

var totalPrice = document.getElementById('total-container').getElementsByTagName('span')[0];

//Ad ogni click del pulsante riporto la somma a zero
somma = 0;
// sommaScontata = 0;
//Variabile che mi che mi controlla quanti elementi sono stati selezionati
var checkedElementsCounter = 0;

//Ciclo all'interno delle checkboxes
for(var i = 0; i < checkboxes.length; i++){

  //Se ci sono degli elementi selezionati fai la somma e aumenta il contatore
  if(checkboxes[i].checked){
    checkedElementsCounter++;
    somma += parseInt(checkboxes[i].value);
}

}
//Se il contatore è minore di due o se non è stato specificato il nome dell'hamburger
if(checkedElementsCounter < 2 || burgerName == '' ){
  alert('Devi selezionare 2 o più elementi e scrivere il nome dell\'hamburger')
}else{
  totalPrice.innerText = '$ ' + somma;

  //Recupero la lista dei coupon sconto
  for(var x = 0; x < couponList.length; x++){

    //Se il codice coupon corrisponde con la lista allora applico il 20% di sconto
    if(coupon.value === couponList[x]){
    sommaScontata = somma - (somma / 100) * 20;
    totalPrice.innerText = '$ ' + sommaScontata + ' con 20% di sconto !!!!';
    }


  }
}



}
//Fine funzione click per pulsante

);
