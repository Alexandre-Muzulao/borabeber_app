function addCarnes(idCarne, corte, img){
    var index
    if (document.getElementById(idCarne + 'item').checked){
        document.getElementById(idCarne + 'item').checked = false;
        for (i = 0; i < carnes.length; i++){
            if (carnes[i].idCarne == idCarne){
                index = i
            }
        }
        if (index > -1) {
            carnes.splice(index, 1);
        }
    } else {
        document.getElementById(idCarne + 'item').checked = true;
        carnes.push({idCarne, "corte" : corte})
    }
    console.log('carnes', carnes)
}

function saveCarnes(){
  var box = '<div class="grey-800 align-center">'
  box += '    <p>Os cortes selecionadas serão disponibilizadas para que você informe o valor por Kg.</p>'
  box += '    <p>Somente após o valor ser informado, o item será publicada para ser vista.</p>'
  box += '</div>'
  alert({
    title: 'Colocar cortes na Vitrine?',
    message: box,
    class: 'grey-800 radius',
    buttons:[
      {
        label: '',
        class: 'text-green ion-checkmark-round',
        onclick: function(){
            closeAlert()
            sendToColdRoom()
        }
      },
      {
        label: '',
        class: 'text-red ion-close-round',
        onclick: function(){
            closeAlert()
        }
      }
    ]
  })
}

function sendToColdRoom(){
  var item = {}
  NOVAcarnes = []
  item = {
    "idEstabelecimento": IDCOMPANY,
    carnes
  }
    var erro = ''
    showLoader("alertBoraBeberLoader", 'Colocando cortes na vitrine!')
    
    console.log(item)

    MobileUI.ajax.post(url + '/postcarne')
        // .set({"token" : ''})
        .send(item)
        .then(function (res){
        if(res.body.errorMessage) {
           setIdHidden('customImgAlert')
            alert(res.body.errorMessage)
        } else {
           setIdHidden('customImgAlert')
            openToast({
                message: "Pronto, as carnes estão na vitrine!",
                position: 'center',
                class: 'full text-big text-strong black-opacity-70 text-white radius',
            })
            if (res.body.status){
                ADMCARNES = res.body.data
                parseAdmCarnes(ADMCARNES)
                setTimeout(function(){
                    backPage()
                    ALLcarnes = []
                    carnes = []
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