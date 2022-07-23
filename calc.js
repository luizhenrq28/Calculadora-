let visor;

function inserir(num) {
    visor = document.querySelector("#res").innerHTML += num;
}

function limpar() {
    document.querySelector("#res").innerHTML = '';
}

function back() {
    let result = document.querySelector("#res").innerHTML;
    document.querySelector("#res").innerHTML = result.substring(0, result.length - 1);
}

function cont() {
    let result = document.querySelector("#res").innerHTML;
    if (result) {
        document.querySelector("#res").innerHTML = eval(result);
    }

    if (result.length == 0) {
        document.querySelector("#res").innerHTML = "Error";
    }

}

