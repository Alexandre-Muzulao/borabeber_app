var ENTREGA = {}

function loadDeliveryPag(){
    var minValue = parseFloat(DistanceBaseSettings.valorMinimo)
    var cartValue = parseFloat(CART.vTotalInt + '.' + CART.vTotalCent)
    // Se o valor minimo for menor que o valor do carrinho, então mostra a mensagem
    if (minValue > cartValue){
        openToast({
            message: "Valor minimo para a entrega é de R$ " + minValue.toString().replace('.',','),
            position: 'center',
            class: 'full text-big text-strong black-opacity-70 text-white radius',
        })
    } else {
        // if (ENTREGA.cep == undefined){
            openPage('./view/user/entrega/entrega.html', function(){
                if (ENTREGA.cep !== undefined){
                    deliveryDataSetExist(ENTREGA)
                }
                $("#cepEntregar").keypress(function(){
                    try {
                        $("#cepEntregar").unmask();
                    } catch (e) {}
        
                    var tamanho = $("#cepEntregar").val().length
                    if(tamanho == 7){
                        setTimeout(function(){
                            PAGAMENTO.payDeliveryTaxi = 0
                            if (PAGAMENTO.payDeliveryTaxi !== 0){
                                CART.vTotalInt = PAGAMENTO.payValueTot - PAGAMENTO.payDeliveryTaxi
                                PAGAMENTO.payValueTot = CART.vTotalInt + ',' +  CART.vTotalCent
                            }
                            consultaCEP($("#cepEntregar").val(), function(data){
                                Promise.resolve(data).then(function(data){
                                    if (data.uf !== undefined){
                                        document.getElementById('nroEntrega').value = ""
                                        deliveryDataSet(data)
                                    }
                                })
                            })
                        },100)
                    }
    
                    // ajustando foco
                    var elem = this;
                    
                    setTimeout(function(){
                        // mudo a posição do seletor
                        elem.selectionStart = elem.selectionEnd = 10000;
                    }, 0);
                    // reaplico o valor para mudar o foco
                    var currentValue = $(this).val();
                    $(this).val('');
                    $(this).val(currentValue);
                })
            })
        // } else {
        //     openPage('./view/user/entrega/entrega.html', function(){
        //         console.log(ENTREGA)
        //         deliveryDataSetExist(ENTREGA)
        //     })
        // }
    }
}

function deliveryDataSetExist(ENTREGA){
    console.log(ENTREGA)
    var lbCep = document.getElementById('lbCEP')
    var lbNro = document.getElementById('lbNro')
    var lbLogr = document.getElementById('lbLogr')
    var lbBairro = document.getElementById('lbBairro')
    var lbCidade = document.getElementById('lbCidade')
    var lbEstado = document.getElementById('lbEstado')

    document.getElementById('Cep').style.visibility='visible'
    document.getElementById('Nro').style.visibility='visible'
    document.getElementById('Logradouro').style.visibility='visible'
    document.getElementById('Bairro').style.visibility='visible'
    document.getElementById('Cidade').style.visibility='visible'
    document.getElementById('Estado').style.visibility='visible'
    document.getElementById('Complemento').style.visibility='visible'
    document.getElementById('Referencia').style.visibility='visible'
    
    document.getElementById('cepEntregar').value = ENTREGA.cep
    document.getElementById('nroEntrega').value = ENTREGA.nro
    document.getElementById('deliveryLogr').value = ENTREGA.logradouro
    document.getElementById('deliveryBairro').value = ENTREGA.bairro
    document.getElementById('deliveryCidade').value = ENTREGA.cidade
    document.getElementById('deliveryEstado').value = ENTREGA.estado

    lbCep.classList.add('focus')
    lbNro.classList.add('focus')
    lbLogr.classList.add('focus')
    lbBairro.classList.add('focus')
    lbCidade.classList.add('focus')
    lbEstado.classList.add('focus')
}

