// toglogchdiin eeljig hadgalah var 
var activePlayer = 0;

// toglogchdiin tsugluulsan onoog hadgalah var 
var scores = [0, 0];

// toglogchdiin eeljind tsugluulsan onoonii var 
var roundScore = 0;

// shoonii ali talaar buusaniig hadgalah huvisagch heregtei , 1-6 gesen utgiig ene var d sanamsarguigeer uusgej ugnu 

// starting programm
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// shoog shidhed event lister
document.querySelector(".btn-roll").addEventListener("click", function() {

    //   1-6 giin hoorond sanamsargui ner too avah
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // shoonii zuragiig web deer gargaj ireh
    diceDom.style.display = "block";
    // shoonii zuragiig sanamsargui toond hargalzuulna gargaj ireh 
    diceDom.src = "dice-" + diceNumber + ".png";
    // toglogchdiin buusan too 1 ees ylgaatai  bol idevhtei toglogchdiin eeljiin onoog nemegduuleh 

    if (diceNumber !== 1) {
        // 1 ees ylgaatai too buulaa . buusan toog toglogchid nemj ugnu
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        // 1 buusan tul toglogchiin eeljiig ene hesegt solij ugnu
    document.getElementById("current-" + activePlayer).textContent = 0;
    // toglogchiin eeljiig nuguu  toglogchruu shiljuulne 
    // herev idevhtei toglogch ni 0 baival idevhtei toglogchiig 1 bolgo.Math
    // ugui bol idevhtei toglogchiig 0 bolgo

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // var obj = {
    //   name: "amaraa",
    //   job: "programmer",
    //   address: {
    //     city: "ub",
    //     country: "mn"
    //   }
    // };

    // obj.address.country;
    // ulaan tesgiig shiljuul
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    diceDom.style.display = "none";

    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }
  }
});