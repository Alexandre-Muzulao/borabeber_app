function addSizeTap (tapNum) {

  var checkresult = checkSizePriceComplete(tapNum)
  var htmlTapSize = ''  
  
  if (checkresult.status == true){
    tapNum = tapNum-1  

    tap[tapNum].sizes.push({
      "size" : document.getElementById(`tap${tapNum + 1}Tamanho${tap[tapNum].sizes.length}`).value,
      "price" : document.getElementById(`tap${tapNum + 1}Preco${tap[tapNum].sizes.length}`).value
    })

    htmlTapSize += `<div class="row" id="tap${tapNum + 1}Size${tap[tapNum].sizes.length}'">`
    htmlTapSize += '    <div class="col">'
    htmlTapSize += '        <div class="row">'
    htmlTapSize += '            <div class="col" style="margin-right: 5%; width: 84%">'
    htmlTapSize += '                <div class="item label-fixed border-grey-800 border-bottom" style="height: 50px;">'
    htmlTapSize += `                    <input type="number" class="text-white placeholder-white" placeholder="Tamanho" id="tap${tapNum + 1}Tamanho${tap[tapNum].sizes.length}">`
    htmlTapSize += '                    <label style="margin-right: -65px;">mL</label>'
    htmlTapSize += '                </div>'
    htmlTapSize += '            </div>'
    htmlTapSize += '            <div class="col">'
    htmlTapSize += '                <div class="item label-fixed border-grey-800 border-bottom" style="height: 50px;">'
    htmlTapSize += '                    <label style="margin-right: -65px; margin-top: 2px;">R$</label>'
    htmlTapSize += `                    <input type="number" step="0,00" class="text-white placeholder-white" placeholder="Preço" id="tap${tapNum + 1}Preco${tap[tapNum].sizes.length}">`
    htmlTapSize += '                </div>'
    htmlTapSize += '            </div>'
    htmlTapSize += '        </div>'
    htmlTapSize += '    </div>'
    htmlTapSize += '    <div class="col" style="margin-top: 3%;">'
    htmlTapSize += `        <button class="icon ion-minus-circled text-red" id="btnAddRemTap" onclick="excludeTapSize(${tap[tapNum].sizes.length})"></button>`
    htmlTapSize += '    </div>'
    htmlTapSize += '</div>'
    htmlTapSize += `<div id="tap${tapNum + 1}Size${tap[tapNum].sizes.length + 1}"></div>`
    
    document.getElementById(`tap${tapNum + 1}Size${tap[tapNum].sizes.length}`).innerHTML = htmlTapSize
    
  } else {
    toastCender(checkresult.msg)
  }
}

function checkSizePriceComplete(tapNum){

  var size = document.getElementById(`tap${tapNum}Tamanho${tap[tapNum-1].sizes.length}`).value
  var price = document.getElementById(`tap${tapNum}Preco${tap[tapNum-1].sizes.length}`).value  

  if (size == ""){
    return {status: false, msg: "Informe o Tamanho(mL) antes de incluir a próxioma."}
  } else if (price == ""){
    return {status: false, msg: "Informe o Preço(R$) antes de incluir a próxioma."}
  } else {
    return {status: true}
  }
}

function setLastSizeTap(tapNum){  
  var size = document.getElementById(`tap${tapNum}Tamanho${tap[tapNum-1].sizes.length}`).value
  var price = document.getElementById(`tap${tapNum}Preco${tap[tapNum-1].sizes.length}`).value

  if (size == ""){
    toastCender(`Informe o Tamanho(mL) da Tap ${tapNum}`)
  } else if (price == ""){
    toastCender(`Informe o Valor(R$) da Tap ${tapNum}`)
  } else {
    tap[tapNum-1].sizes.push({
      "size" : size,
      "price" : price
    })
  }
}

function saveTap(tapNum){

  console.log(COMPANY._id)

  tap[tapNum-1].cervejariaImg = ''
  tap[tapNum-1].cervejaImg = ''
  tap[tapNum-1].tapCervejariaName = document.getElementById(`tapCervejariaName${tapNum}`).value
  tap[tapNum-1].tapTitle = document.getElementById(`tapTitle${tapNum}`).value
  tap[tapNum-1].tapStyle = document.getElementById(`tapStyle${tapNum}`).value
  tap[tapNum-1].tapOrigin = document.getElementById(`tapOrigin${tapNum}`).value
  tap[tapNum-1].tapHistory = document.getElementById(`tapHistory${tapNum}`).value
  tap[tapNum-1].tapABV = document.getElementById(`tapABV${tapNum}`).value
  tap[tapNum-1].tapIBU = document.getElementById(`tapIBU${tapNum}`).value
  setLastSizeTap(tapNum)

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

    setLastSizeTap(i+1)
  })

  showLoader("alertBoraBeberLoader", 'Salvando Cervejas Artesanais')

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

function delAllTaps(){
  
}



function dellizeTap (tapN, sizeN) {
  qtdTapSize--
  var element = document.getElementById(`tap${tapN}Size${sizeN}`)
  element.parentNode.removeChild(element)
  htmlTapSize = document.getElementById('`tap${tapN}Size${sizeN}`').innerHTML
  sizePreces.splice(tapN, 1)
}

function cancelAddItem(tpItem){
    if(tpItem == 'beer'){
        MobileUI.hide('addItemBoxBeer')
        MobileUI.show('btnAddItemBeer')
        var image = document.getElementById('beerImg')
        image.src = 'img/semImg.jpg'
        document.getElementById('bebidaItemTitle').value = ''
        document.getElementById('bebidaItemDetail').value = ''
        document.getElementById('bebidaItemPrice').value = ''
    } else {
        MobileUI.hide('addItemTap')
        MobileUI.show('btnAddItemTap')
        var image = document.getElementById('porcaoImg')
        image.src = 'img/semImg.jpg'
    }
}