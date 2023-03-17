var USERPEDIDOS, USERPEDIDODETAIL = []
function openHistoryRequests(){
    if (USER._id == ""){
        toastCender("Você não está logado! )=")
        closeMenu('userMenu')
        setTimeout(function(){

            toastCender("Faça o Login para consultar o histórico dos pedidos")
        }, 2000)
    } else {
        openPage('./view/user/pedido/historico/historico', function(){
            MobileUI.ajax.get(url + '/getpedidos')
            .query('data='+ moment().format('YYYY-MM-DD') +'&company=5cbf93a6f8c28b70a607ae85&type=user&idUser=' + USER._id)
            .send()
            .then(function (res){
                USERPEDIDOS = res.body.data
                parseDateHour(USERPEDIDOS)
                setColorRequestState(USERPEDIDOS)
            })
        })
    }
}

function openDetailHistory(id){
    openPage('./view/user/pedido/historico/detail', function(){
        var state = []
        state = USERPEDIDOS.map(function(value){
            if(id == value._id){                
                USERPEDIDODETAIL = value
            }
        })
    })
}