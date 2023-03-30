let qtdTap, qtdTapSize = 0
var sizePreces, sizePrecesCache = []

function addSizeTap (tapNum) {

  var size = document.getElementById(`tap${tapNum}Tamanho0`).value
  var price = document.getElementById(`tap${tapNum}Preco0`).value
  
  if (size != "" || price != ""){  
    var htmlTapSize = ''
    tapNum = tapNum-1  

    tap[tapNum].sizes.push({
      "size" : document.getElementById(`tap${tapNum + 1}Tamanho${tap[tapNum].sizes.length}`).value,
      "price" : document.getElementById(`tap${tapNum + 1}Preco${tap[tapNum].sizes.length}`).value
    })
    console.log('Depois do Push', tap[tapNum].sizes.length)

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
    
    // for (var i = 0; i <= qtdTapSize-1; i++){
    //   document.getElementById('tapTamanho' + (i).toString()).value = sizePrecesCache[i].size
    //   document.getElementById('tapPreco' + (i).toString()).value = sizePrecesCache[i].price
    // }
  } else {
    toastCender('Inclua 1 medida e um valor!')
  }
}


function checkTaps (){
  if (sizePreces.length == qtdTapSize+1){
    // Procurar o que está diferente e modificar no array
  } else {
    for (var i = 0; i <= qtdTapSize; i++){
      sizePreces.push({
        "size" : document.getElementById('tapTamanho' + i).value,
        "price" : document.getElementById('tapPreco' + i).value
      })
    }
  }
  console.log(sizePreces)
}

function excludeTapSize (tapN, sizeN) {
  qtdTapSize--
  var element = document.getElementById(`tap${tapN}Size${sizeN}`)
  element.parentNode.removeChild(element)
  htmlTapSize = document.getElementById('`tap${tapN}Size${sizeN}`').innerHTML
  sizePreces.splice(tapN, 1)
}


function saveTap(){
  checkTaps()
  tap.nomeCervejaria = document.getElementById('tapCervejariaName').value
  tap.imgCervejaria = ''
  tap.imgCervejaria = ''
  tap.nome = document.getElementById('tapTitle').value
  tap.history = document.getElementById('tapHistory').value
  tap.abv = document.getElementById('tapABV').value
  tap.ibu = document.getElementById('tapIBU').value
  tap.sizePreces = sizePreces
  console.log(tap)
}

function removeTap(){

}

function openAddItem(tpItem){
    switch (tpItem) {
        case 'beer':
            MobileUI.show('addItemBoxBeer')
            MobileUI.hide('btnAddItemBeer')    
        break;
        case 'tap':
            MobileUI.show('addItemTap')
            // MobileUI.hide('btnAddItemPorcao')
        break;    
        default:
            break;
    }
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