var tpUpdate = ''
function updateValueItemVodka(idVodka){
    var input = ''
    input += '<div class="col-15">'
    input += '    <label class="text-white" style="font-size: 16px;">R$ </label>'
    input += '</div>'
    input += '<div class="col-80">'
    input += '    <input type="tel" class="text-white" id="newPriceVodka'+ idVodka +'" style=" margin-left: 2px; font-size: 16px;">'
    input += '</div>'
    document.getElementById('input' + idVodka).innerHTML = input
    MobileUI.hide('btnDelete' + idVodka)
    MobileUI.hide('h1PriceVodka' + idVodka)
    document.getElementById('btnSave' + idVodka).style.marginRight ='-15%'
    document.getElementById('btnSave' + idVodka).style.display =''
    document.getElementById('btnCancel' + idVodka).style.display =''
    var newPriceVodka = document.getElementById('newPriceVodka'+ idVodka)
    newPriceVodka.classList.add('focus')
    tpUpdate = 'price'
}

function updateQtdItemVodka(idVodka){
    var input = ''
    input += '<div class="col-15">'
    input += '    <label class="text-white" style="font-size: 16px;">Qtd.: </label>'
    input += '</div>'
    input += '<div class="col-80">'
    input += '    <input type="tel" class="text-white" id="newQtdVodka'+ idVodka +'" style=" margin-left: 2px; font-size: 16px;">'
    input += '</div>'
    document.getElementById('input' + idVodka).innerHTML = input
    MobileUI.hide('btnDelete' + idVodka)
    MobileUI.hide('h1QtdVodka' + idVodka)
    document.getElementById('btnSave' + idVodka).style.marginRight ='-15%'
    document.getElementById('btnSave' + idVodka).style.display =''
    document.getElementById('btnCancel' + idVodka).style.display =''
    var newQtdVodka = document.getElementById('newQtdVodka'+ idVodka)
    newQtdVodka.classList.add('focus')
    tpUpdate = 'qtd'
}

function vodkaSaveUpdate(idVodka){
    var item = {}
    item.idBar = IDCOMPANY
    item.tipo = 'vodka'
    item.idVodka = idVodka
    item.descricao = document.getElementById('descricaoVodka' + idVodka).innerHTML
    if (tpUpdate == 'qtd'){
        item.qtd = parseInt(document.getElementById('newQtdVodka' + idVodka).value)
    } else {
        item.qtd = document.getElementById('h1QtdVodka' + idVodka).innerHTML.replace("Qtd.:", "")
    }
    if (tpUpdate == 'price'){
        item.precoVodka = document.getElementById('newPriceVodka' + idVodka).value.replace(",", ".")
    } else {
        item.precoVodka = document.getElementById('h1PriceVodka' + idVodka).innerHTML.replace("R$", "").replace(",", ".")
    }
    
    if (item.precoVodka == '' ){
        alert('A Vodka precisa de um preço!','Ops!')
    } else {
        loading('Atualizando Preço e Quantidade!')
        MobileUI.ajax.post(url + '/updateitembar').send(item).then(function (res){
            if(res.body.errorMessage) {
                closeLoading()
                alert(res.body.errorMessage)
            } else {
                VODKA = res.body.data.vodkas
                closeLoading()
                parseAdmVodka(VODKA)
                // toast('O Preço foi alterado!', 'Toop !')
            }
        }).catch(function (err){
            closeLoading()
            alert('Falha ao alterar o valor.')
        })    
    }
}

function vodkaCancellUpdate(idVodka){
    document.getElementById('h1PriceVodka' + idVodka).style.display =''
    document.getElementById('h1QtdVodka' + idVodka).style.display =''
    document.getElementById('btnDelete' + idVodka).style.display =''
    MobileUI.hide('btnSave' + idVodka)
    MobileUI.hide('btnCancel' + idVodka)
    var input = ''
    document.getElementById('input' + idVodka).innerHTML = input
}