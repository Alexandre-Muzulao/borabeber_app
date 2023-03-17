var PEDIDO = {}
var ITENSPEDIDO = []
function confirmSendPedido(){
    if (USER._id == ""){
        setIdHidden('btnSendPedGuest')
    }
    showLoader('sendRequest')
    setIdHidden('btnConfirm')
    if (USER._id == ""){
        var user = {}
        var dadosUser = {}
        dadosUser.typeAccount = 'user'
        dadosUser.nomeUser = document.getElementById('nomeGuest').value
        dadosUser.cellUser = document.getElementById('cellGuest').value
        dadosUser.passwordUser = document.getElementById('passwordGuest').value
        dadosUser.passwordConfirmUser = document.getElementById('passwordConfirmGuest').value
        dadosUser.imgUser = document.getElementById('imgUser').getAttribute('src')
        dadosUser.isConected = true
        dadosUser.createdAt = moment().format(),
        dadosUser.address = ENTREGA
        
        MobileUI.ajax.post(url + '/register')
            .send(dadosUser)
            .then(function(res){
                setTimeout(function(){
                    switch (res.statusCode) {
                        case 200:
                            user = {
                                _id : res.body.data._id,
                                name : document.getElementById('nomeGuest').value,
                                imgUser : "./img/icons/drunk.png",
                                phone : document.getElementById('cellGuest').value
                            }

                            PEDIDO = {
                                "company" : "5cbf93a6f8c28b70a607ae85",
                                user,
                                "pedido" : {
                                    "createdAt" : moment().format(),
                                    "nro" : 0,
                                    "activity" : true,
                                    "status" : "aguardando",
                                    "statusPos" : ""
                                },
                                'itens' : ITENSCART,
                                'pagamento' : PAGAMENTO,
                                'entrega' : ENTREGA
                            }
                            MobileUI.ajax.post(url + '/cadPedido')
                            .send(PEDIDO)
                            .then(function(res){
                                switch (res.statusCode) {
                                    case 200:
                                            showLoader('checkloader')
                                            setTimeout(function(){
                                                openPage('./view/user/entrega/acompanhar.html', function(){
                                                    cleanCart()
                                                    setTimeout(function(){
                                                        setIdHidden('checkLoader')
                                                    },1600)
                                                    showPedidoStatus('aguardando')
                                                    deliveryUpdateUserStatusAuto()
                                                })
                                            },1000)
                                        break;
                                
                                    default:
                                        break;
                                }
                            }).catch(function(err) {
                                console.log(err)
                            })
                        break;
                    }
                },3000)
            })
    } else {
        PEDIDO = {
            "company" : "5cbf93a6f8c28b70a607ae85",
            "user" : {
                "_id" : USER._id,
                "name" : USER.nomeUser,
                "imgUser" : "./img/icons/drunk.png",
                "phone" : USER.cellUser
            },
            "pedido" : {
                "createdAt" : moment().format(),
                "nro" : 0,
                "activity" : true,
                "status" : "aguardando",
                "statusPos" : ""
            },
            'itens' : ITENSCART,
            'pagamento' : PAGAMENTO,
            'entrega' : ENTREGA
        }
        MobileUI.ajax.post(url + '/cadPedido')
        .send(PEDIDO)
        .then(function(res){
            switch (res.statusCode) {
                case 200:
                        showLoader('checkloader')
                        setTimeout(function(){
                            PEDIDO = res.body.data
                            openPage('./view/user/entrega/acompanhar.html', function(){
                                cleanCart()
                                setTimeout(function(){
                                    setIdHidden('checkLoader')
                                },1600)
                                showPedidoStatus('aguardando')
                                deliveryUpdateUserStatusAuto()
                            })
                        },1000)
                    break;
            
                default:
                    break;
            }
        }).catch(function(err) {
            console.log(err)
        })
    }
}
