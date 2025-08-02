function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

<<<<<<< HEAD
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

    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
=======
document.querySelector('.tecla_pom').onclick = tocaSomPom;
>>>>>>> parent of 707e5f7 (Percorrendo Lista, usando for e while.)
