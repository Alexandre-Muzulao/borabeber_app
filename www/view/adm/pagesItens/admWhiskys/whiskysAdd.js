function addWhiskys(idImgWhisky, rotulo, recipiente, tamanho, img){
  var index
  if (document.getElementById(idImgWhisky + 'item').checked){
    document.getElementById(idImgWhisky + 'item').checked = false;
    for (i = 0; i < whiskys.length; i++){
      if (whiskys[i].idImgWhisky == idImgWhisky){
        index = i
      }
    }
    if (index > -1) {
      whiskys.splice(index, 1);
    }
  } else {
    document.getElementById(idImgWhisky + 'item').checked = true;
    whiskys.push({idImgWhisky})
  }
}

function saveWhiskys(){
  var box = '<div class="grey-800 align-center">'
  box += '    <p>Os Whiskys selecionadas serão disponibilizadas para que você informe o preço.</p>'
  box += '    <p>Após o preço ser informada esta será publicada para ser vista.</p>'
  box += '</div>'
  alert({
    title: 'Colocar o Whisky na pratelheira?',
    message: box,
    class: 'grey-800 radius',
    buttons:[
      {
        label: 'Salvar',
        class: 'text-green ion-checkmark-round text-huge',
        onclick: function(){
          closeAlert()
          sendToShelf()
        }
      },
      {
        label: 'Cancelar',
        class: 'text-red ion-close-round text-huge',
        onclick: function(){
          closeAlert()
        }
      }
    ]
  })
}

function sendToShelf(){
  var item = {}
  item = {
    "idEstabelecimento": IDCOMPANY,
    whiskys
  }
  var erro = ''
  showLoader("alertBoraBeberLoader", 'Colocando seus Whiskis na pratelheira!')
  MobileUI.ajax.post(url + '/postwhisky')
    // .set({"token" : ''})
    .send(item)
    .then(function (res){
    if(res.body.errorMessage) {
      setIdHidden('customImgAlert')
      alert(res.body.errorMessage)
    } else {
        setIdHidden('customImgAlert')
        openToast({
          message: "Pronto, as cervejas estão no freezer!",
          position: 'center',
          class: 'full text-big text-strong black-opacity-70 text-white radius',
        })
        if (res.body.status){
          ADMWHISKY = res.body.data.dadosWhiskys
          parseAdmWhisky(ADMWHISKY)
          setTimeout(function(){
            backPage()
          },300)
          item = {}
        }
      }
  }).catch(function (err){
    console.log(err, erro)
    setIdHidden('customImgAlert')
    alert('Ops, tive um probleminha para salvar seu item! Tente novamente por gentileza.')
  })
}