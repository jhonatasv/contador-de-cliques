const contar = document.querySelector('#contar')
const zerar = document.querySelector('#zerar')
const conteundo = document.querySelector('#conteundo')


let star = 0
let total = '';

contar.addEventListener('click', function(){
    total = ++ star
    conteundo.innerHTML = `<p> O Contador está com <mark>${star}</mark> cliques</p>`
})


zerar.addEventListener('click', function() {
    star = 0 
    
    if(total >= 20 && total <= 40) {
        let img = document.createElement('img')
        img.setAttribute('src', 'assets/img/ronald-anao.png')
        
        conteundo.style.textAlign = 'center'
        conteundo.innerHTML = `<p> Você clicou <mark>${total}</mark> &#x1F928</p>`
        conteundo.appendChild(img)
    } else {

        conteundo.innerHTML = `<p> Você clicou <mark>${total}</mark> &#x1F928</p>`
    }
})
