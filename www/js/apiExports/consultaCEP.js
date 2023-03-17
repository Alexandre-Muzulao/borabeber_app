function consultaCEP(cep, callback){
    showLoader('alertGetEndereco')
    callback(MobileUI.ajax.get('https://viacep.com.br/ws/' + cep + '/json/')
        .query()
        .send()
        .then(function (res){
            if (res.body.erro){
                cepErrorConsultMessage()
                showLoader('alertGetEndereco')
                setIdHidden('customImgAlert')
            } else {
                setIdHidden('customImgAlert')
                return res.body
            }
        })
    )
}

function cepErrorConsultMessage(){
    openToast({
        message: "Falha ao consultar CEP, verifique o CEP informado!",
        position: 'center',
        class: 'full text-big text-strong black-opacity-70 text-white radius',
    })
}