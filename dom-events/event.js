function makeRed() {
    document.body.style.backgroundColor = 'red';
}



const bluebutton = document.getElementById('make-blue');
bluebutton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//anonimous function

const greenButton = document.getElementById('meke-green');
greenButton.onclick = function makegreen() {
        document.body.style.backgroundColor = 'green';
    }
    //addEventListener
const goldenButton = document.getElementById('makegolden');
goldenButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'gold';
});

//diffent version of adding addEventListener using function
/* 
const goldenButton = document.getElementById('makegolden');
goldenButton.addEventListener('click', makegolden);
function makegolden() {document.body.style.backgroundColor = 'gold';}

*/