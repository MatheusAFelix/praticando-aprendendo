function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor não encontrado!')
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

// //Enquanto, leght significa quantidade de teclas
// while (contador < listaDeTeclas.length) {

//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];
//     //template string
//     const idAudio = `#som_${instrumento}`;

//     // console.log(idAudio);

//     //function anonima
//     tecla.onclick = function () {
//         tocaSom(idAudio);
//     };

//     contador = contador + 1;

//     // console.log(contador);
// }

//Para, leght significa quantidade de teclas
for (let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    //function anonima
    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {

        console.log(evento.code == 'Space')

        if  (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
    
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
