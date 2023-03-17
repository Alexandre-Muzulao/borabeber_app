var setIntervalId = 0

function showPedidoStatus(classId){
    switch (classId.toLowerCase()) {
        case 'aguardando':
            include('pedidoStatus', './view/loaders/aguardando')
        break;
        case 'confirmado':
            include('pedidoStatus', './view/loaders/confirmado')
        break;
        case 'separando':
            include('pedidoStatus', './view/loaders/separacao')
        break;
        case 'saiu entregar':
            include('pedidoStatus', './view/loaders/saiuEntregar')
        break;
        case 'entregue':
            clearInterval(setIntervalId)
            include('pedidoStatus', './view/loaders/entregue')
        break;
    }
    setIdVisible('pedidoStatus')
}

function deliveryValidUpdate(data){
    var pedidos = []
    pedidos = data.map(function(value){
        if (value.pedido.activity){
            showPedidoStatus(value.pedido.status)
        }
    })
}

function deliveryTrack(){
    MobileUI.ajax.get(url + '/getpedidos')
        .query('data='+ moment().format('YYYY-MM-DD') +'&company=5cbf93a6f8c28b70a607ae85&type=userday')
        .send()
        .then(function (res){
            if (res.body.data.length > 0){
                if (getActivityRequest(res.body.data)){
                    deliveryUpdateUserStatusAuto()
                }
            }
    })
}

function getActivityRequest(request){
    var pedidos = []
    pedidos = request.map(function(value){
        if (value.pedido.activity){
            openToast({
                message: 'Você possui algum pedido ainda não recebido!!',
                position: 'center',
                class: 'full text-big text-strong black-opacity-70 text-white radius',
            })
            deliveryUpdateUserStatusAuto()
            PEDIDO = value
            return value.pedido.activity
        }
    })
}

function trackOrder(id, status){
    if (USER._id == ""){
        toastCender("Nenhum pedido pendente!!")
        closeMenu('userMenu')
        setTimeout(function(){

            toastCender("Faça um pedido !")
        }, 2000)
    } else {
        openPage('./view/user/entrega/acompanhar.html', function(){
            showPedidoStatus(status)
        })
    }
}

function deliveryUpdateUserStatus(id){
    // class id 'pedidoStatus'    
    trackOrder(id)
}

function deliveryUpdateUserStatusAuto(){    
    setIntervalId = setInterval(function(){
        MobileUI.ajax.get(url + '/getpedidos')
        .query('data='+ moment().format('YYYY-MM-DD') +'&company=5cbf93a6f8c28b70a607ae85&type=userday')
        .send()
        .then(function (res){
            deliveryValidUpdate(res.body.data)
        })
    }, 10000)
}