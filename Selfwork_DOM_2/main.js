
let btn = document.querySelector('#btn');
let articoloCreato = document.querySelector('#articoloCreato');

btn.addEventListener('click', function (evento) {
    evento.preventDefault();

    let titolo = document.getElementById('titolo').value;
    let paragrafo = document.getElementById('paragrafo').value;

    if (titolo == '' || paragrafo == '') {
        alert('Compila tutti i campi per creare un nuovo articolo!')
        return;
    }

    let formatDate = document.createElement('h6');
    let titoloArt = document.createElement('h2');
    let paragrafoArt = document.createElement('p');

    let date = new Date();
    let data = date.toLocaleDateString();
    formatDate.innerHTML = data;
    titoloArt.innerHTML = titolo;
    paragrafoArt.innerHTML = paragrafo;

   
    articoloCreato.appendChild(formatDate);
    articoloCreato.appendChild(titoloArt);
    articoloCreato.appendChild(paragrafoArt);

    document.getElementById('titolo').value = '';
    document.getElementById('paragrafo').value = '';

});



