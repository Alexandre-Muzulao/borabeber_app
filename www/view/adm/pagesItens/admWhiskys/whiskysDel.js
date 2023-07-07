function dellItemWhisky(idWhisky, titleWhisky, priceWhisky){
    var item = {}
    item.idEstabelecimento = IDCOMPANY
    item.idImgWhisky = idWhisky
    alert({
        title: 'Remover mesmo?',
        message: 'Deseja remover o Whisky <strong>'+ titleWhisky +'</strong> no valor <strong>R$ '+ priceWhisky +'</strong> da sua lista de produtos?',
        class: 'grey-50 radius',
        buttons: [
            {
                label: 'Não',
                class: 'text-red text-huge',
                onclick: function(){
                    closeAlert()
                }
            },
            {
                label: 'Sim',
                class: 'text-green text-huge',
                onclick: function(){
                  showLoader("alertBoraBeberLoader", 'O Whisky será removido de seus produtos, por favor aguarde!')
                    MobileUI.ajax.post(url + '/removewhisky').send(item).then(function (res){
                        if(res.body.errorMessage) {
                            setIdHidden('customImgAlert')
                            alert(res.body.errorMessage)
                        } else {
                            setIdHidden('customImgAlert')
                            ADMWHISKY = res.body.data.dadosWhiskys
                            parseAdmWhisky(ADMWHISKY)
                            alert('Whisky removido com sucesso.')
                        }
                    }).catch(function (err){
                        console.log(err)
                        setIdHidden('customImgAlert')
                        alert('Erro')
                    })
                    closeAlert()
                }
            }
        ]
    })
}