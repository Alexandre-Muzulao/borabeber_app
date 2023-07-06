function parseAdmVodka(ADMVODKA){    
    if (ADMVODKA !== undefined){
        for (i = 0; i < ADMVODKA.length; i++){
            formatVodkas(ADMVODKA)
            if (isPar(i) == 'par'){
                ADMVODKA[i].idVodkaPar = ADMVODKA[i].idVodka || ADMVODKA[i]._id
                ADMVODKA[i].imgVodkaPar = URLIMAGEVODKA + ADMVODKA[i].img
                ADMVODKA[i].precoVodkaPar = ADMVODKA[i].vodkaPrecoInt + ',' + ADMVODKA[i].vodkaPrecoCent
                ADMVODKA[i].precoVodkaIntPar = ADMVODKA[i].vodkaPrecoInt
                ADMVODKA[i].precoVodkaCentPar = ADMVODKA[i].vodkaPrecoCent
                ADMVODKA[i].tituloVodkaPar = ADMVODKA[i].titulo
                ADMVODKA[i].recipienteVodkaPar = ADMVODKA[i].recipiente
                ADMVODKA[i].medidaVodkaPar = ADMVODKA[i].medida
                ADMVODKA[i].alcoolVodkaPar = ADMVODKA[i].alcool
                ADMVODKA[i].qtdVodkaPar = ADMVODKA[i].qtd
                ADMVODKA[i].fabricanteVodkaPar = ADMVODKA[i].fabricante
                ADMVODKA[i].idVodkaImpar = ""
                ADMVODKA[i].tituloImpar = ""
                ADMVODKA[i].imgVodkaImpar = ""
                ADMVODKA[i].precoVodkaImpar = ""
                ADMVODKA[i].tituloVodkaImpar = ""
                ADMVODKA[i].medidaImpar = ""
                ADMVODKA[i].recipienteImpar = ""
                ADMVODKA[i].alcoolImpar = ""
                ADMVODKA[i].anosImpar = ""
                delete ADMVODKA[i].idVodka
                delete ADMVODKA[i].titulo
                delete ADMVODKA[i].imgVodka
                delete ADMVODKA[i].precoVodka
                delete ADMVODKA[i].tituloVodka
                delete ADMVODKA[i].medida
                delete ADMVODKA[i].recipiente
                delete ADMVODKA[i].alcool
                delete ADMVODKA[i].anos
                delete ADMVODKA[i].img
            } else {
                ADMVODKA[i - 1].idVodkaImpar = ADMVODKA[i].idVodka || ADMVODKA[i]._id
                ADMVODKA[i - 1].tituloVodkaImpar = ADMVODKA[i].titulo
                ADMVODKA[i - 1].imgVodkaImpar = URLIMAGEVODKA + ADMVODKA[i].img
                ADMVODKA[i - 1].precoVodkaImpar = ADMVODKA[i].vodkaPrecoInt + ',' + ADMVODKA[i].vodkaPrecoCent
                ADMVODKA[i - 1].precoVodkaIntImpar = ADMVODKA[i].vodkaPrecoInt
                ADMVODKA[i - 1].precoVodkaCentImpar = ADMVODKA[i].vodkaPrecoCent
                ADMVODKA[i - 1].medidaVodkaImpar = ADMVODKA[i].medida
                ADMVODKA[i - 1].recipienteVodkaImpar = ADMVODKA[i].recipiente
                ADMVODKA[i - 1].alcoolVodkaImpar = ADMVODKA[i].alcool
                ADMVODKA[i - 1].anosVodkaImpar = ADMVODKA[i].anos
                ADMVODKA[i - 1].qtdVodkaImpar = ADMVODKA[i].qtd
                ADMVODKA[i - 1].fabricanteVodkaImpar = ADMVODKA[i].fabricante
                delete ADMVODKA[i].idVodka
                delete ADMVODKA[i].medida
                delete ADMVODKA[i].recipiente
                delete ADMVODKA[i].titulo
                delete ADMVODKA[i].imgVodka
                delete ADMVODKA[i].vodkaPrecoInt
                delete ADMVODKA[i].vodkaPrecoCent
                delete ADMVODKA[i].tituloVodka
                delete ADMVODKA[i].alcool
                delete ADMVODKA[i].anos
                delete ADMVODKA[i]
            }
        }
    }
}