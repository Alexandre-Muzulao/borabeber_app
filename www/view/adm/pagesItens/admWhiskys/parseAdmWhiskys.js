function parseAdmWhisky(WHISKY){
    if (WHISKY !== undefined){
        for (i = 0; i < WHISKY.length; i++){
            formatWhiskys(WHISKY)
            if (isPar(i) == 'par'){
                WHISKY[i].idWhiskyPar = WHISKY[i].idWhisky
                WHISKY[i].tituloPar = WHISKY[i].titulo
                WHISKY[i].imgPar = URLWHISKY + WHISKY[i].img
                WHISKY[i].precoWhiskyPar = WHISKY[i].whiskyPrecoInt + ',' + WHISKY[i].whiskyPrecoCent
                WHISKY[i].precoWhiskyIntPar = WHISKY[i].whiskyPrecoInt
                WHISKY[i].precoWhiskyCentPar = WHISKY[i].whiskyPrecoCent
                WHISKY[i].tituloBeerPar = WHISKY[i].tituloBeer
                WHISKY[i].medidaPar = WHISKY[i].medida
                WHISKY[i].qtdWhiskyPar = WHISKY[i].qtd
                WHISKY[i].recipientePar = WHISKY[i].recipiente
                WHISKY[i].alcoolPar = WHISKY[i].alcool
                WHISKY[i].fabricantePar = WHISKY[i].fabricante
                WHISKY[i].paisOrigemPar = WHISKY[i].paisOrigem
                WHISKY[i].anosPar = WHISKY[i].anos
                WHISKY[i].classePar = WHISKY[i].classe
                WHISKY[i].idWhiskysImpar = ""
                WHISKY[i].tituloImpar = ""
                WHISKY[i].imgImpar = ""
                WHISKY[i].precoWhiskyImpar = ""
                WHISKY[i].tituloBeerImpar = ""
                WHISKY[i].medidaImpar = ""
                WHISKY[i].recipienteImpar = ""
                WHISKY[i].alcoolImpar = ""
                WHISKY[i].fabricanteImpar = ""
                WHISKY[i].paisOrigemImpar = ""
                WHISKY[i].anosImpar = ""
                WHISKY[i].classeImpar = ""
                delete WHISKY[i].idWhiskys
                delete WHISKY[i].titulo
                delete WHISKY[i].img
                delete WHISKY[i].precoWhisky
                delete WHISKY[i].whiskyPrecoInt
                delete WHISKY[i].whiskyPrecoCent
                delete WHISKY[i].tituloBeer
                delete WHISKY[i].medida
                delete WHISKY[i].recipiente
            } else {
                WHISKY[i - 1].idWhiskyImpar = WHISKY[i].idWhisky
                WHISKY[i - 1].tituloImpar = WHISKY[i].titulo
                WHISKY[i - 1].imgImpar = URLWHISKY + WHISKY[i].img
                WHISKY[i - 1].precoWhiskyImpar = WHISKY[i].whiskyPrecoInt + ',' + WHISKY[i].whiskyPrecoCent
                WHISKY[i - 1].precoWhiskyIntImpar = WHISKY[i].whiskyPrecoInt
                WHISKY[i - 1].precoWhiskyCentImpar = WHISKY[i].whiskyPrecoCent
                WHISKY[i - 1].tituloBeerImpar = WHISKY[i].tituloBeer
                WHISKY[i - 1].medidaImpar = WHISKY[i].medida
                WHISKY[i - 1].recipienteImpar = WHISKY[i].recipiente
                WHISKY[i - 1].alcoolImpar = WHISKY[i].alcool
                WHISKY[i - 1].fabricanteImpar = WHISKY[i].fabricante
                WHISKY[i - 1].paisOrigemImpar = WHISKY[i].paisOrigem
                WHISKY[i - 1].qtdWhiskyImpar = WHISKY[i].qtd
                WHISKY[i - 1].anosImpar = WHISKY[i].anos
                WHISKY[i - 1].classeImpar = WHISKY[i].classe
                delete WHISKY[i].idWhiskys
                delete WHISKY[i].medida
                delete WHISKY[i].recipiente
                delete WHISKY[i].titulo
                delete WHISKY[i].img
                delete WHISKY[i].whiskyPrecoInt
                delete WHISKY[i].whiskyPrecoCent
                delete WHISKY[i].tituloBeer
                delete WHISKY[i].alcool
                delete WHISKY[i].fabricante
                delete WHISKY[i].paisOrigem
                delete WHISKY[i].anos
                delete WHISKY[i].classe
                delete WHISKY[i]
            }
        }
    }
}