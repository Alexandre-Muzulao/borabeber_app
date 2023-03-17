function parseAdmVodka(VODKA){    
    if (VODKA !== undefined){
        for (i = 0; i < VODKA.length; i++){
            formatVodkas(VODKA)
            if (isPar(i) == 'par'){
                VODKA[i].idVodkaPar = VODKA[i].idVodka
                VODKA[i].tituloPar = VODKA[i].titulo
                VODKA[i].imgVodkaPar = URLVODKA + VODKA[i].img
                VODKA[i].precoVodkaPar = VODKA[i].vodkaPrecoInt + ',' + VODKA[i].vodkaPrecoCent
                VODKA[i].precoVodkaIntPar = VODKA[i].vodkaPrecoInt
                VODKA[i].precoVodkaCentPar = VODKA[i].vodkaPrecoCent
                VODKA[i].tituloVodkaPar = VODKA[i].tituloVodka
                VODKA[i].medidaPar = VODKA[i].medida
                VODKA[i].recipientePar = VODKA[i].recipiente
                VODKA[i].alcoolPar = VODKA[i].alcool
                VODKA[i].anosPar = VODKA[i].anos
                VODKA[i].qtdVodkaPar = VODKA[i].qtd
                VODKA[i].idVodkaImpar = ""
                VODKA[i].tituloImpar = ""
                VODKA[i].imgVodkaImpar = ""
                VODKA[i].precoVodkaImpar = ""
                VODKA[i].tituloVodkaImpar = ""
                VODKA[i].medidaImpar = ""
                VODKA[i].recipienteImpar = ""
                VODKA[i].alcoolImpar = ""
                VODKA[i].anosImpar = ""
                delete VODKA[i].idVodka
                delete VODKA[i].titulo
                delete VODKA[i].imgVodka
                delete VODKA[i].precoVodka
                delete VODKA[i].tituloVodka
                delete VODKA[i].medida
                delete VODKA[i].recipiente
                delete VODKA[i].alcool
                delete VODKA[i].anos
            } else {
                VODKA[i - 1].idVodkaImpar = VODKA[i].idVodka
                VODKA[i - 1].tituloImpar = VODKA[i].titulo
                VODKA[i - 1].imgVodkaImpar = URLVODKA + VODKA[i].img
                VODKA[i - 1].precoVodkaImpar = VODKA[i].vodkaPrecoInt + ',' + VODKA[i].vodkaPrecoCent
                VODKA[i - 1].precoVodkaIntImpar = VODKA[i].vodkaPrecoInt
                VODKA[i - 1].precoVodkaCentImpar = VODKA[i].vodkaPrecoCent
                VODKA[i - 1].tituloVodkaImpar = VODKA[i].tituloVodka
                VODKA[i - 1].medidaImpar = VODKA[i].medida
                VODKA[i - 1].recipienteImpar = VODKA[i].recipiente
                VODKA[i - 1].alcoolImpar = VODKA[i].alcool
                VODKA[i - 1].anosImpar = VODKA[i].anos
                VODKA[i - 1].qtdVodkaImpar = VODKA[i].qtd
                delete VODKA[i].idVodka
                delete VODKA[i].medida
                delete VODKA[i].recipiente
                delete VODKA[i].titulo
                delete VODKA[i].imgVodka
                delete VODKA[i].vodkaPrecoInt
                delete VODKA[i].vodkaPrecoCent
                delete VODKA[i].tituloVodka
                delete VODKA[i].alcool
                delete VODKA[i].anos
                delete VODKA[i]
            }
        }
    }
}