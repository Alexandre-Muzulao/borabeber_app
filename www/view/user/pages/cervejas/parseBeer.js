function isPar(number){
    if(number & 1){
        return('impar');
    } else {
        return('par');
    }
}

function parseBeer(BEERS){
    if (BEERS !== undefined){
        for (i = 0; i < BEERS.length; i++){
            formatBeer(BEERS)
            if (isPar(i) == 'par'){
                BEERS[i].idBeerPar = BEERS[i].idBeer
                BEERS[i].descricaoBeerPar = BEERS[i].descricaoBeer
                BEERS[i].imgBeerPar = URLBEERS + BEERS[i].imgBeer
                BEERS[i].precoBeerPar = BEERS[i].precoBeerInt + ',' + BEERS[i].precoBeerCent
                BEERS[i].precoBeerIntPar = BEERS[i].precoBeerInt
                BEERS[i].precoBeerCentPar = BEERS[i].precoBeerCent
                BEERS[i].tituloBeerPar = BEERS[i].tituloBeer
                BEERS[i].medidaPar = BEERS[i].medida
                BEERS[i].recipientePar = BEERS[i].recipiente
                BEERS[i].idBeerImpar = ""
                BEERS[i].descricaoBeerImpar = ""
                BEERS[i].imgBeerImpar = ""
                BEERS[i].precoBeerImpar = ""
                BEERS[i].tituloBeerImpar = ""
                BEERS[i].medidaImpar = ""
                BEERS[i].recipienteImpar = ""
                delete BEERS[i].idBeer
                delete BEERS[i].descricaoBeer
                delete BEERS[i].imgBeer
                delete BEERS[i].precoBeerCent
                delete BEERS[i].precoBeerInt
                delete BEERS[i].precoBeer
                delete BEERS[i].tituloBeer
                delete BEERS[i].medida
                delete BEERS[i].recipiente
            } else {
                BEERS[i - 1].idBeerImpar = BEERS[i].idBeer
                BEERS[i - 1].descricaoBeerImpar = BEERS[i].descricaoBeer
                BEERS[i - 1].imgBeerImpar = URLBEERS + BEERS[i].imgBeer
                BEERS[i - 1].precoBeerImpar = BEERS[i].precoBeerInt + ',' + BEERS[i].precoBeerCent
                BEERS[i - 1].precoBeerIntImpar = BEERS[i].precoBeerInt
                BEERS[i - 1].precoBeerCentImpar = BEERS[i].precoBeerCent
                BEERS[i - 1].tituloBeerImpar = BEERS[i].tituloBeer
                BEERS[i - 1].medidaImpar = BEERS[i].medida
                BEERS[i - 1].recipienteImpar = BEERS[i].recipiente
                delete BEERS[i].idBeer
                delete BEERS[i].medida
                delete BEERS[i].recipiente
                delete BEERS[i].descricaoBeer
                delete BEERS[i].imgBeer
                delete BEERS[i].precoBeerInt
                delete BEERS[i].precoBeerCent
                delete BEERS[i].tituloBeer
                delete BEERS[i]
            }
        }
        setTimeout(function(){
            setIdHidden('customImgAlert')
        },1000)
    }
}