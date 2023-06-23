var tpUpdate = ''
function cervejaUpdateQtdItem(idBeer){
  
  var input = ''
  input += '<div class="col-15">'
  input += '    <label class="text-white" style="font-size: 16px;">Qtd.: </label>'
  input += '</div>'
  input += '<div class="col-80">'
  input += '    <input type="tel" class="text-white" id="newQtdBeer'+ idBeer +'" style=" margin-left: 2px; font-size: 16px;">'
  input += '</div>'

  document.getElementById('inputQtd' + idBeer).innerHTML = input

  MobileUI.hide('btnDelete' + idBeer)
  MobileUI.hide('h1QtdBeer' + idBeer)
  document.getElementById('btnSave' + idBeer).style.marginRight ='-15%'
  document.getElementById('btnSave' + idBeer).style.display =''
  document.getElementById('btnCancel' + idBeer).style.display =''

  var newQtdBeer = document.getElementById('newQtdBeer'+ idBeer)
  newQtdBeer.classList.add('focus')
  tpUpdate = 'qtd'
}

function cervejaUpdateValueItem(idBeer){
    var input = ''
  input += '<div class="col-15">'
  input += '    <label class="text-white" style="font-size: 16px;">R$ </label>'
  input += '</div>'
  input += '<div class="col-80">'
  input += '    <input type="tel" class="text-white" id="newPriceBeer'+ idBeer +'" style=" margin-left: 2px; font-size: 16px;">'
  input += '</div>'

  document.getElementById('inputValue' + idBeer).innerHTML = input

  MobileUI.hide('btnDelete' + idBeer)
  MobileUI.hide('h1PriceBeer' + idBeer)
  document.getElementById('btnSave' + idBeer).style.marginRight ='-15%'
  document.getElementById('btnSave' + idBeer).style.display =''
  document.getElementById('btnCancel' + idBeer).style.display =''

  var newPriceBeer = document.getElementById('newPriceBeer'+ idBeer)
  newPriceBeer.classList.add('focus')
  tpUpdate = 'price'
}

function cervejaSaveUpdate(idBeer){
      var item = {}
    item.idBar = IDCOMPANY
    item.idBeer = idBeer
    item.tipo = 'beer'
    if (tpUpdate == 'qtd'){
        item.qtd = parseInt(document.getElementById('newQtdBeer' + idBeer).value)
    } else {
        item.qtd = document.getElementById('h1QtdBeer' + idBeer).innerHTML.replace("Qtd.:", "")
    }
    if (tpUpdate == 'price'){
        item.precoBeer = document.getElementById('newPriceBeer' + idBeer).value.replace(",", ".")
    } else {
        item.precoBeer = document.getElementById('h1PriceBeer' + idBeer).innerHTML.replace("R$", "").replace(",", ".")
    }
    
    if (item.precoBeer == '' ){
        alert('A Beer precisa de um preço!','Ops!')
    } else {
        loading('Atualizando Preço e Quantidade!')
        MobileUI.ajax.post(url + '/updateitembar').send(item).then(function (res){
            if(res.body.errorMessage) {
                closeLoading()
                alert(res.body.errorMessage)
            } else {
                ADMBEERS = res.body.data.dadosBeer
                closeLoading()
                parseAdmBeer(ADMBEERS)
                // toast('O Preço foi alterado!', 'Toop !')
            }
        }).catch(function (err){
            closeLoading()
            alert('Falha ao alterar o valor.')
        })    
    }
}

function cancellUpdate(idBeer){
  document.getElementById('h1PriceBeer' + idBeer).style.display =''
  document.getElementById('h1QtdBeer' + idBeer).style.display =''
  document.getElementById('btnDelete' + idBeer).style.display =''
  MobileUI.hide('btnSave' + idBeer)
  MobileUI.hide('btnCancel' + idBeer)
  var input = ''
  document.getElementById('inputQtd' + idBeer).innerHTML = input
  document.getElementById('inpuValue' + idBeer).innerHTML = input
}