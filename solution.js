
function solve() {
    const body = document.querySelector('body');
    const table = document.querySelector('table');
    const tds = document.querySelectorAll('td');
    const nextTurn = document.querySelector('p.turn');

    const btn = document.createElement('button');
    const p = document.createElement('p');
    body.appendChild(p)
    btn.textContent = "Restart Game";
    const players = {
        'O' : document.querySelector('#Oplayer'),
        'X' : document.querySelector('#Xplayer')
    }
 
    body.appendChild(btn)

    const rowsColsAndDiag = [[tds[0], tds[1], tds[2]],
    [tds[3], tds[4], tds[5]],
    [tds[6], tds[7], tds[8]],
    [tds[0], tds[3], tds[6]],
    [tds[1], tds[4], tds[7]],
    [tds[2], tds[5], tds[8]],
    [tds[0], tds[4], tds[8]],
    [tds[2], tds[4], tds[6]]];

    // 0 1 2
    // 3 4 5
    // 6 7 8 
    table.addEventListener('click', xOrO);

    let lastElement = 'X'
    nextTurn.textContent = `На ред е "${lastElement === 'X' ? 'O' : 'X'}"`

    function xOrO(e) {
        if (e.target.nodeName === 'TBODY' || e.target.nodeName === 'TABLE') { return };

        lastElement === 'X' ? lastElement = 'O' : lastElement = 'X'
        if (e.target.textContent === ''){
            e.target.textContent = lastElement;
            nextTurn.textContent = `На ред е "${lastElement === 'X' ? 'O' : 'X'}"`
        }

        function reduseAndFindMatch(x) {
            let result = x.reduce((acc, curr) => acc + curr.textContent, '');
            if (result === 'OOO' || result === 'XXX') {
                return result;
            }
        }

        if (rowsColsAndDiag.find(reduseAndFindMatch)) {
            p.textContent = `"${lastElement}" WIN THIS GAME!!!`
            btn.textContent = "START NEW GAME"
            players[lastElement].textContent++

        }
    }

    btn.addEventListener('click', function (){
        Array.from(tds).forEach(e=>e.textContent= '');
        p.textContent = '';
        btn.textContent = "Restart Game";
    })

}

