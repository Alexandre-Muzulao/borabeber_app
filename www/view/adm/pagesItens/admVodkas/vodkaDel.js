function dellItemVodka(idVodka, titleVodka, priceVodka){
    var item = {}
    item.idEstabelecimento = IDCOMPANY
    item.idVodka = idVodka 
    alert({
        title: 'Remover mesmo ?',
        message: 'Deseja remover a <strong>'+ titleVodka +'</strong> no valor <strong>R$ '+ priceVodka +'</strong> da sua lista de produtos?',
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
                  showLoader("alertBoraBeberLoader", 'A Vodka será removida de seus produtos, por favor aguarde!')
                    MobileUI.ajax.post(url + '/removevodka').send(item).then(function (res){
                        if(res.body.errorMessage) {
                            setIdHidden('customImgAlert')
                            alert(res.body.errorMessage)
                        } else {
                            setIdHidden('customImgAlert')
                            ADMVODKA = res.body.data.dadosVodkas
                            parseAdmVodka(ADMVODKA)
                            alert('Item removido com sucesso.')
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