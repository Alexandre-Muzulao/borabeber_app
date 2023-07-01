function parseAdmWhisky(ADMWHISKY){
  if (ADMWHISKY !== undefined){
    for (i = 0; i < ADMWHISKY.length; i++){
      formatWhiskys(ADMWHISKY)
      if (isPar(i) == 'par'){
        ADMWHISKY[i].idWhiskyPar = ADMWHISKY[i].idWhisky || ADMWHISKY[i]._id
        ADMWHISKY[i].tituloWhiskyPar = ADMWHISKY[i].titulo
        ADMWHISKY[i].imgWhiskyPar = URLIMAGEWHISKY + ADMWHISKY[i].img
        ADMWHISKY[i].precoWhiskyPar = ADMWHISKY[i].whiskyPrecoInt + ',' + ADMWHISKY[i].whiskyPrecoCent
        ADMWHISKY[i].precoWhiskyIntPar = ADMWHISKY[i].whiskyPrecoInt
        ADMWHISKY[i].precoWhiskyCentPar = ADMWHISKY[i].whiskyPrecoCent
        ADMWHISKY[i].medidaWhiskyPar = ADMWHISKY[i].volume
        ADMWHISKY[i].qtdWhiskyPar = ADMWHISKY[i].qtd
        ADMWHISKY[i].recipienteWhiskyPar = ADMWHISKY[i].recipiente
        ADMWHISKY[i].graduacaoWhiskyPar = ADMWHISKY[i].graduacao
        ADMWHISKY[i].fabricanteWhiskyPar = ADMWHISKY[i].fabricante
        ADMWHISKY[i].paisOrigemWhiskyPar = ADMWHISKY[i].paisOrigem
        ADMWHISKY[i].anosWhiskyPar = ADMWHISKY[i].anos
        ADMWHISKY[i].classeWhiskyPar = ADMWHISKY[i].classe

        ADMWHISKY[i].idWhiskysWhiskyImpar = ""
        ADMWHISKY[i].tituloWhiskyImpar = ""
        ADMWHISKY[i].imgWhiskyImpar = ""
        ADMWHISKY[i].precoWhiskyWhiskyImpar = ""
        ADMWHISKY[i].medidaWhiskyImpar = ""
        ADMWHISKY[i].recipienteWhiskyImpar = ""
        ADMWHISKY[i].graduacaoWhiskyImpar = ""
        ADMWHISKY[i].fabricanteWhiskyImpar = ""
        ADMWHISKY[i].paisOrigemWhiskyImpar = ""
        ADMWHISKY[i].anosWhiskyImpar = ""
        ADMWHISKY[i].classeWhiskyImpar = ""
        delete ADMWHISKY[i].idWhiskys
        delete ADMWHISKY[i].titulo
        delete ADMWHISKY[i].img
        delete ADMWHISKY[i].precoWhisky
        delete ADMWHISKY[i].whiskyPrecoInt
        delete ADMWHISKY[i].whiskyPrecoCent
        delete ADMWHISKY[i].medida
        delete ADMWHISKY[i].recipiente
      } else {
        ADMWHISKY[i - 1].idWhiskyImpar = ADMWHISKY[i].idWhisky || ADMWHISKY[i]._id
        ADMWHISKY[i - 1].tituloWhiskyImpar = ADMWHISKY[i].titulo
        ADMWHISKY[i - 1].imgWhiskyImpar = URLIMAGEWHISKY + ADMWHISKY[i].img
        ADMWHISKY[i - 1].precoWhiskyImpar = ADMWHISKY[i].whiskyPrecoInt + ',' + ADMWHISKY[i].whiskyPrecoCent
        ADMWHISKY[i - 1].precoWhiskyIntImpar = ADMWHISKY[i].whiskyPrecoInt
        ADMWHISKY[i - 1].precoWhiskyCentImpar = ADMWHISKY[i].whiskyPrecoCent
        ADMWHISKY[i - 1].medidaWhiskyImpar = ADMWHISKY[i].volume
        ADMWHISKY[i - 1].recipienteWhiskyImpar = ADMWHISKY[i].recipiente
        ADMWHISKY[i - 1].graduacaoWhiskyImpar = ADMWHISKY[i].graduacao
        ADMWHISKY[i - 1].fabricanteWhiskyImpar = ADMWHISKY[i].fabricante
        ADMWHISKY[i - 1].paisOrigemWhiskyImpar = ADMWHISKY[i].paisOrigem
        ADMWHISKY[i - 1].qtdWhiskyWhiskyImpar = ADMWHISKY[i].qtd
        ADMWHISKY[i - 1].anosWhiskyImpar = ADMWHISKY[i].anos
        ADMWHISKY[i - 1].classeWhiskyImpar = ADMWHISKY[i].classe
        delete ADMWHISKY[i].idWhiskys
        delete ADMWHISKY[i].medida
        delete ADMWHISKY[i].recipiente
        delete ADMWHISKY[i].titulo
        delete ADMWHISKY[i].img
        delete ADMWHISKY[i].whiskyPrecoInt
        delete ADMWHISKY[i].whiskyPrecoCent
        delete ADMWHISKY[i].graduacao
        delete ADMWHISKY[i].fabricante
        delete ADMWHISKY[i].paisOrigem
        delete ADMWHISKY[i].anos
        delete ADMWHISKY[i].classe
        delete ADMWHISKY[i]
      }
    }
  }
}