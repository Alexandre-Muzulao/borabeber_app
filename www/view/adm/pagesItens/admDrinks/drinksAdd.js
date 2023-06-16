function addDrinks(idImgBeer, rotulo, recipiente, tamanho, img){
    var index
    if (document.getElementById(idImgBeer + 'item').checked){
        document.getElementById(idImgBeer + 'item').checked = false;
        for (i = 0; i < beers.length; i++){
            if (beers[i].idImgBeer == idImgBeer){
                index = i
            }
        }
        if (index > -1) {
            beers.splice(index, 1);
        }
    } else {
        document.getElementById(idImgBeer + 'item').checked = true;
        beers.push({idImgBeer, "descricao" : rotulo + ' ' + recipiente + ' ' + tamanho, qtd : 0})
    }
}

function saveDrinks(){
    var box = '<div class="grey-800 align-center">'
    box += '    <p>As cervejas selecionadas serão disponibilizadas para que você informe o valor e alguma descrição caso queira.</p>'
    box += '    <p>Após o valor da cerveja ser informada esta será publicada para ser vista.</p>'
    box += '</div>'
    alert({
        title: 'Colocar a cerveja no Freezer ?',
        message: box,
        class: 'grey-800 radius',
        buttons:[
            {
                label: '',
                class: 'text-green ion-checkmark-round',
                onclick: function(){
                    closeAlert()
                    addItem('beer')
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

function addItem(tpItem){
    var item = {}
    NOVABEER = []
    switch (tpItem){
        case 'beer':
            item = {
                "tp": "beer",
                "idBar": IDCOMPANY,
                "idEstabelecimento": IDCOMPANY,
                beers
            }
        break
    }
    var erro = ''
    loading('Colocando as cervejas no seu freezer!')    
    MobileUI.ajax.post(url + '/cadbaritem')
        // .set({"token" : ''})
        .send(item)
        .then(function (res){
        if(res.body.errorMessage) {
            closeLoading()
            alert(res.body.errorMessage)
        } else {
            closeLoading()
            openToast({
                message: "Pronto, as cervejas estão no freezer!",
                position: 'center',
                class: 'full text-big text-strong black-opacity-70 text-white radius',
            })
            if (res.body.status){
                ADMBEERS = res.body.data
                parseAdmBeer(ADMBEERS)
                setTimeout(function(){
                    backPage()
                    ALLBEER = []
                    beers = []
                },300)
                item = {}
            }
        }
    }).catch(function (err){
        console.log(err, erro)
        closeLoading()
        alert('Ops, tive um probleminha para salvar seu item! Tente novamente por gentileza.')
    })
}