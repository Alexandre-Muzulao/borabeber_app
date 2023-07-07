function parseAdmVinhos(ADMVINHOS){
  console.log('ADMVINHOS', ADMVINHOS)
  if (ADMVINHOS !== undefined){
    for (i = 0; i < ADMVINHOS.length; i++){
      formatVinho(ADMVINHOS)
      if (isPar(i) == 'par'){
        ADMVINHOS[i].idVinhoPar = ADMVINHOS[i]._id
        ADMVINHOS[i].descricaoVinhoPar = ADMVINHOS[i].descricao
        ADMVINHOS[i].imgVinhoPar = URLIMAGEVINHO + ADMVINHOS[i].img
        ADMVINHOS[i].precoVinhoPar = ADMVINHOS[i].precoVinhoInt + ',' + ADMVINHOS[i].precoVinhoCent
        ADMVINHOS[i].precoVinhoIntPar = ADMVINHOS[i].precoVinhoInt
        ADMVINHOS[i].precoVinhoCentPar = ADMVINHOS[i].precoVinhoCent
        ADMVINHOS[i].tituloVinhoPar = ADMVINHOS[i].titulo
        ADMVINHOS[i].volumeVinhoPar = ADMVINHOS[i].volume
        ADMVINHOS[i].recipientePar = ADMVINHOS[i].recipiente
        ADMVINHOS[i].graduacaoPar = ADMVINHOS[i].graduacao
        ADMVINHOS[i].produtorPar = ADMVINHOS[i].produtor
        ADMVINHOS[i].paisOrigemPar = ADMVINHOS[i].paisOrigem
        ADMVINHOS[i].regiaoPar = ADMVINHOS[i].regiao
        ADMVINHOS[i].safraPar = ADMVINHOS[i].safra
        ADMVINHOS[i].uvaPar = ADMVINHOS[i].uva
        ADMVINHOS[i].tipoPar = ADMVINHOS[i].tipo
        ADMVINHOS[i].idVinhoImpar = ""
        ADMVINHOS[i].descricaoVinhoImpar = ""
        ADMVINHOS[i].imgVinhoImpar = ""
        ADMVINHOS[i].precoVinhoImpar = ""
        ADMVINHOS[i].tituloVinhoImpar = ""
        ADMVINHOS[i].recipienteImpar = ""
        delete ADMVINHOS[i]._id
        delete ADMVINHOS[i].descricaoVinho
        delete ADMVINHOS[i].imgVinho
        delete ADMVINHOS[i].precoVinhoCent
        delete ADMVINHOS[i].precoVinhoInt
        delete ADMVINHOS[i].precoVinho
        delete ADMVINHOS[i].tituloVinho
        delete ADMVINHOS[i].recipiente
      } else {
        ADMVINHOS[i - 1].idVinhoImpar = ADMVINHOS[i]._id
        ADMVINHOS[i - 1].descricaoVinhoImpar = ADMVINHOS[i].descricao
        ADMVINHOS[i - 1].imgVinhoImpar = URLIMAGEVINHO + ADMVINHOS[i].img
        ADMVINHOS[i - 1].precoVinhoImpar = ADMVINHOS[i].precoVinhoInt + ',' + ADMVINHOS[i].precoVinhoCent
        ADMVINHOS[i - 1].precoVinhoIntImpar = ADMVINHOS[i].precoVinhoInt
        ADMVINHOS[i - 1].precoVinhoCentImpar = ADMVINHOS[i].precoVinhoCent
        ADMVINHOS[i - 1].tituloVinhoImpar = ADMVINHOS[i].titulo
        ADMVINHOS[i - 1].volumeVinhoImpar = ADMVINHOS[i].volume
        ADMVINHOS[i - 1].recipienteImpar = ADMVINHOS[i].recipiente
        ADMVINHOS[i - 1].graduacaoImpar  = ADMVINHOS[i].graduacao
        ADMVINHOS[i - 1].produtorImpar = ADMVINHOS[i].produtor
        ADMVINHOS[i - 1].paisOrigemImpar = ADMVINHOS[i].paisOrigem
        ADMVINHOS[i - 1].regiaoImpar = ADMVINHOS[i].regiao
        ADMVINHOS[i - 1].safraImpar = ADMVINHOS[i].safra
        ADMVINHOS[i - 1].uvaImpar = ADMVINHOS[i].uva
        ADMVINHOS[i - 1].tipoImpar = ADMVINHOS[i].tipo
        delete ADMVINHOS[i]._id
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