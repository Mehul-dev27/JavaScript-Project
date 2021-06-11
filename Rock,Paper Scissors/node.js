function rpsGame(yourChoice){
    var humanChoice = yourChoice.id;
    var botChoice = numberToChoice(randToRpsInt());
    console.log('computer choice : ' + botChoice);
    
    var result = decideWinner(humanChoice, botChoice);
    // console.log(result); 

    var message = finalMassage(result);
    console.log(message);

    rpsFrontEnd(humanChoice, botChoice,message);
}

function decideWinner(humanChoice, botChoice) {
    var rpsDatabase = {
        'rock': { 'scissor': 1, 'rock': 0.5, 'paper' : 0},
        'paper': { 'scissor': 0, 'rock': 1, 'paper' : 0.5},
        'scissor': { 'scissor': 0.5, 'rock': 0, 'paper': 1 }
    }
    var yourScore = rpsDatabase[humanChoice][botChoice];
    var computerScore = rpsDatabase[botChoice][humanChoice];

    return [yourScore, computerScore];
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'] [number];
}

function finalMassage([yourScore, computerScore]) {
    if(yourScore === 0){
        return {'message' : 'You Lost !', color : 'red'};
    }else if(yourScore === 0.5){
        return { 'message': 'You tied !', color: 'blue' };
    }else {
        return { 'message': 'You Won !', color: 'green' };
    }
}

function rpsFrontEnd(humanImgChoice, botImgChoice, finalMessage) {
    var rpsImgDatabase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissor' : document.getElementById('scissor').src
    }
    
    //remove element in view
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    //set elements
    var humanDiv = document.createElement('div');
    humanDiv.id = 'humanId';
    var messageDiv = document.createElement('div');
    messageDiv.id = 'messageId';
    var computerDiv = document.createElement('div');
    computerDiv.id = 'computerId';

    humanDiv.innerHTML = "<img src = '" + rpsImgDatabase[humanImgChoice] + "' height = 190 weight = 150>"
    document.getElementById('flex-box').appendChild(humanDiv);

    messageDiv.innerHTML = "<h1 style = 'color : " + finalMessage['color'] + "; padding : 30px; font-size: 60px;'>" + finalMessage['message'] + "</h1>";
    document.getElementById('flex-box').appendChild(messageDiv);

    computerDiv.innerHTML = "<img src = '" + rpsImgDatabase[botImgChoice] + "' height = 190 weight = 150>"
    document.getElementById('flex-box').appendChild(computerDiv);
}

// Reset Function
function resetFun() {
    document.getElementById('humanId').remove();
    document.getElementById('messageId').remove();
    document.getElementById('computerId').remove();

    // document.getElementById('flex-box').innerHTML = '<img  src="./images/rock2.jpg">';
    // document.getElementById('flex-box').innerHTML = '<img  src="./images/paper2.png">';
    // document.getElementById('flex-box').innerHTML = '<img  src="./images/scissors2.jpg">';

    var ar = [];
    ar.push("./images/rock2.jpg");
    ar.push("./images/paper2.png");
    ar.push("./images/scissors2.jpg");

    for (i = 0; ar.length > i; i++) {
        var img = new Image(250, 220);
        img.src = ar[i];
        // var img = 

        var src = document.getElementById("flex-box");
        src.appendChild(img);
    }
    
}