function isPar(number){
    if(number & 1){
        return('impar');
    } else {
        return('par');
    }
}

function parseAdmVinhos(ADMBEERS){
    if (ADMBEERS !== undefined){
        for (i = 0; i < ADMBEERS.length; i++){
            formatBeer(ADMBEERS)
            if (isPar(i) == 'par'){
                ADMBEERS[i].idBeerPar = ADMBEERS[i].idBeer
                ADMBEERS[i].descricaoBeerPar = ADMBEERS[i].descricaoBeer
                ADMBEERS[i].imgBeerPar = URLBEERS + ADMBEERS[i].imgBeer
                ADMBEERS[i].precoBeerPar = ADMBEERS[i].precoBeerInt + ',' + ADMBEERS[i].precoBeerCent
                ADMBEERS[i].precoBeerIntPar = ADMBEERS[i].precoBeerInt
                ADMBEERS[i].precoBeerCentPar = ADMBEERS[i].precoBeerCent
                ADMBEERS[i].tituloBeerPar = ADMBEERS[i].tituloBeer
                ADMBEERS[i].medidaPar = ADMBEERS[i].medida
                ADMBEERS[i].recipientePar = ADMBEERS[i].recipiente
                ADMBEERS[i].qtdBeerPar = ADMBEERS[i].qtd
                ADMBEERS[i].idBeerImpar = ""
                ADMBEERS[i].descricaoBeerImpar = ""
                ADMBEERS[i].imgBeerImpar = ""
                ADMBEERS[i].precoBeerImpar = ""
                ADMBEERS[i].tituloBeerImpar = ""
                ADMBEERS[i].medidaImpar = ""
                ADMBEERS[i].recipienteImpar = ""
                delete ADMBEERS[i].idBeer
                delete ADMBEERS[i].descricaoBeer
                delete ADMBEERS[i].imgBeer
                delete ADMBEERS[i].precoBeerCent
                delete ADMBEERS[i].precoBeerInt
                delete ADMBEERS[i].precoBeer
                delete ADMBEERS[i].tituloBeer
                delete ADMBEERS[i].medida
                delete ADMBEERS[i].recipiente
                delete ADMBEERS[i].qtd
            } else {
                ADMBEERS[i - 1].idBeerImpar = ADMBEERS[i].idBeer
                ADMBEERS[i - 1].descricaoBeerImpar = ADMBEERS[i].descricaoBeer
                ADMBEERS[i - 1].imgBeerImpar = URLBEERS + ADMBEERS[i].imgBeer
                ADMBEERS[i - 1].precoBeerImpar = ADMBEERS[i].precoBeerInt + ',' + ADMBEERS[i].precoBeerCent
                ADMBEERS[i - 1].precoBeerIntImpar = ADMBEERS[i].precoBeerInt
                ADMBEERS[i - 1].precoBeerCentImpar = ADMBEERS[i].precoBeerCent
                ADMBEERS[i - 1].tituloBeerImpar = ADMBEERS[i].tituloBeer
                ADMBEERS[i - 1].medidaImpar = ADMBEERS[i].medida
                ADMBEERS[i - 1].recipienteImpar = ADMBEERS[i].recipiente
                ADMBEERS[i - 1].qtdBeerImpar = ADMBEERS[i].qtd
                delete ADMBEERS[i].idBeer
                delete ADMBEERS[i].medida
                delete ADMBEERS[i].recipiente
                delete ADMBEERS[i].descricaoBeer
                delete ADMBEERS[i].imgBeer
                delete ADMBEERS[i].precoBeerInt
                delete ADMBEERS[i].precoBeerCent
                delete ADMBEERS[i].tituloBeer
                delete ADMBEERS[i].qtd
                delete ADMBEERS[i]
            }
        }
    }
}