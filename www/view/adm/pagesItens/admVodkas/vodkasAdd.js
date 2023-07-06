function addVodkas(idImgVodka){
  var index
  if (document.getElementById(idImgVodka + 'item').checked){
    document.getElementById(idImgVodka + 'item').checked = false;
    for (i = 0; i < vodkas.length; i++){
      if (vodkas[i].idImgVodka == idImgVodka){
        index = i
      }
    }
    if (index > -1) {
      vodkas.splice(index, 1);
    }
  } else {
    document.getElementById(idImgVodka + 'item').checked = true;
    vodkas.push({idImgVodka})
  }
}

function saveVodkas(){
  var box = '<div class="grey-800 align-center">'
  box += '    <p>As Vodkas selecionadas serão disponibilizadas para que você informe o preço.</p>'
  box += '    <p>Após o preço ser informada será publicada para ser vista.</p>'
  box += '</div>'
  alert({
    title: 'Colocar a Vodka na pratelheira?',
    message: box,
    class: 'grey-800 radius',
    buttons:[
      {
        label: 'Sim',
        class: 'text-green ion-checkmark-round text-huge',
        onclick: function(){
          closeAlert()
          sendVodkaToShelf()
        }
      },
      {
        label: 'Não',
        class: 'text-red ion-close-round text-huge',
        onclick: function(){
          closeAlert()
        }
      }
    ]
  })
}

function sendVodkaToShelf(){
  var item = {}
  item = {
    "idEstabelecimento": IDCOMPANY,
    vodkas
  }
  var erro = ''
  showLoader("alertBoraBeberLoader", 'Colocando suas Vodkas na pratelheira!')
  MobileUI.ajax.post(url + '/postvodka')
    // .set({"token" : ''})
    .send(item)
    .then(function (res){
    if(res.body.errorMessage) {
      setIdHidden('customImgAlert')
      alert(res.body.errorMessage)
    } else {
      if (res.body.status){
          setIdHidden('customImgAlert')
          openToast({
            message: res.body.message,
            position: 'center',
            class: 'full text-big text-strong black-opacity-70 text-white radius',
          })
          console.log(res.body.data)
          ADMVODKA = res.body.data.dadosVodkas
          parseAdmVodka(ADMVODKA)
          setTimeout(function(){
            backPage()
          },300)
          item = {}
          vodkas = []
        }
      }
  }).catch(function (err){
    console.log(err, erro)
    setIdHidden('customImgAlert')
    alert('Ops, tive um probleminha para salvar seu item! Tente novamente por gentileza.')
  })
}