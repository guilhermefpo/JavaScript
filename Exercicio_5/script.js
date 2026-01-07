let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.getElementById('res')
let valores = []

function isnumero(n) {
   if (Number(n) >= 1 && Number(n) <= 100) {
    return true
   } else {
    return false
   }
}

function inLista(n, l) {
   if (l.indexOf(Number(n)) != -1) {
    return true
   } else {
    return false
   }
}


function adicionar() {
    if (isnumero(num.value) && !inLista(num.value, valores)) {
          alert('Ok!')
    } else {
        window.alert('Valor invalido ou já encontrado na lista!')
    }
}