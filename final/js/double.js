

let turn = true;
let box = ['','','','','','','','',''];
let outcome = undefined;
let counterPlayer1 = 0;
let counterPlayer2 = 0;
let player1 = 'Player 1';
let player2 = 'Player 2';
let token1 = 'X';
let token2 = 'O';



$('#player1Name').on('click', function () {
    player1 = $('#nameEnter').val();
    $('#Player1').text(`${player1}:`);
    $('#startPlayer').text(`${player1} starts`);
    $('#nameEnter').val('');    
});
$('#player2Name').on('click', function () {
    player2 = $('#nameEnter').val();    
    $('#Player2').text(`${player2}:`);
    $('#nameEnter').val('');
});

$('#player1Token').on('click', function() {
    token1 = $('#tokenEnter').val();
    $('#tokenEnter').val('');
});
$('#player2Token').on('click', function() {
    token2 = $('#tokenEnter').val();
    $('#tokenEnter').val('');
});


$('.cell').on('click', function () {
    if(turn && $(this).val() === '') {
        $(this).val(`${token1}`)
        box[$(this).attr('id')] = 'X';
        $('h4').text(`${player2} continues`);
                                       
    }
    else if (!turn && $(this).val() === '') {
        $(this).val(`${token2}`);
        box[$(this).attr('id')] = 'O';   
        $('h4').text( `${player1} continues`);
       
              
    }
    outcome = compareCells();
    winPlayer();
    turn = !turn;    
});


const compareCells = function () {
    if ((box[0] !='' || box[1] !='' || box[2] !='') && box[0] === box[1]  && box[1] === box[2]) {
        return true;
    }
    if ((box[3] !='' || box[4] !='' || box[5] !='') && box[3] === box[4]  && box[4] === box[5]) {
        return true;
    }
    if ((box[6] !='' || box[7] !='' || box[8] !='') && box[6] === box[7]  && box[7] === box[8]) {
        return true;
    }
    if ((box[0] !='' || box[3] !='' || box[6] !='') && box[0] === box[3]  && box[3] === box[6]) {
        return true;
    }
    if ((box[1] !='' || box[4] !='' || box[7] !='') && box[1] === box[4]  && box[4] === box[7]) {
        return true;
    }
    if ((box[2] !='' || box[5] !='' || box[8] !='') && box[2] === box[5]  && box[5] === box[8]) {
        return true;
    }
    if ((box[0] !='' || box[4] !='' || box[8] !='') && box[0] === box[4]  && box[4] === box[8]) {
        return true;
    }
    if ((box[2] !='' || box[4] !='' || box[6] !='') && box[2] === box[4]  && box[4] === box[6]) {
        return true;
    }
    else if (!box.includes('')) {        
        return false;
    }    
};

const winPlayer = function () {
    if(outcome) {
        if (turn == true) {
            openPopup(`${player1}`);
            counterPlayer1 += 1;
            $('#Player1').text(`${player1}: ${counterPlayer1}`);
        }
        else if (turn == false) {
            openPopup(`${player2}`);
            counterPlayer2 += 1;
            $('#Player2').text(`${player2}: ${counterPlayer2}`); 
        }
    }
    else if (outcome == false) {
        openPopup('draw');
    }
    else if(outcome == undefined) {
        return;
    }
};

$('.reset').on('click', function() {
    $('.modal').css({"visibility": "hidden"});
    $('.cell').val('');
    box = ['','','','','','','','',''];
    turn = true;
    $('h4').text(`${player1} starts`);
    outcome = undefined;
    k = 0;    
});

const openPopup = function (player) {
    if(player == 'draw') {
        $('#winner').text('draw!');
    }
    else {
       $('#winner').text(`${player} wins`);        
    }
    $('.modal').css({"visibility": "visible"}); 
};


