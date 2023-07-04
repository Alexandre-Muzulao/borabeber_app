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
    document.getElementById('btnSave' + idWhisky).style.marginRight ='20%'
    document.getElementById('btnSave' + idWhisky).style.display =''
    document.getElementById('btnCancel' + idWhisky).style.display =''
    var newPriceWhisky = document.getElementById('newPriceWhisky'+ idWhisky)
    newPriceWhisky.classList.add('focus')
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
    item.idEstabelecimento = IDCOMPANY
    item.idWhisky = idWhisky
    item.precoWhisky = document.getElementById('newPriceWhisky' + idWhisky).value.replace(",", ".")
    
    if (item.precoWhisky == '' ){
        alert('O Whisky precisa de um preço.','Ops!')
    } else {
      showLoader("alertBoraBeberLoader", 'Aguarde por gentileza, <br> atualizando preço do Whisky!')
        MobileUI.ajax.post(url + '/updatewhisky').send(item).then(function (res){
            if(res.body.errorMessage) {
                setIdHidden('customImgAlert')
                alert(res.body.errorMessage)
            } else {
              console.log(res.body.data)
              ADMWHISKY = res.body.data.dadosWhiskys
                setIdHidden('customImgAlert')
                parseAdmWhisky(ADMWHISKY)
                // toast('O Preço foi alterado!', 'Toop !')
            }
        }).catch(function (err){
            setIdHidden('customImgAlert')
            alert('Falha ao alterar o valor.')
        })    
    }
}

function whiskyCancellUpdate(idWhisky){
    document.getElementById('h1PriceWhisky' + idWhisky).style.display =''
    // document.getElementById('h1QtdWhisky' + idWhisky).style.display =''
    document.getElementById('btnDelete' + idWhisky).style.display =''
    MobileUI.hide('btnSave' + idWhisky)
    MobileUI.hide('btnCancel' + idWhisky)
    var input = ''
    document.getElementById('input' + idWhisky).innerHTML = input
}