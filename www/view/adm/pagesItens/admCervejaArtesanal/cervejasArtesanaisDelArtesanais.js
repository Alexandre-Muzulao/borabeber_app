function delTap(tapNum){
    var item = {}
    item.idCompany = IDCOMPANY
    item.tapNum = tapNum
    item.titleTap = document.getElementById(`tapTitle${tapNum}`).value
    alert({
        title: 'Remover mesmo ?',
        message: `Deseja remover a Cerveja <strong>${item.titleTap}</strong> da sua lista de produtos ?`,
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
                    showLoader("alertBoraBeberLoader", 'Removendo de seus produtos, por favor aguarde!')
                    MobileUI.ajax.post(url + '/deletetap').send(item).then(function (res){

                        if(res.body.errorMessage) {
                            setIdHidden('customImgAlert')
                            alert(res.body.errorMessage)
                        } else {
                          
                          setTimeout(function(){
                            loadTaps(res.body.data)
                          }, 300)

                          setIdHidden('customImgAlert')
                          toastCenter(res.body.message)
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