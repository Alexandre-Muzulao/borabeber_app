var tpUpdate = ''
function updateValueItemVodka(idVodka){
  var input = ''
  input += '<div class="col-15">'
  input += '    <label class="text-white" style="font-size: 16px;">R$ </label>'
  input += '</div>'
  input += '<div class="col-80">'
  input += '    <input type="tel" class="text-white" id="newPriceVodka'+ idVodka +'" style=" margin-left: 2px; font-size: 16px;">'
  input += '</div>'

  document.getElementById('inputVodka' + idVodka).innerHTML = input
  MobileUI.hide('btnDelete' + idVodka)
  MobileUI.hide('h1PriceVodka' + idVodka)

  document.getElementById('btnSave' + idVodka).style.marginRight ='20%'
  document.getElementById('btnSave' + idVodka).style.display =''
  document.getElementById('btnCancel' + idVodka).style.display =''

  var newPriceVodka = document.getElementById('newPriceVodka'+ idVodka)
  newPriceVodka.classList.add('focus')
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
    item.idEstabelecimento = IDCOMPANY
    item.idVodka = idVodka
    item.precoVodka = document.getElementById('newPriceVodka' + idVodka).value.replace(",", ".")
    
    if (item.precoVodka == '' ){
        alert('A Vodka precisa de um preço!','Ops!')
    } else {
      showLoader("alertBoraBeberLoader", 'Aguarde por gentileza, <br> atualizando preço da Vodka!')
        MobileUI.ajax.post(url + '/updatevodka').send(item).then(function (res){
            if(res.body.errorMessage) {
               setIdHidden('customImgAlert')
                alert(res.body.errorMessage)
            } else {
              setIdHidden('customImgAlert')
              ADMVODKA = res.body.data.dadosVodkas
              parseAdmVodka(ADMVODKA)
              toastCenter(res.body.message)
            }
        }).catch(function (err){
           setIdHidden('customImgAlert')
            alert('Falha ao alterar o valor.')
        })    
    }
}

function vodkaCancellUpdate(idVodka){
    document.getElementById('h1PriceVodka' + idVodka).style.display =''
    document.getElementById('btnDelete' + idVodka).style.display =''
    MobileUI.hide('btnSave' + idVodka)
    MobileUI.hide('btnCancel' + idVodka)
    var input = ''
    document.getElementById('inputVodka' + idVodka).innerHTML = input
}