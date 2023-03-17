function findBeerInCart(id){
    var result = false
    if (ITENSCART.length == 0){
        result = false
    } else {
        for (i = 0; i < ITENSCART.length; i++){
            if (id == ITENSCART[i].id){
                result = true
                return result
            } else {
                result = false
            }
        }
    }
    return result
}

function findVodkaInCart(id){

}

function findWhiskyInCart(id){

}

function parseValInFloat(int, cent){
    return parseFloat(int + '.' + cent).toFixed(2)
}