function parseAdmVinhos(ADMVINHOS){
  console.log('ADMVINHOS', ADMVINHOS)
  if (ADMVINHOS !== undefined){
    for (i = 0; i < ADMVINHOS.length; i++){
      formatVinho(ADMVINHOS)
      if (isPar(i) == 'par'){
        ADMVINHOS[i].idVinhoPar = ADMVINHOS[i].idvinho
        ADMVINHOS[i].descricaoVinhoPar = ADMVINHOS[i].descricao
        ADMVINHOS[i].imgVinhoPar = URLIMAGEVINHO + ADMVINHOS[i].img
        ADMVINHOS[i].precoVinhoPar = ADMVINHOS[i].precoVinhoInt + ',' + ADMVINHOS[i].precoVinhoCent
        ADMVINHOS[i].precoVinhoIntPar = ADMVINHOS[i].precoVinhoInt
        ADMVINHOS[i].precoVinhoCentPar = ADMVINHOS[i].precoVinhoCent
        ADMVINHOS[i].tituloVinhoPar = ADMVINHOS[i].titulo
        ADMVINHOS[i].volumeVinhoPar = ADMVINHOS[i].volume
        ADMVINHOS[i].recipienteVinhoPar = ADMVINHOS[i].recipiente
        ADMVINHOS[i].graduacaoVinhoPar = ADMVINHOS[i].graduacao
        ADMVINHOS[i].produtorVinhoPar = ADMVINHOS[i].produtor
        ADMVINHOS[i].paisOrigemVinhoPar = ADMVINHOS[i].paisOrigem
        ADMVINHOS[i].regiaoVinhoPar = ADMVINHOS[i].regiao
        ADMVINHOS[i].safraVinhoPar = ADMVINHOS[i].safra
        ADMVINHOS[i].uvaVinhoPar = ADMVINHOS[i].uva
        ADMVINHOS[i].tipoVinhoPar = ADMVINHOS[i].tipo
        ADMVINHOS[i].idVinhoImpar = ""
        ADMVINHOS[i].descricaoVinhoImpar = ""
        ADMVINHOS[i].imgVinhoImpar = ""
        ADMVINHOS[i].precoVinhoImpar = ""
        ADMVINHOS[i].tituloVinhoImpar = ""
        ADMVINHOS[i].recipienteImpar = ""
        delete ADMVINHOS[i].idvinho
        delete ADMVINHOS[i].descricaoVinho
        delete ADMVINHOS[i].imgVinho
        delete ADMVINHOS[i].precoVinhoCent
        delete ADMVINHOS[i].precoVinhoInt
        delete ADMVINHOS[i].precoVinho
        delete ADMVINHOS[i].tituloVinho
        delete ADMVINHOS[i].recipiente
      } else {
        ADMVINHOS[i - 1].idVinhoImpar = ADMVINHOS[i].idvinho
        ADMVINHOS[i - 1].descricaoVinhoImpar = ADMVINHOS[i].descricao
        ADMVINHOS[i - 1].imgVinhoImpar = URLIMAGEVINHO + ADMVINHOS[i].img
        ADMVINHOS[i - 1].precoVinhoImpar = ADMVINHOS[i].precoVinhoInt + ',' + ADMVINHOS[i].precoVinhoCent
        ADMVINHOS[i - 1].precoVinhoIntImpar = ADMVINHOS[i].precoVinhoInt
        ADMVINHOS[i - 1].precoVinhoCentImpar = ADMVINHOS[i].precoVinhoCent
        ADMVINHOS[i - 1].tituloVinhoImpar = ADMVINHOS[i].titulo
        ADMVINHOS[i - 1].volumeVinhoImpar = ADMVINHOS[i].volume
        ADMVINHOS[i - 1].recipienteVinhoImpar = ADMVINHOS[i].recipiente
        ADMVINHOS[i - 1].graduacaoVinhoImpar  = ADMVINHOS[i].graduacao
        ADMVINHOS[i - 1].produtorVinhoImpar = ADMVINHOS[i].produtor
        ADMVINHOS[i - 1].paisOrigemVinhoImpar = ADMVINHOS[i].paisOrigem
        ADMVINHOS[i - 1].regiaoVinhoImpar = ADMVINHOS[i].regiao
        ADMVINHOS[i - 1].safraVinhoImpar = ADMVINHOS[i].safra
        ADMVINHOS[i - 1].uvaVinhoImpar = ADMVINHOS[i].uva
        ADMVINHOS[i - 1].tipoVinhoImpar = ADMVINHOS[i].tipo
        delete ADMVINHOS[i].idvinho
        delete ADMVINHOS[i].recipiente
        delete ADMVINHOS[i].descricaoVinho
        delete ADMVINHOS[i].imgVinho
        delete ADMVINHOS[i].precoVinhoInt
        delete ADMVINHOS[i].precoVinhoCent
        delete ADMVINHOS[i].tituloVinho
        delete ADMVINHOS[i]
      }
    }
  }
}