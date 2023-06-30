function dellItemCarne(idCarne, corteCarne, precodCarne){
    var item = {}
    item.idEstabelecimento = IDCOMPANY
    item.idCarne = idCarne
    alert({
        title: 'Remover mesmo?',
        message: 'Deseja remover o corte '+ corteCarne +' no valor R$ '+ precodCarne +' da sua vitrine?',
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
                  showLoader("alertBoraBeberLoader", 'O item será removido de seus produtos, por favor aguarde!')
                    MobileUI.ajax.post(url + '/removecarne').send(item).then(function (res){
                        if(res.body.errorMessage) {
                            setIdHidden('customImgAlert')
                            alert(res.body.errorMessage)
                        } else {
                            setIdHidden('customImgAlert')
                            ADMCARNES = res.body.data.dadosCarnes
                            parseAdmCarnes(ADMCARNES)
                            toastCenter(res.body.message)
                        }
                    }).catch(function (err){
                        console.log(err)
                        setIdHidden('customImgAlert')
                        toastCenter(res.body.message)
                    })
                    closeAlert()
                }
            }
        ]
    })
}