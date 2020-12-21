var checkboxes = document.getElementById('checkbox-container').getElementsByTagName('input');

// console.log(checkboxes);

var somma = 0;

document.getElementsByTagName('button')[0].addEventListener("click", function(){

var totalPrice = document.getElementById('total-container');

somma = 0;

for(var i = 0; i < checkboxes.length; i++){
  if(checkboxes[i].checked){
    somma += parseInt(checkboxes[i].value);
  }
}
alert('la somma è ' + somma);



}




);
