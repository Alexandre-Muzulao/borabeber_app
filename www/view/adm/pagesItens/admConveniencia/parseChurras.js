function parseCONVENIENCIA(CONVENIENCIA){
    if (CONVENIENCIA !== undefined){
        for (i = 0; i < CONVENIENCIA.length; i++){
            if (CONVENIENCIA[i].descricaoBeer == "" || CONVENIENCIA[i].descricaoBeer == undefined){
                CONVENIENCIA[i].descricaoBeer = ""
            }
            if (CONVENIENCIA[i].precoBeerInt == "" || CONVENIENCIA[i].precoBeerInt == undefined){
                CONVENIENCIA[i].precoBeerInt = "0"
            } else {
                CONVENIENCIA[i].precoBeerInt = CONVENIENCIA[i].precoBeerInt
            }
            if (CONVENIENCIA[i].precoBeerCent == "" || CONVENIENCIA[i].precoBeerCent == undefined){
                CONVENIENCIA[i].precoBeerCent = "00"
            } else {
                CONVENIENCIA[i].precoBeerCent = CONVENIENCIA[i].precoBeerCent
            }
            if (CONVENIENCIA[i].idBeer == undefined){
                CONVENIENCIA[i].idBeer = CONVENIENCIA[i]._id
            }
            if (isPar(i) == 'par'){
                CONVENIENCIA[i].idBeerPar = CONVENIENCIA[i].idBeer
                CONVENIENCIA[i].descricaoBeerPar = CONVENIENCIA[i].descricaoBeer
                CONVENIENCIA[i].imgBeerPar = CONVENIENCIA[i].imgBeer
                CONVENIENCIA[i].precoBeerPar = CONVENIENCIA[i].precoBeerInt + ',' + CONVENIENCIA[i].precoBeerCent
                CONVENIENCIA[i].tituloBeerPar = CONVENIENCIA[i].tituloBeer
                CONVENIENCIA[i].medidaPar = CONVENIENCIA[i].medida
                CONVENIENCIA[i].recipientePar = CONVENIENCIA[i].recipiente
                CONVENIENCIA[i].idBeerImpar = ""
                CONVENIENCIA[i].descricaoBeerImpar = ""
                CONVENIENCIA[i].imgBeerImpar = ""
                CONVENIENCIA[i].precoBeerImpar = ""
                CONVENIENCIA[i].tituloBeerImpar = ""
                CONVENIENCIA[i].medidaImpar = ""
                CONVENIENCIA[i].recipienteImpar = ""
                delete CONVENIENCIA[i].idBeer
                delete CONVENIENCIA[i].descricaoBeer
                delete CONVENIENCIA[i].imgBeer
                delete CONVENIENCIA[i].precoBeer
                delete CONVENIENCIA[i].tituloBeer
                delete CONVENIENCIA[i].medida
                delete CONVENIENCIA[i].recipiente
            } else {
                CONVENIENCIA[i - 1].idBeerImpar = CONVENIENCIA[i].idBeer
                CONVENIENCIA[i - 1].descricaoBeerImpar = CONVENIENCIA[i].descricaoBeer
                CONVENIENCIA[i - 1].imgBeerImpar = URLCONVENIENCIA + CONVENIENCIA[i].imgBeer
                CONVENIENCIA[i - 1].precoBeerImpar = CONVENIENCIA[i].precoBeerInt + ',' + CONVENIENCIA[i].precoBeerCent
                CONVENIENCIA[i - 1].tituloBeerImpar = CONVENIENCIA[i].tituloBeer
                CONVENIENCIA[i - 1].medidaImpar = CONVENIENCIA[i].medida
                CONVENIENCIA[i - 1].recipienteImpar = CONVENIENCIA[i].recipiente
                delete CONVENIENCIA[i].idBeer
                delete CONVENIENCIA[i].medida
                delete CONVENIENCIA[i].recipiente
                delete CONVENIENCIA[i].descricaoBeer
                delete CONVENIENCIA[i].imgBeer
                delete CONVENIENCIA[i].precoBeerInt
                delete CONVENIENCIA[i].precoBeerCent
                delete CONVENIENCIA[i].tituloBeer
                delete CONVENIENCIA[i]
            }
        }
    }
}