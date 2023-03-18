var qtdTapSize = 0
var sizePrecesCache = []
var sizePreces = []
var htmlTapSize = ''
var tap = []

function addSizeTap () {

  sizePrecesCache.push({
    "size" : document.getElementById('tapTamanho' + qtdTapSize).value,
    "price" : document.getElementById('tapPreco' + qtdTapSize).value
  })
  
  qtdTapSize++

  htmlTapSize += '<div class="row" id="tapSize' + qtdTapSize + '">'
  htmlTapSize += '    <div class="col">'
  htmlTapSize += '        <div class="row">'
  htmlTapSize += '            <div class="col" style="margin-right: 5%; width: 84%">'
  htmlTapSize += '                <div class="item label-fixed border-grey-800 border-bottom" style="height: 50px;">'
  htmlTapSize += '                    <input type="number" class="text-white placeholder-white" placeholder="Tamanho" id="tapTamanho' + qtdTapSize + '">'
  htmlTapSize += '                    <label style="margin-right: -65px;">mL</label>'
  htmlTapSize += '                </div>'
  htmlTapSize += '            </div>'
  htmlTapSize += '            <div class="col">'
  htmlTapSize += '                <div class="item label-fixed border-grey-800 border-bottom" style="height: 50px;">'
  htmlTapSize += '                    <label style="margin-right: -65px; margin-top: 2px;">R$</label>'
  htmlTapSize += '                    <input type="number" step="0,00" class="text-white placeholder-white" placeholder="Preço" id="tapPreco' + qtdTapSize + '">'
  htmlTapSize += '                </div>'
  htmlTapSize += '            </div>'
  htmlTapSize += '        </div>'
  htmlTapSize += '    </div>'
  htmlTapSize += '    <div class="col" style="margin-top: 3%;">'
  htmlTapSize += '        <button class="icon ion-minus-circled text-red" id="btnAddRemTap" onclick="excludeSizeTap(' + qtdTapSize + ')"></button>'
  htmlTapSize += '    </div>'
  htmlTapSize += '</div>'

  document.getElementById('tapSize').innerHTML = htmlTapSize
  
  for (var i = 0; i <= qtdTapSize-1; i++){
    document.getElementById('tapTamanho' + (i).toString()).value = sizePrecesCache[i].size
    document.getElementById('tapPreco' + (i).toString()).value = sizePrecesCache[i].price
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

function excludeSizeTap (tapN) {
  qtdTapSize--
  var element = document.getElementById(`tapSize${tapN}`)
  element.parentNode.removeChild(element)
  htmlTapSize = document.getElementById('tapSize').innerHTML
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