function showConfirm(){
    alert({
        title:'Pedido Separado para o Entregador Levar ?',
        message:'<button onclick="closeCustomAlert()">Enviar pedido pelo Whats para o Entregador! <a href="https://api.whatsapp.com/send?text=Teste" class="padding icon ion-social-whatsapp-outline text-green text-huge"></a></button>',
        id: 'my-custom-id-alert'
    })
}

function closeshowConfirm() {
    closeAlert('my-custom-id-alert')
}
