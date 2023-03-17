function openAdmHistoryRequests(){
    openPage('./view/adm/pedidos/admHistorico/admHistoryRequests', function(){
        MobileUI.ajax.get(url + '/getpedidos')
        .query('data='+ moment().format('YYYY-MM-DD') +'&company=5cbf93a6f8c28b70a607ae85&type=company')
        .send()
        .then(function (res){
            USERPEDIDOS = res.body.data
            parseDateHour(USERPEDIDOS)
            setColorRequestState(USERPEDIDOS)
        })
    })
}