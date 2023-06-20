function addSizeTap (tapNum) {
  console.log(tapNum)
  var htmlTapSize = ''  
  htmlTapSize += `<div class="row" id="tap${tapNum+1}Size${TAP[tapNum].sizes.length}Lines">`
  htmlTapSize += '    <div class="col">'
  htmlTapSize += '        <div class="row">'
  htmlTapSize += '            <div class="col" style="margin-right: 5%; width: 84%">'
  htmlTapSize += '                <div class="item label-fixed border-grey-800 border-bottom" style="height: 50px;">'
  htmlTapSize += `                    <input type="number" class="text-white placeholder-white" placeholder="Tamanho" id="tap${tapNum+1}Tamanho${TAP[tapNum].sizes.length}">`
  htmlTapSize += '                    <label style="margin-right: -65px;">mL</label>'
  htmlTapSize += '                </div>'
  htmlTapSize += '            </div>'
  htmlTapSize += '            <div class="col">'
  htmlTapSize += '                <div class="item label-fixed border-grey-800 border-bottom" style="height: 50px;">'
  htmlTapSize += '                    <label style="margin-right: -65px; margin-top: 2px;">R$</label>'
  htmlTapSize += `                    <input type="number" step="0,00" class="text-white placeholder-white" placeholder="Preço" id="tap${tapNum+1}Preco${TAP[tapNum].sizes.length}">`
  htmlTapSize += '                </div>'
  htmlTapSize += '            </div>'
  htmlTapSize += '        </div>'
  htmlTapSize += '    </div>'
  htmlTapSize += '    <div class="col" style="margin-top: 3%;">'
  htmlTapSize += `        <button class="icon ion-minus-circled text-red" id="btnAddRemTap" onclick="dellSizeTap(${tapNum+1}, ${TAP[tapNum].sizes.length})"></button>`
  htmlTapSize += '    </div>'
  htmlTapSize += '</div>'

  htmlTapSize += `<div id="tap${tapNum}Size${TAP[tapNum].sizes.length + 1}"></div>`  

  document.getElementById(`tap${tapNum}Size${TAP[tapNum].sizes.length}`).innerHTML = htmlTapSize

  TAP[tapNum].sizes.push({
    "size" : '',
    "price" : ''
  })
}

function saveTap(tapNum){
  TAP[tapNum].cervejariaImg = ''
  TAP[tapNum].cervejaImg = ''
  TAP[tapNum].tapCervejariaName = document.getElementById(`tapCervejariaName${tapNum}`).value
  TAP[tapNum].tapTitle = document.getElementById(`tapTitle${tapNum}`).value
  TAP[tapNum].tapStyle = document.getElementById(`tapStyle${tapNum}`).value
  TAP[tapNum].tapOrigin = document.getElementById(`tapOrigin${tapNum}`).value
  TAP[tapNum].tapHistory = document.getElementById(`tapHistory${tapNum}`).value
  TAP[tapNum].tapABV = document.getElementById(`tapABV${tapNum}`).value
  TAP[tapNum].tapIBU = document.getElementById(`tapIBU${tapNum}`).value    
  
  if (updateAllSizeTap(tapNum).auth == true){
  showLoader("alertBoraBeberLoader", 'Salvando Cerveja Artesanal')

  MobileUI.ajax.post(url + '/posttap')
    .set({_id : COMPANY._id})
    .send(TAP)
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

  TAP.map(function(tap, i){
    TAP.cervejariaImg = document.getElementById(`cervejariaImg${i+1}`).src
    TAP.cervejaImg = document.getElementById(`cervejaImg${i+1}`).src
    TAP.tapCervejariaName = document.getElementById(`tapCervejariaName${i+1}`).value
    TAP.tapTitle = document.getElementById(`tapTitle${i+1}`).value
    TAP.tapStyle = document.getElementById(`tapStyle${i+1}`).value
    TAP.tapOrigin = document.getElementById(`tapOrigin${i+1}`).value
    TAP.tapHistory = document.getElementById(`tapHistory${i+1}`).value
    TAP.tapABV = document.getElementById(`tapABV${i+1}`).value
    TAP.tapIBU = document.getElementById(`tapIBU${i+1}`).value

  })
    
  showLoader("alertBoraBeberLoader", 'Salvando Cerveja Artesanal')

  MobileUI.ajax.post(url + '/posttap')
    .set({_id : COMPANY._id})
    .send(TAP)
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

  TAP[tapNum-1].sizes.splice(sizeNum, 1)
}
  
function updateAllSizeTap(tapNum){  
  let auth = {'auth': true, msg: `Todos os itens estão corretos`}
  
  TAP[tapNum-1].sizes.map(function(sizes, i){
    //Precisa tratar quando o usuário excluir uma tap.
    console.log(tapNum, i) //tap1Tamanho1

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
