//  toglogchiin eeljiig hadgalah huvisagch neg dugeer toglogchiin 0 2 dugaar toglogchiig 1 gej temdeglei

var activePlayer = 1;
// toglogdchiin tsugluulsan onoo hadgalah huvisagch

var scors = [0 , 0];
//toglogchiin eeljind tsugluulj baigaa onoog hadgalah huvisag
var roundScore = 0;
// shoonii ali talaar buusang iltgeh huvisagch

/* <div class="player-score" id="score-0">43</div> */
var DiceDom =  document.querySelector(".dice");
// programm started readyy
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

DiceDom.style.display = "none";

// shoog shideh
document.querySelector(".btn-roll").addEventListener("click", function(){
    // 1-6 giin hoorond random too
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // shoonii zuragiig web deer gargaj ireh
    DiceDom.style.display = "block";
    // buusan random toond hargalzah toonii zuragiig gargaj ireh
    DiceDom.src= "dice-" + diceNumber + ".png";     
    //buusan too ni 1 ees ylgaatai bol toglogchiin eeljiin onoog oorchilno
    if(diceNumber !== 1)
    {
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    }
    else
    {
        // 1 buusan tul toglogchiin eeljiig ene hesegt solij ugnu.

        // ene toglogchiin eeljind tsugluulsan onoog 0 bolgo
        document.getElementById("current-" + activePlayar).textContent = 0;

        // toglogchiin eeljiig nuguu toglogchruu shiljuulne 
        // herev idevhtei toglogch ni 0 baival idevhtei toglogch 1 bolgo.
        // ugui bol idevheti toglogchiig 0 bolgo.
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

        // ulaan tsegiig haij oloh

        document.querySelector(".player-0-panel").classList.remove("active");
        document.querySelector(".player-1-panel").classList.add("active");
        // if(activePlayer === 0)
        // {
        //     activePlayer = 1;
        // }
        // else
        // {
        //     activePlayer = 0;
        // }
    }
}
);

DiceDom.style.display = "none";