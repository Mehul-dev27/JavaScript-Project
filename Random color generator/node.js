
var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);


function buttonColorClick() {
    var colorId = document.getElementById('background').value;
    console.log(colorId);
    while(all_buttons)
    if(colorId == 'random'){
        colorId = getRandomColor();
    }
    
    colorChange(colorId);

}
var copyAllButtons = [];
for(let i = 0; i< all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i]);
}
console.log(copyAllButtons);

//my code
function colorChange(colorId) {
    if(colorId != 'random'){
        for (let i = 0; i < all_buttons.length; i++) {
            copyAllButtons[i].style.backgroundColor = colorId;
        }
    }else{
        for(let j = 0; j<all_buttons.length; j++){
            copyAllButtons[j].style.backgroundColor = colorId;
        }
    }

            
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    // if (color == '#FF0000' || color == '#FFFF00' || color == '#00FF00'){
    //     getRandomColor();
    // }
    return color;
}


//referece code

// function changeColor(colorId) {
//     Array.from(document.querySelectorAll('button')).map(function (button) {
//         button.style.backgroundColor = colorId;
//     })
// }
