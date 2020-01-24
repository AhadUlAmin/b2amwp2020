// Challenge 1 : Your age in Days
function ageInDays(){
    var birthYear = prompt('What year were your born Good friend ?');
    var ageInDayss = (2020 - birthYear)*356;
    // console.log(ageInDayss)
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+ageInDayss + ' days');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();

}

// Challenge 2 : Cat Generator

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://cdn2.thecatapi.com/images/eif.gif";
    div.appendChild(image);
    
}