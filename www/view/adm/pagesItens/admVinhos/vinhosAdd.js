function addVinhos(idImgVinho, rotulo, recipiente, tamanho){
    var index
    if (document.getElementById(idImgVinho + 'item').checked){
        document.getElementById(idImgVinho + 'item').checked = false;
        for (i = 0; i < vinhos.length; i++){
            if (vinhos[i].idImgVinho == idImgVinho){
                index = i
            }
        }
        if (index > -1) {
            vinhos.splice(index, 1);
        }
    } else {
        document.getElementById(idImgVinho + 'item').checked = true;
        vinhos.push({idImgVinho})
    }
}

function saveVinhos(){
    var box = '<div class="grey-800 align-center">'
    box += '    <p>Os Vinhos selecionadas serão disponibilizadas para que você informe o preço.</p>'
    box += '    <p>Após o preço da garrafa ser informado, esta será publicada para ser vista.</p>'
    box += '</div>'
    alert({
        title: 'Colocar a garrafa na pratelheira?',
        message: box,
        class: 'grey-800 radius',
        buttons:[
          {
            label: 'Sim',
            class: 'text-green ion-checkmark-round text-huge',
            onclick: function(){
              closeAlert()
              sendVinhoToShelf()
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

function sendVinhoToShelf(){
    var item = {}
    item = {
      "idEstabelecimento": IDCOMPANY,
      vinhos
  }
    var erro = ''
    showLoader("alertBoraBeberLoader", 'Colocando seus Vinhos na pratelheira!')
    MobileUI.ajax.post(url + '/postvinho')
        // .set({"token" : ''})
        .send(item)
        .then(function (res){
        if(res.body.errorMessage) {
            setIdHidden('customImgAlert')
            alert(res.body.errorMessage)
        } else {
            setIdHidden('customImgAlert')
            openToast({
                message: res.body.message,
                position: 'center',
                class: 'full text-big text-strong black-opacity-70 text-white radius',
            })
            if (res.body.status){
              ADMVINHOS = res.body.data
                parseAdmVinhos(ADMVINHOS)
                setTimeout(function(){
                    backPage()
                    ALLVinho = []
                    Vinhos = []
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