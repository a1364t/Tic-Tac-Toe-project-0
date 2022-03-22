

let turn = true;
let box = ['','','','','','','','',''];
let outcome = undefined;




$('.cell').on('click', function () {
    if(turn && $(this).val() === '') {
        $(this).val('X')
        box[$(this).attr('id')] = 'X';
        $('h4').text( 'Player 2 continues')                 
    }
    else if (!turn && $(this).val() === '') {
        $(this).val('O');
        box[$(this).attr('id')] = 'O'        
        
        $('h4').text( 'Player 1 continues')
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
            alert('Player 1 wins');
        }
        else if (turn == false) {
            alert('Player 2 wins');
        }
    }
    else if (outcome == false) {
        alert('draw!');
    }
    else if(outcome == undefined) {
        return;
    }
}

$('button').on('click', function() {
    $('.cell').val('');
    box = ['','','','','','','','',''];
    turn = true;
    $('h4').text('Player 1 starts');
    outcome = undefined;    
});


