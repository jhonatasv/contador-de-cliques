const contar = document.querySelector('#contar')
const zerar = document.querySelector('#zerar')
const res = document.querySelector('#conteundo')


let star = 0
let total = '';

contar.addEventListener('click', function(){
    total = ++ star
    res.innerHTML = `<p> O Contador está com <mark>${star}</mark> cliques</p>`
})


zerar.addEventListener('click', function() {
    star = 0 
    let img = document.createElement('img')
    
    if(total >= 20 && total <= 40) {
        img.setAttribute('src', 'assets/img/ronald-anao.png')
        
        res.style.textAlign = 'center'
        res.innerHTML = `<p> Você clicou <mark>${total}</mark> &#x1F928</p>`
        res.appendChild(img)
    } else if(total >= 50 && total <= 65) {
        img.setAttribute('src', 'assets/img/anya-assutada.png')
       
        res.style.textAlign = 'center'
        res.innerHTML = `<p> Você clicou <mark>${total}</mark> &#x1F928</p>`
        res.appendChild(img)
    } else {
        res.innerHTML = `<p> Você clicou <mark>${total}</mark> &#x1F928</p>`
    }

})

