function openCart(qtdItens){
    if (qtdItens == 0){
        openToast({
            message: 'Insira ao menos 1 item no carrinho',
            class: 'full text-big text-strong black-opacity-70 text-white',
            position: 'center',
        })
    } else {
        openPage('./view/user/cart/cart.html')
    }
}