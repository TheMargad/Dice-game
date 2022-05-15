//  toglogchiin eeljiig hadgalah huvisagch neg dugeer toglogchiin 0 2 dugaar toglogchiig 1 gej temdeglei

var activePlayer = 1;
// toglogdchiin tsugluulsan onoo hadgalah huvisagch

var scors = [0 , 0];
//toglogchiin eeljind tsugluulj baigaa onoog hadgalah huvisag
var roundScore = 0;
// shoonii ali talaar buusang iltgeh huvisagch

/* <div class="player-score" id="score-0">43</div> */
// dice dom
var DiceDom =  document.querySelector(".dice");
// programm started readyy
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

DiceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    DiceDom.style.display = "block";
    DiceDom.src= "dice-" + diceNumber + ".png";
}
);

DiceDom.style.display = "none";
console.log("шоог шидлээ " + dice );

