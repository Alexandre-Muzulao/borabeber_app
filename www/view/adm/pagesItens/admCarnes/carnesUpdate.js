var tpUpdate = ''
function updateValueItemCarnes(idCarne){ 
  var input = ''
  input += '<div class="col-15">'
  input += '    <label class="text-white" style="font-size: 16px;">R$ </label>'
  input += '</div>'
  input += '<div class="col-80">'
  input += '    <input type="tel" class="text-white" id="newPriceCarne'+ idCarne +'" style=" margin-left: 2px; font-size: 16px;">'
  input += '</div>'

  document.getElementById('inputCarne' + idCarne).innerHTML = input
  MobileUI.hide('btnDelete' + idCarne)
  MobileUI.hide('h1PriceCarne' + idCarne)

  document.getElementById('btnSave' + idCarne).style.marginRight ='20%'
  document.getElementById('btnSave' + idCarne).style.display =''
  document.getElementById('btnCancel' + idCarne).style.display =''

  var newPriceCarne = document.getElementById('newPriceCarne'+ idCarne)

  newPriceCarne.classList.add('focus')
  tpUpdate = 'price'
}

function saveUpdateCarne(idCarne){
  var item = {}
  item.idEstabelecimento = IDCOMPANY
  item.idCarne = idCarne
  item.precoCarne = document.getElementById('newPriceCarne' + idCarne).value.replace(",", ".")
  
  if (item.precoCarne == '' ){
    alertCenter('A Carne precisa de um preço!','Ops!')
  } else {
    showLoader("alertBoraBeberLoader", 'Aguarde por gentileza, <br> atualizando valor da carne!')
    MobileUI.ajax.post(url + '/updatecarne').send(item).then(function (res){
      if(res.body.errorMessage) {
        setIdHidden('customImgAlert')
        toastCenter(res.body.errorMessage)
      } else {
        ADMCARNES = res.body.data.dadosCarnes
        parseAdmCarnes(res.body.data.dadosCarnes)
        setIdHidden('customImgAlert')
        toastCenter(res.body.message)
      }
    }).catch(function (err){
       setIdHidden('customImgAlert')
       toastCenter(res.body.errorMessage)
    })    
  }
}

function cancellUpdateCarne(idCarne){
  document.getElementById('h1PriceCarne' + idCarne).style.display =''
  document.getElementById('btnDelete' + idCarne).style.display =''
  MobileUI.hide('btnSave' + idCarne)
  MobileUI.hide('btnCancel' + idCarne)
  var input = ''
  document.getElementById('inputCarne' + idCarne).innerHTML = input
}