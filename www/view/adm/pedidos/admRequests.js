var PEDIDOS = []
var PEDIDODETAIL = []
var QTDPEDIDOS = [{
    qtd : ''
}]
var timeToRequest = 10000

function getRequests(companyId){
    forceGetRequests()
    setInterval(function(){
        MobileUI.ajax.get(url + '/getpedidos')
            .query('data='+ moment().format('YYYY-MM-DD') +'&company=' + companyId + '&type=companyday')
            .send()
            .then(function (res){
                PEDIDOS = res.body.data
                QTDPEDIDOS[0].qtd = countPedidos(PEDIDOS)
                parseHour(PEDIDOS)
                setColorRequestState(PEDIDOS)
            })
    }, timeToRequest)
}

function forceGetRequests(companyId){
    MobileUI.ajax.get(url + '/getpedidos')
        .query('data='+ moment().format('YYYY-MM-DD') +'&company=' + companyId + '&type=companyday')
        .send()
        .then(function (res){
            PEDIDOS = res.body.data
            QTDPEDIDOS[0].qtd = countPedidos(PEDIDOS)
            parseHour(PEDIDOS)
            setColorRequestState(PEDIDOS)
        })    
}

function countPedidos(count){
    var qtd = 0
    var pedidos = []
    pedidos = count.map(function(value){
        if (value.pedido.activity){
            qtd = qtd + 1
        }
    })
        
    if( qtd > 1 ){
        return qtd + ' Pedidos na Fila'
    } else {
        return qtd + ' Pedido na Fila'
    }
}

function openDetailRequest(id){
    openPage('./view/adm/requesDetail/requestDetail', function(){
        var state = []
        state = PEDIDOS.map(function(value){
            if(id == value._id){
                PEDIDODETAIL = value
                hiddenButtonConfirm(value.pedido.status.toLowerCase())
                updateStatusPos()
            }
        })
    })
}

function updataStateRequest(id, company, state, statePos, activity){
    var DADOS = {}
    DADOS = {
        "_id" : id, "company" : company, "state" : state, "statePos" : statePos, "activity" : activity
    }
    if (state.toLowerCase() == 'concluido'){
        openPage('./view/adm/pedidos/admRequests',function(){
            openToast({
                message: "Pedido já concluido!",
                position: 'top',
                class: 'full text-big text-strong black-opacity-70 text-white radius',
            })
        })
    } else {
        loadingElement('btnUpdateRequest', 'Atualizando')
        console.log(state)
        if (state == "aguardando") {
            PrintElem()
        }
        closeLoading('btnUpdateRequest')
        DADOS = updateRequestDate(DADOS)
        MobileUI.ajax.post(url + '/updatestaterequest')
        .query()
        .send(DADOS)
        .then(function(res){
            closeLoading('btnUpdateRequest')
            openPage('./view/adm/pedidos/admRequests',function(){
                updatePedido(res.body.data._id)
            })
        })
    }

}

function hiddenButtonConfirm(status){
    if (status == 'aguardando'){
        setIdHidden('btnUpdateRequest')
    } else {
        setIdHidden('rowConfirm')
    }
}