//Crear Array, añadir letras

var nombre = new Array;

nombre.push('G');
nombre.push('E');
nombre.push('R');
nombre.push('A');
nombre.push('R');
nombre.push('D');
nombre.push('1');

// Comprobar si són vocales, consonates y números
for (var i = 0; i < nombre.length; i++) {
    document.writeln(nombre[i], "<br/>");
    if (nombre[i] == 'A' ||
        nombre[i] == 'E' ||
        nombre[i] == 'I' ||
        nombre[i] == 'O' ||
        nombre[i] == 'U') {
        document.writeln("VOCAL", "<br/>");

    } else if (nombre[i] == '0' ||
        nombre[i] == '1' ||
        nombre[i] == '2' ||
        nombre[i] == '3' ||
        nombre[i] == '4' ||
        nombre[i] == '5' ||
        nombre[i] == '6' ||
        nombre[i] == '7' ||
        nombre[i] == '8' ||
        nombre[i] == '9') {
        document.writeln("Els noms de persones no contenen números!", "<br/>");
    } else {
        document.writeln("CONSONANT", "<br/>");
    }
}
