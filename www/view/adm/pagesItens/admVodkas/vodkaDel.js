function dellItemVodka(idVodka, titleVodka, priceVodka){
    var item = {}
    item.idBar = IDCOMPANY
    item.idVodka = idVodka 
    alert({
        title: 'Remover mesmo ?',
        message: 'Deseja remover a Cerveja '+ titleVodka +' no valor R$ '+ priceVodka +' da sua lista de produtos ?',
        class: 'grey-50 radius',
        buttons: [
            {
                label: 'Não',
                class: 'text-black',
                onclick: function(){
                    closeAlert()
                }
            },
            {
                label: 'Sim',
                class: 'text-black',
                onclick: function(){
                    loading('O item será removido de seus produtos, por favor aguarde!')
                    MobileUI.ajax.post(url + '/removevodka').send(item).then(function (res){
                        if(res.body.errorMessage) {
                            closeLoading()
                            alert(res.body.errorMessage)
                        } else {
                            closeLoading()
                            ADMVODKA = res.body.data.dadosVodkas
                            parseAdmVodka(ADMVODKA)
                            alert('Item removido com sucesso.')
                        }
                    }).catch(function (err){
                        console.log(err)
                        closeLoading()
                        alert('Erro')
                    })
                    closeAlert()
                }
            }
        ]
    })
}