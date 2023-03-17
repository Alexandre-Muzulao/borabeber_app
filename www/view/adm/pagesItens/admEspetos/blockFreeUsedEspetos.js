function setInCart(id){
    var button = document.getElementById('cartButtom' + id)
    button.style.display = "block"

    var div = document.getElementById(id)
    div.style.display = "block"
}

function remOfCart(id){
    var button = document.getElementById('cartButtom' + id)
    button.style.display = "none"

    var div = document.getElementById(id)
    div.style.display = "none"
}

function blockBeer(id){
    var divBeer = document.getElementById(id)
    divBeer.onclick = false
}

function freeBeer(id){
    var divBeer = document.getElementById(id)
    divBeer.onclick = true
}
