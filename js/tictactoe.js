

let turn = true;
let box = ['','','','','','','','',''];

const player2 = $('#name2').val();

$('#name1').on('click', function () {
    const player1 = $('#name1').val();
    console.log(player1);
});


$('.cell').on('click', function () {
    if(turn && $(this).val() === '') {
        $(this).val('X')
        box[$(this).attr('id')] = 'X';
        $('h4').text( player2 + 'continues')                 
    }
    else if (!turn && $(this).val() === '') {
        $(this).val('O');
        box[$(this).attr('id')] = 'O'        
        compareCells;
        $('h4').text(player1 + 'continues')
    }
    compareCells();
    turn = !turn;    
});

const compareCells = function () {
    if ((box[0] !='' || box[1] !='' || box[2] !='') && box[0] === box[1]  && box[1] === box[2]) {
        alert(`${box[0]} win`);
    }
    if ((box[3] !='' || box[4] !='' || box[5] !='') && box[3] === box[4]  && box[4] === box[5]) {
        alert(`${box[3]} win`);
    }
    if ((box[6] !='' || box[7] !='' || box[8] !='') && box[6] === box[7]  && box[7] === box[8]) {
        alert(`${box[6]} win`);
    }
    if ((box[0] !='' || box[3] !='' || box[6] !='') && box[0] === box[3]  && box[3] === box[6]) {
        alert(`${box[0]} win`);
    }
    if ((box[1] !='' || box[4] !='' || box[7] !='') && box[1] === box[4]  && box[4] === box[7]) {
        alert(`${box[1]} win`);
    }
    if ((box[2] !='' || box[5] !='' || box[8] !='') && box[2] === box[5]  && box[5] === box[8]) {
        alert(`${box[2]} win`);
    }
    if ((box[0] !='' || box[4] !='' || box[8] !='') && box[0] === box[4]  && box[4] === box[8]) {
        alert(`${box[0]} win`);
    }
    if ((box[2] !='' || box[4] !='' || box[6] !='') && box[2] === box[4]  && box[4] === box[6]) {
        alert(`${box[2]} win`);
    }
    else if (!box.includes('')) {        
        alert('draw');
        }    
};

$('button').on('click', function() {
    $('.cell').val('');
    box = ['','','','','','','','',''];
    turn = true;
    $('h4').text('Player 1 starts');    
});


