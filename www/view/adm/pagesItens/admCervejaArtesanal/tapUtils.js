function addSizeTap (tapNum) {
  var htmlTapSize = ''

  htmlTapSize += `<div class="row" id="tap${tapNum}Size${tap[tapNum-1].sizes.length}Lines">`
  htmlTapSize += '    <div class="col">'
  htmlTapSize += '        <div class="row">'
  htmlTapSize += '            <div class="col" style="margin-right: 5%; width: 84%">'
  htmlTapSize += '                <div class="item label-fixed border-grey-800 border-bottom" style="height: 50px;">'
  htmlTapSize += `                    <input type="number" class="text-white placeholder-white" placeholder="Tamanho" id="tap${tapNum}Tamanho${tap[tapNum-1].sizes.length}">`
  htmlTapSize += '                    <label style="margin-right: -65px;">mL</label>'
  htmlTapSize += '                </div>'
  htmlTapSize += '            </div>'
  htmlTapSize += '            <div class="col">'
  htmlTapSize += '                <div class="item label-fixed border-grey-800 border-bottom" style="height: 50px;">'
  htmlTapSize += '                    <label style="margin-right: -65px; margin-top: 2px;">R$</label>'
  htmlTapSize += `                    <input type="number" step="0,00" class="text-white placeholder-white" placeholder="Preço" id="tap${tapNum}Preco${tap[tapNum-1].sizes.length}">`
  htmlTapSize += '                </div>'
  htmlTapSize += '            </div>'
  htmlTapSize += '        </div>'
  htmlTapSize += '    </div>'
  htmlTapSize += '    <div class="col" style="margin-top: 3%;">'
  htmlTapSize += `        <button class="icon ion-minus-circled text-red" id="btnAddRemTap" onclick="dellSizeTap(${tapNum}, ${tap[tapNum-1].sizes.length})"></button>`
  htmlTapSize += '    </div>'
  htmlTapSize += '</div>'

  htmlTapSize += `<div id="tap${tapNum}Size${tap[tapNum-1].sizes.length + 1}"></div>`

  console.log(`tap${tapNum}Size${tap[tapNum-1].sizes.length}`) //tap2Size0
  console.log(tap[tapNum-1].sizes) //tap2Size0

  document.getElementById(`tap${tapNum}Size${tap[tapNum-1].sizes.length}`).innerHTML = htmlTapSize

  tap[tapNum-1].sizes.push({
    "size" : '',
    "price" : ''
  })
}

function saveTap(tapNum){
  tap[tapNum-1].cervejariaImg = ''
  tap[tapNum-1].cervejaImg = ''
  tap[tapNum-1].tapCervejariaName = document.getElementById(`tapCervejariaName${tapNum}`).value
  tap[tapNum-1].tapTitle = document.getElementById(`tapTitle${tapNum}`).value
  tap[tapNum-1].tapStyle = document.getElementById(`tapStyle${tapNum}`).value
  tap[tapNum-1].tapOrigin = document.getElementById(`tapOrigin${tapNum}`).value
  tap[tapNum-1].tapHistory = document.getElementById(`tapHistory${tapNum}`).value
  tap[tapNum-1].tapABV = document.getElementById(`tapABV${tapNum}`).value
  tap[tapNum-1].tapIBU = document.getElementById(`tapIBU${tapNum}`).value    
  
  if (updateAllSizeTap(tapNum).auth == true){
  showLoader("alertBoraBeberLoader", 'Salvando Cerveja Artesanal')

  MobileUI.ajax.post(url + '/posttap')
    .set({_id : COMPANY._id})
    .send(tap)
    .then(function (res){
      console.log(res)
      setIdHidden('customImgAlert')
  }).catch(function (err){
    console.log(err)
    setIdHidden('customImgAlert')
    alert('Ops, tive um probleminha para salvar seu item! Tente novamente por gentileza.')
  })
  } else {
    toastCenter(updateAllSizeTap(tapNum).msg)
  }
}

function saveAllTaps(){

  tap.map(function(tap, i){
    tap.cervejariaImg = document.getElementById(`cervejariaImg${i+1}`).src
    tap.cervejaImg = document.getElementById(`cervejaImg${i+1}`).src
    tap.tapCervejariaName = document.getElementById(`tapCervejariaName${i+1}`).value
    tap.tapTitle = document.getElementById(`tapTitle${i+1}`).value
    tap.tapStyle = document.getElementById(`tapStyle${i+1}`).value
    tap.tapOrigin = document.getElementById(`tapOrigin${i+1}`).value
    tap.tapHistory = document.getElementById(`tapHistory${i+1}`).value
    tap.tapABV = document.getElementById(`tapABV${i+1}`).value
    tap.tapIBU = document.getElementById(`tapIBU${i+1}`).value

  })
    
  showLoader("alertBoraBeberLoader", 'Salvando Cerveja Artesanal')

  MobileUI.ajax.post(url + '/posttap')
    .set({_id : COMPANY._id})
    .send(tap)
    .then(function (res){
      console.log(res)
      setIdHidden('customImgAlert')
  }).catch(function (err){
    console.log(err)
    setIdHidden('customImgAlert')
    alert('Ops, tive um probleminha para salvar seu item! Tente novamente por gentileza.')
  })
}

function dellSizeTap (tapNum, sizeNum) {
  
  var element = document.getElementById(`tap${tapNum}Size${sizeNum}Lines`)
  element.parentNode.removeChild(element)

  tap[tapNum-1].sizes.splice(sizeNum, 1)
}
  
function updateAllSizeTap(tapNum){  
  let auth = {'auth': true, msg: `Todos os itens estão corretos`}
  tap[tapNum-1].sizes.map(function(sizes, i){
    //Precisa tratar quando o usuário excluir uma tap.
    sizes.size = document.getElementById(`tap${tapNum}Tamanho${i}`).value
    if (sizes.size == ''){
      auth = {'auth': false, msg: `O ${i+1}º Tamanho mL está vazio.`}
    } 
    sizes.price = document.getElementById(`tap${tapNum}Preco${i}`).value
    if (sizes.price == ''){
      auth = {'auth': false, msg: `O ${i+1}º R$ Preço está vazio.`}
    } 
  })
  return auth
}
