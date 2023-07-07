function cleanCart(){
    ITENSCART = []
    CART = {
        qtdCaixas: "0",
        qtd : "0",
        vTotalInt : "0",
        vTotalCent : "00"
    }
    
    ITENSCART = []
    BEERVALUES = []
    VODKAVALUES = []
    WHISKYVALUES = []
    
    opened1 = false
    opened2 = false
    opened3 = false
    opened4 = false
    opened5 = false    
}

function formatBeer(BEERS){
    if (BEERS[i].descricaoBeer == "" || BEERS[i].descricaoBeer == undefined){
        BEERS[i].descricaoBeer = ""
    }
    if (BEERS[i].precoBeerInt == "" || BEERS[i].precoBeerInt == undefined){
        BEERS[i].precoBeerInt = "0"
    } else {
        BEERS[i].precoBeerInt = BEERS[i].precoBeerInt
    }
    if (BEERS[i].precoBeerCent == "" || BEERS[i].precoBeerCent == undefined){
        BEERS[i].precoBeerCent = "00"
    } else {
        if (BEERS[i].precoBeerCent.toString().length == 1){
            BEERS[i].precoBeerCent = BEERS[i].precoBeerCent + "0"
        }
    }
    if (BEERS[i].idBeer == undefined || BEERS[i].idBeer == ''){
        BEERS[i].idBeer = BEERS[i]._id
    }
    if (BEERS[i].qtd == "" || BEERS[i].qtd == undefined){
        BEERS[i].qtd = 0
    }
}

function formatVodkas(VODKA){
    if (VODKA[i].titulo == "" || VODKA[i].titulo == undefined){
        VODKA[i].titulo = ""
    }
    if (VODKA[i].vodkaPrecoInt == "" || VODKA[i].vodkaPrecoInt == undefined){
        VODKA[i].vodkaPrecoInt = "0"
    } else {
        VODKA[i].vodkaPrecoInt = VODKA[i].vodkaPrecoInt
    }
    if (VODKA[i].vodkaPrecoCent == "" || VODKA[i].vodkaPrecoCent == undefined){
        VODKA[i].vodkaPrecoCent = "00"
    } else {
        if (VODKA[i].vodkaPrecoCent.toString().length == 1){
            VODKA[i].vodkaPrecoCent = VODKA[i].vodkaPrecoCent + "0"
        }
    }
}

function formatVinho(VINHO){
    if (VINHO[i].titulo == "" || VINHO[i].titulo == undefined){
        VINHO[i].titulo = ""
    }
    if (VINHO[i].precoVinhoInt == "" || VINHO[i].precoVinhoInt == undefined){
        VINHO[i].precoVinhoInt = "0"
    } else {
        VINHO[i].precoVinhoInt = VINHO[i].precoVinhoInt
    }
    if (VINHO[i].precoVinhoCent == "" || VINHO[i].precoVinhoCent == undefined){
        VINHO[i].precoVinhoCent = "00"
    } else {
        if (VINHO[i].precoVinhoCent.toString().length == 1){
            VINHO[i].precoVinhoCent = VINHO[i].precoVinhoCent + "0"
        }
    }
}

function formatWhiskys(WHISKY){
    if (WHISKY[i].titulo == "" || WHISKY[i].titulo == undefined){
        WHISKY[i].titulo = ""
    }
    if (WHISKY[i].whiskyPrecoInt == "" || WHISKY[i].whiskyPrecoInt == undefined){
        WHISKY[i].whiskyPrecoInt = "0"
    } else {
        WHISKY[i].whiskyPrecoInt = WHISKY[i].whiskyPrecoInt
    }
    if (WHISKY[i].whiskyPrecoCent == "" || WHISKY[i].whiskyPrecoCent == undefined){
        WHISKY[i].whiskyPrecoCent = "00"
    } else {
        if (WHISKY[i].whiskyPrecoCent.toString().length == 1){
            WHISKY[i].whiskyPrecoCent = WHISKY[i].whiskyPrecoCent + "0"
        }
    }
}

function parseDate(date){
    var pedido = []
    pedido = date.map(function(valor){
        valor.pedido.createdAt = moment(valor.pedido.createdAt).format("DD/MM/YYYY")
        return valor
    })
}

function parseHour(date){
    var pedido = []
    pedido = date.map(function(valor){
        valor.pedido.createdAt = moment(valor.pedido.createdAt).format("HH:mm:ss")
        return valor
    })
}

function parseDateHour(date){
    var pedido = []
    pedido = date.map(function(valor){
        valor.pedido.createdAt = moment(valor.pedido.createdAt).format("DD/MM/YYYY HH:mm:ss")
        return valor
    })
}