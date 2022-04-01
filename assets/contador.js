let star = 0


function contar() {
    total = ++ star
    document.querySelector('.text').innerHTML = `O Contador está com <mark>${star}</mark> cliques`
}

function zerar() {
    star = 0
    document.querySelector('.text').innerHTML = `<p>você clicou <mark>${total}</mark></p>`
}
