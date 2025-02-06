var button = document.getElementById('inicio');
var input = document.getElementById('input');

button.addEventListener('click', calcTabuada);

function calcTabuada() {
    let numero = parseInt(input.value);
    let res = document.getElementById('res');
    let title = document.getElementById('title')

    // Mensagem de erro
    if(isNaN(numero)) {
        alert("Insira um valor válido.");
        input.value = '';
        res = '';
        title = '';
    }

    // Calculo e exibição
    res.innerHTML = '';
    for(let i=0; i <= 10; i++) {
        if(i === 0) {
            title.innerHTML = `<p>Tabuada do ${numero}</p>`;
        };

        let item = document.createElement('option');
        item.text = `${numero} X ${i} = ${numero*i}`;
        res.appendChild(item);
        
    };
}