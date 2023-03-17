
function setColorRequestState(pedidos){
    var pedido = []
    pedido = pedidos.map(function(valor){
        switch (valor.pedido.status.toLowerCase()) {
            case 'aguardando':
                valor.pedido.color = 'orange'
                valor.pedido.status = 'Aguardando'
            break;
            case 'confirmado':
                valor.pedido.color = 'yellow'
                valor.pedido.status = 'Confirmado'
            break;
            case 'separando':
                valor.pedido.color = 'teal'
                valor.pedido.status = 'Separando'
            break;
            case 'waitdeliveryman':
                console.log('waitdeliveryman')
            break;
            case 'saiu entregar':
               valor.pedido.color = 'blue'
               valor.pedido.status = 'Saiu Entregar'
            break;
            case 'entregue':
                valor.pedido.color = 'green'
                valor.pedido.status = 'Entregue'
                valor.pedido.activity = false
            break;
            case 'não atendido':
               valor.pedido.color = 'red'
               valor.pedido.status = 'Não Atendido'
            break;
        }
        return valor
    })
}

function updateStatusPos(){
    switch (PEDIDODETAIL.pedido.status.toLowerCase()) {
        case 'aguardando':
            PEDIDODETAIL.pedido.statusPos = 'Confirmar Pedido'
        break;
        case 'confirmado':
            PEDIDODETAIL.pedido.statusPos = 'Separar Pedido'
        break;
        case 'separando':
            PEDIDODETAIL.pedido.statusPos = 'Enviar Entregador'
        break;
        case 'saiu entregar':
            PEDIDODETAIL.pedido.statusPos = 'Confirmar Entrega'
        break;
        case 'entregue':
            PEDIDODETAIL.pedido.statusPos = 'Concluir'
            PEDIDODETAIL.pedido.activity = false
        break;
        case 'não atendido':
            PEDIDODETAIL.pedido.statusPos = 'Notificar Problema na Entrega'
        break;
    }
}

function updatePedido(id){
    var pedido = []
    pedido = PEDIDOS.map(function(value){
        if(id == value._id){
            switch (value.pedido.status.toLowerCase()) {
                case 'aguardando':
                    value.pedido.color = 'orange'
                    value.pedido.status = 'Confirmado'
                    value.pedido.statusPos = 'Confirmar Pedido'
                break;
                case 'confirmado':
                    value.pedido.color = 'yellow'
                    value.pedido.status = 'Separando'
                    value.pedido.statusPos = 'Separar Pedido'
                break;
                case 'separando':
                    value.pedido.color = 'teal'
                    value.pedido.status = 'Saiu Entregar'
                    value.pedido.statusPos = 'Entreguar Pedido'
                break;
                case 'saiu entregar':
                    value.pedido.color = 'blue'
                    value.pedido.status = 'Entregue'
                    value.pedido.statusPos = 'Confirmar Entrega'
                break;
                case 'entregue':
                    value.pedido.color = 'green'
                    value.pedido.status = 'Concluido'
                    value.pedido.activity = false
                    value.pedido.statusPos = 'Concluir'
                break;
                case 'não atendido':
                    value.pedido.color = 'red'
                    value.pedido.status = 'Não Atendido'
                    value.pedido.statusPos = 'Notificar Problema na Entrega'
                break;
            }
        }
    })
}

function updateRequestDate(date){
    switch (date.state.toLowerCase()) {
        case 'aguardando':
            date.color = 'orange'
            date.state = 'Confirmado'
        break;
        case 'confirmado':
            date.color = 'yellow'
            date.state = 'Separando'
        break;
        case 'separando':
            date.color = 'teal'
            date.state = 'Saiu Entregar'
        break;
        case 'saiu entregar':
            date.color = 'blue'
            date.state = 'Entregue'
        break;
        case 'entregue':
            date.color = 'green'
            date.state = 'Concluido'
        break;
        case 'não atendido':
            date.color = 'red'
            date.state = 'Não Atendido'
        break;
    }
    return date
}
