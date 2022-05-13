const contar = document.querySelector('#contar')
const zerar = document.querySelector('#zerar')
const res = document.querySelector('#text')
const conteundo = document.querySelector('#conteundo')


let star = 0
let total = '';

contar.addEventListener('click', () => {
    total = ++ star
    res.innerHTML = `<p>O Contador está com <mark>${star}</mark> cliques</p>`
})


zerar.addEventListener('click', () => {
    star = 0 
    const img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(total >= 20) {
        img.setAttribute('src', 'assets/img/ronald-anao.png')
    }
    res.innerHTML = `você clicou <mark>${total}</mark> &#x1F928`
})






// function contar() {
//     total = ++ star
//     document.querySelector('.text').innerHTML = `O Contador está com <mark>${star}</mark> cliques`
// }

// function zerar() {
//     star = 0
//     document.querySelector('.text').innerHTML = `você clicou <mark>${total}</mark> &#x1F928`
// }