function deliveryDataSet(data){
    var lbLogr = document.getElementById('lbLogr')
    var lbBairro = document.getElementById('lbBairro')
    var lbCidade = document.getElementById('lbCidade')
    var lbEstado = document.getElementById('lbEstado')

    document.getElementById('Logradouro').style.visibility='visible'
    document.getElementById('Bairro').style.visibility='visible'
    document.getElementById('Cidade').style.visibility='visible'
    document.getElementById('Estado').style.visibility='visible'
    document.getElementById('Complemento').style.visibility='visible'
    document.getElementById('Referencia').style.visibility='visible'
    
    document.getElementById('deliveryLogr').value = data.logradouro
    document.getElementById('deliveryBairro').value = data.bairro
    document.getElementById('deliveryCidade').value = data.localidade
    document.getElementById('deliveryEstado').value = data.uf

    lbLogr.classList.add('focus')
    lbBairro.classList.add('focus')
    lbCidade.classList.add('focus')
    lbEstado.classList.add('focus')
    setdelyveryAddress(data.cep, document.getElementById('nroEntrega').value)
}

function openPagamentoDelivery(){
    var cep, nro = ''
    cep = document.getElementById('cepEntregar').value
    nro = document.getElementById('nroEntrega').value
    if (validaLocalEntrega(cep, nro)){
        ENTREGA = {
            "retirada" : false
        }
        setdelyveryAddress(cep, nro)
        pushDelyveryValue()
    } else {
        openToast({
            message: '',
            message: msgError,
            class: 'full text-big text-strong black-opacity-70 text-white',
            position: 'center',
        })
    }
}

function openPagamentoRetirada(){
    ENTREGA = {
        "retirada" : true
    }
    openPage('./view/user/pagamento/pagamento', function(){
        $("#payValueCash").keypress(function(){
            setTimeout(function(){
                calcChange()
            },100)
        })
    })
}

function setdelyveryAddress(cep, nro){
    try {
        if(!ENTREGA.retirada){
            ENTREGA = {
                "cep" : cep, "nro" : nro,
                "logradouro" : document.getElementById('deliveryLogr').value,
                "bairro" : document.getElementById('deliveryBairro').value,
                "complemento" : document.getElementById('deliveryComplemento').value,
                "cidade" : document.getElementById('deliveryCidade').value,
                "estado" : document.getElementById('deliveryEstado').value,
                "referencia" : document.getElementById('deliveryReferencia').value
            }
        }   
    } catch (error) {
        console.log(error)
    }
}

function pushDelyveryValue(){
    if (PAGAMENTO.payDeliveryTaxi == 0){
        loading('Calculando Entrega...')
        var dados = {
            COMPANY_ID : COMPANY._id,
            VALOR : CART.vTotalInt + '.' + CART.vTotalCent,
            ENTREGA : 
                ENTREGA.logradouro + ', ' +
                ENTREGA.nro + ', ' +
                ENTREGA.bairro + ', ' +
                ENTREGA.cep,
            COMPANY : 
                COMPANY.enderecoCompany + ', ' + 
                COMPANY.nroCompany + ', ' + 
                COMPANY.bairroCompany + ', ' + 
                COMPANY.cepCompany.replace('-', '')
        }
        
        MobileUI.ajax.get(url + '/getdistance')
        .query(dados)
        .send()
        .then(function (res){
            closeLoading()
            if (res.body.data.delivery == 'OK'){
                openPage('./view/user/pagamento/pagamento', function(){
                    $("#payValueCash").keypress(function(){
                        setTimeout(function(){
                            calcChange()
                        },100)
                    })
                })
                CART.vTotalInt = parseInt(CART.vTotalInt) + parseInt(res.body.data.price)
                PAGAMENTO.payDeliveryTaxi = parseFloat(res.body.data.price).toFixed(2)
                PAGAMENTO.payValueTot = CART.vTotalInt + ',' +  CART.vTotalCent
            } else {
                alert('Infelizmente não entregamos neste endereço.')
            }
                    
            if (res.body.erro){
                showLoader('alertGetEndereco')
                setIdHidden('customImgAlert')
            } else {
                setIdHidden('customImgAlert')
                return res.body
            }
        })
    } else {
        openPage('./view/user/pagamento/pagamento', function(){
            $("#payValueCash").keypress(function(){
                setTimeout(function(){
                    calcChange()
                },100)
            })
        })
    }
    // CART.vTotalInt = parseInt(CART.vTotalInt) + parseFloat(DistanceBaseSettings.valorMinimo)
    // PAGAMENTO.payValueTot = CART.vTotalInt + ',' +  CART.vTotalCent
}
