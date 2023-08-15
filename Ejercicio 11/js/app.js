/*11. Escribir una función que reciba un String y devuelva la palabra más larga.
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript”*/
function buscar(texto) {
    const palabra=texto.split(' ')
    let pMasLarga='';
    palabra.forEach(word => {
        if (pMasLarga.length<word.length) {
            pMasLarga=word;
        }
    });
    return pMasLarga;
}

function mostrar() {
    const texto= document.getElementById("ingreso").value;
    const pMasLarga=buscar(texto);
    document.getElementById("result").innerText=
    "La palabras más larga es: "+pMasLarga;
}
