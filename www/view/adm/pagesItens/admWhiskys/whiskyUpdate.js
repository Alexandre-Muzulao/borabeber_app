var tpUpdate = ''
function updateValueItemWhisky(idWhisky){
    var input = ''
    input += '<div class="col-15">'
    input += '    <label class="text-white" style="font-size: 16px;">R$ </label>'
    input += '</div>'
    input += '<div class="col-80">'
    input += '    <input type="tel" class="text-white" id="newPriceWhisky'+ idWhisky +'" style=" margin-left: 2px; font-size: 16px;">'
    input += '</div>'
    document.getElementById('input' + idWhisky).innerHTML = input
    MobileUI.hide('btnDelete' + idWhisky)
    MobileUI.hide('h1PriceWhisky' + idWhisky)
    document.getElementById('btnSave' + idWhisky).style.marginRight ='-15%'
    document.getElementById('btnSave' + idWhisky).style.display =''
    document.getElementById('btnCancel' + idWhisky).style.display =''
    var newPriceWhisky = document.getElementById('newPriceWhisky'+ idWhisky)
    newPriceWhisky.classList.add('focus')
    tpUpdate = 'price'
}

function updateQtdItemWhisky(idWhisky){
    var input = ''
    input += '<div class="col-15">'
    input += '    <label class="text-white" style="font-size: 16px;">Qtd.: </label>'
    input += '</div>'
    input += '<div class="col-80">'
    input += '    <input type="tel" class="text-white" id="newQtdWhisky'+ idWhisky +'" style=" margin-left: 2px; font-size: 16px;">'
    input += '</div>'
    document.getElementById('input' + idWhisky).innerHTML = input
    MobileUI.hide('btnDelete' + idWhisky)
    MobileUI.hide('h1QtdWhisky' + idWhisky)
    document.getElementById('btnSave' + idWhisky).style.marginRight ='-15%'
    document.getElementById('btnSave' + idWhisky).style.display =''
    document.getElementById('btnCancel' + idWhisky).style.display =''
    var newQtdWhisky = document.getElementById('newQtdWhisky'+ idWhisky)
    newQtdWhisky.classList.add('focus')
    tpUpdate = 'qtd'
}

function whiskySaveUpdate(idWhisky){
    var item = {}
    item.idBar = IDCOMPANY
    item.tipo = 'whisky'
    item.idWhisky = idWhisky
    item.descricao = document.getElementById('descricaoWhisky' + idWhisky).innerHTML
    if (tpUpdate == 'qtd'){
        item.qtd = parseInt(document.getElementById('newQtdWhisky' + idWhisky).value)
    } else {
        item.qtd = document.getElementById('h1QtdWhisky' + idWhisky).innerHTML.replace("Qtd.:", "")
    }
    if (tpUpdate == 'price'){
        item.precoWhisky = document.getElementById('newPriceWhisky' + idWhisky).value.replace(",", ".")
    } else {
        item.precoWhisky = document.getElementById('h1PriceWhisky' + idWhisky).innerHTML.replace("R$", "").replace(",", ".")
    }
    
    if (item.precoWhisky == '' ){
        alert('A Whisky precisa de um preço!','Ops!')
    } else {
        loading('Atualizando Preço e Quantidade!')
        MobileUI.ajax.post(url + '/updateitembar').send(item).then(function (res){
            if(res.body.errorMessage) {
                closeLoading()
                alert(res.body.errorMessage)
            } else {
                WHISKY = res.body.data.whiskys
                closeLoading()
                parseAdmWhisky(WHISKY)
                // toast('O Preço foi alterado!', 'Toop !')
            }
        }).catch(function (err){
            closeLoading()
            alert('Falha ao alterar o valor.')
        })    
    }
}

function whiskyCancellUpdate(idWhisky){
    document.getElementById('h1PriceWhisky' + idWhisky).style.display =''
    document.getElementById('h1QtdWhisky' + idWhisky).style.display =''
    document.getElementById('btnDelete' + idWhisky).style.display =''
    MobileUI.hide('btnSave' + idWhisky)
    MobileUI.hide('btnCancel' + idWhisky)
    var input = ''
    document.getElementById('input' + idWhisky).innerHTML = input
}