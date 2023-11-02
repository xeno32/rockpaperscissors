
function compsignSetter() {
    const options = ['rock', 'paper', 'scissors']
   var x = Math.floor(Math.random()*3) 
   var temp = (options[x])
   return temp
}


var compSign = compsignSetter()
console.log(compSign)


var playerSign

function signSetter (x) {
   playerSign = x
   console.log(playerSign)
   round(playerSign, compSign)
}

function round(x, y) {
    var p = x
    var c = y
    console.log('playerSign'+ p)
    console.log('compSign'+ c)

    if (playerSign === compSign) {
        alert("It's a tie!");
    } else if (
        (playerSign === 'rock' && compSign === 'scissors') ||
        (playerSign === 'paper' && compSign === 'rock') ||
        (playerSign === 'scissors' && compSign === 'paper')
    ) {
        alert("Player wins!");
    } else {
        alert("Computer wins!");
    }

    }

r.addEventListener('click', () => signSetter('rock'))
p.addEventListener('click', () => signSetter('paper'))
s.addEventListener('click', () => signSetter('scissors'))
o.addEventListener('click', () => resetter())


function resetter() {
compSign = compsignSetter()
console.log(compSign)
}