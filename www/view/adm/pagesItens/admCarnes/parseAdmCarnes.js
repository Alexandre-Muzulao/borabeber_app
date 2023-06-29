function isPar(number){
    if(number & 1){
        return('impar');
    } else {
        return('par');
    }
}

function parseAdmCarnes(ADMCARNES){
  try {
    if (ADMCARNES !== undefined){
      for (i = 0; i < ADMCARNES.length; i++){
        if (isPar(i) == 'par'){
          ADMCARNES[i].idCarnePar = ADMCARNES[i].idCorte
          ADMCARNES[i].corteCarnePar = ADMCARNES[i].corte
          ADMCARNES[i].imgCarnePar = URLIMAGECARNES + ADMCARNES[i].img
          ADMCARNES[i].tipoPar = ADMCARNES[i].tipo
          ADMCARNES[i].pecuariaPar = ADMCARNES[i].pecuaria
          ADMCARNES[i].precoCarnePar = ADMCARNES[i].precoCarneInt + ',' + ADMCARNES[i].precoCarneCent
          ADMCARNES[i].precoCarneIntPar = ADMCARNES[i].precoCarneInt
          ADMCARNES[i].precoCarneCentPar = ADMCARNES[i].precoCarneCent
          ADMCARNES[i].idCarneImpar = ""
          ADMCARNES[i].descricaoCarneImpar = ""
          ADMCARNES[i].imgCarneImpar = ""
          ADMCARNES[i].precoCarneImpar = ""
          delete ADMCARNES[i].idCorte
          delete ADMCARNES[i].corte
          delete ADMCARNES[i].img
          delete ADMCARNES[i].tipo
          delete ADMCARNES[i].precoCarne
        } else {
          ADMCARNES[i - 1].idCarneImpar = ADMCARNES[i].idCorte
          ADMCARNES[i - 1].corteCarneImpar = ADMCARNES[i].corte
          ADMCARNES[i - 1].imgCarneImpar = URLIMAGECARNES + ADMCARNES[i].img
          ADMCARNES[i - 1].tipoImpar = ADMCARNES[i].tipo
          ADMCARNES[i - 1].pecuariaImpar = ADMCARNES[i].pecuaria
          ADMCARNES[i - 1].precoCarneImpar = ADMCARNES[i].precoCarneInt + ',' + ADMCARNES[i].precoCarneCent
          ADMCARNES[i - 1].precoCarneIntImpar = ADMCARNES[i].precoCarneInt
          ADMCARNES[i - 1].precoCarneCentImpar = ADMCARNES[i].precoCarneCent
          delete ADMCARNES[i].idCorte
          delete ADMCARNES[i].corte
          delete ADMCARNES[i].img
          delete ADMCARNES[i].tipo
          delete ADMCARNES[i].precoCarne
          delete ADMCARNES[i]
        }
      }
    }    
  } catch (error) {
    console.log(error)
  }
}