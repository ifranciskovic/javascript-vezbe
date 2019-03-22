let counter=0;

let winner=Math.floor(Math.random()*4)+1;
document.getElementById("winner").innerHTML=winner;
function guess(n) {
    if (n==winner) {
        document.getElementById(n).src="card1.jpg";
        document.getElementById("winnerText").innerHTML="YOU WIN!!!";
        document.getElementById("winnerText").className="win";

    } else {
        document.getElementById("winnerText").innerHTML="WRONG! TRY AGAIN!!!";
        document.getElementById("winnerText").className="lose";
    }
    counter++;
    document.getElementById("counter").innerHTML = `Number of times clicked: ${counter}`;
}

/*
   var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("1").innerHTML = clicks;
        console.log(clicks)
    }

let imgClicked= document.querySelector('img')
let CountClicks = 0

imgClicked.addEventListener('click', function() {
    CountClicks += 1
    console.log(CountClicks)
})*/