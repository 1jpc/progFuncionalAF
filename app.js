// list comprehension
function gerarNumerosAleatorios(quantidade) {
    return Array.from({ length: quantidade }, () => Math.floor(Math.random() * 100)); // List comprehension
}

// função de alta ordem 1 (callback para manipular os números gerados)
function manipularNumeros(numeros, callback) {
    return callback(numeros);
}

// lambda (para números pares)
const filtrarPares = (numeros) => numeros.filter(num => num % 2 === 0);

// lambda (para números ímpares)
const filtrarImpares = (numeros) => numeros.filter(num => num % 2 !== 0);

// closure 1 (contador de soma)
function criarSomador() {
    let soma = 0;
    return function (numeros) {
        numeros.forEach(num => {
            soma += num;
        });
        return soma;
    };
}

function main() {
    const quantidade = 10;
    const numeros = gerarNumerosAleatorios(quantidade);
    console.log("Números gerados:", numeros);

    // função de alta ordem 2 (para números pares)
    const pares = manipularNumeros(numeros, filtrarPares);
    console.log("Números pares:", pares);

    // função de alta ordem 3 (para números ímpares)
    const impares = manipularNumeros(numeros, filtrarImpares);
    console.log("Números ímpares:", impares);

    // closure 2 (soma)
    const somador = criarSomador();
    console.log("Soma dos números pares:", somador(pares));
    console.log("Soma dos números ímpares:", somador(impares));
}

// esse código me lembrou os trabalhos de POO, em java
main();