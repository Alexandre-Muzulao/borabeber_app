function deleteEssencias(idBeer, titleBeer, priceBeer){
    var item = {}
    item.idBar = IDCOMPANY
    item.idBeer = idBeer
    alert({
        title: 'Remover mesmo ?',
        message: 'Deseja remover a Cerveja '+ titleBeer +' no valor R$ '+ priceBeer +' da sua lista de produtos ?',
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
                    MobileUI.ajax.post(url + '/removebeer').send(item).then(function (res){
                        if(res.body.errorMessage) {
                            closeLoading()
                            alert(res.body.errorMessage)
                        } else {
                            closeLoading()
                            ADMBEERS = res.body.data.dadosBeer
                            parseAdmBeer(ADMBEERS)
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