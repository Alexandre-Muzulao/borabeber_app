function addNewTap(){
  
  let htmlNewTap = ''
  if (TAP == undefined){
    TAP = [{
      "cervejariaImg" : "",
      "cervejaImg" : "",
      "tapCervejariaName" : "",
      "tapTitle" : "",
      "tapStyle" : "",
      "tapOrigin" : "",
      "tapHistory" : "",
      "tapABV" : "",
      "tapIBU" : "",
      sizes : []  
    }]
  } else {
    TAP.push({
      "cervejariaImg" : "",
      "cervejaImg" : "",
      "tapCervejariaName" : "",
      "tapTitle" : "",
      "tapStyle" : "",
      "tapOrigin" : "",
      "tapHistory" : "",
      "tapABV" : "",
      "tapIBU" : "",
      sizes : []
    })
  }


  htmlNewTap += `<div class="row" id="tap${TAP.length}">`
  htmlNewTap += '          <div class="list no-border">'
  htmlNewTap += '              <div class="row">'
  htmlNewTap += '                  <div class="col-70">'
  htmlNewTap += `                    <h2>Tap #${TAP.length}</h2>`
  htmlNewTap += '                      <div class="item border-grey-800 border-bottom" style="height: 40px;">'
  htmlNewTap += `                          <input type="text" class="text-white placeholder-white" placeholder="Cervejaria" id='tapCervejariaName${TAP.length}'>`
  htmlNewTap += '                      </div>'
  htmlNewTap += '                      <div class="item border-grey-800 border-bottom" style="height: 40px;">'
  htmlNewTap += `                          <input type="text" class="text-white placeholder-white" placeholder="Nome da Cerveja" id='tapTitle${TAP.length}'>`
  htmlNewTap += '                      </div>'
  htmlNewTap += '                      <div class="item border-grey-800 border-bottom" style="height: 40px;">'
  htmlNewTap += `                          <input type="text" class="text-white placeholder-white" placeholder="Estilo" id='tapStyle${TAP.length}'>`
  htmlNewTap += '                      </div>'
  htmlNewTap += '                      <div class="item border-grey-800 border-bottom" style="height: 40px;">'
  htmlNewTap += `                          <input type="text" class="text-white placeholder-white" placeholder="Cidade - UF" id='tapOrigin${TAP.length}'>`
  htmlNewTap += '                      </div>'
  htmlNewTap += '                      <div class="item border-grey-800 border-bottom" style="height: 40px;">'
  htmlNewTap += `                          <input type="text" class="text-white placeholder-white" placeholder="Historia da Cerveja" id='tapHistory${TAP.length}'>`
  htmlNewTap += '                      </div>'
  htmlNewTap += '                  </div>'
  htmlNewTap += '                  <div class="col-10"></div>'
  htmlNewTap += '                  <div class="col align-center">'
  htmlNewTap += '                      <label class="text-small">Cervejaria</label>'
  htmlNewTap += `                      <img src="img/semImg.jpg" style="width: 100px; height: 100px;" id='cervejariaImg${TAP.length}'>`
  htmlNewTap += '                      <button class="icon ion-plus-circled text-green text-big" id=`btnAddImgCervejaria${TAP.length}` onclick="openPopover(`imgOptionsItensArtesanal`)" style="float: right; position: absolute; z-index: 7; margin-top: -2em; margin-left: -1em;"></button>'
  htmlNewTap += '                      <label class="text-small">Cerveja</label>'
  htmlNewTap += `                      <img src="img/semImg.jpg" style="width: 100px; height: 100px;" id='cervejaImg${TAP.length}'>`
  htmlNewTap += '                      <button class="icon ion-plus-circled text-green text-big" id=`btnAddImgTap${TAP.length}` onclick="openPopover(`imgOptionsItensArtesanal`)" style="float: right; position: absolute; z-index: 7; margin-top: 3em; margin-left: -4em;"></button>'
  htmlNewTap += '                  </div>'
  htmlNewTap += '              </div>'
  htmlNewTap += '              <div class="row">'
  htmlNewTap += '                <div class="col">'
  htmlNewTap += '                    <div class="row">'
  htmlNewTap += '                        <div class="col" style="margin-right: 5%; width: 72%">'
  htmlNewTap += '                            <div class="item label-fixed border-grey-800 border-bottom">'
  htmlNewTap += `                                <input type="number" class="text-white placeholder-white" placeholder="% Alcoolico" id='tapABV${TAP.length}'>`
  htmlNewTap += '                                <label style="margin-right: -5em;">% ABV</label>'
  htmlNewTap += '                            </div>'
  htmlNewTap += '                        </div>'
  htmlNewTap += '                        <div class="col">'
  htmlNewTap += '                            <div class="item label-fixed border-grey-800 border-bottom">'
  htmlNewTap += `                                <input type="number" class="text-white placeholder-white" placeholder="Amargor" id='tapIBU${TAP.length}'>`
  htmlNewTap += '                                <label style="margin-right: -4em;">IBU</label>'
  htmlNewTap += '                            </div>'
  htmlNewTap += '                        </div>'
  htmlNewTap += '                    </div>'
  htmlNewTap += '                    <div class="row">'
  htmlNewTap += '                        <div class="col" style="margin-right: 5%; width: 84%">'
  htmlNewTap += '                            <div class="item label-fixed border-grey-800 border-bottom"'
  htmlNewTap += '                                style="height: 50px;">'
  htmlNewTap += `                                <input type="number" class="text-white placeholder-white" placeholder="Tamanho" id='tap${TAP.length}Tamanho0'>`
  htmlNewTap += '                                <label style="margin-right: -4em;">mL</label>'
  htmlNewTap += '                            </div>'
  htmlNewTap += '                        </div>'
  htmlNewTap += '                        <div class="col">'
  htmlNewTap += '                            <div class="item label-fixed border-grey-800 border-bottom"'
  htmlNewTap += '                                style="height: 50px;">'
  htmlNewTap += '                                <label style="margin-right: -4em; margin-top: 2px;">R$</label>'
  htmlNewTap += `                                <input type="number" step="0,00" class="text-white placeholder-white" placeholder="Preço" id='tap${TAP.length}Preco0'>`
  htmlNewTap += '                            </div>'
  htmlNewTap += '                        </div>'
  htmlNewTap += '                    </div>'
  htmlNewTap += '                </div>'
  htmlNewTap += '                <div class="col" style="margin-top: 14%;">'
  htmlNewTap += `                    <button class="icon ion-plus-circled text-green" id='btnAddRemTap0' onclick='addSizeTap(${TAP.length})'></button>`
  htmlNewTap += '                </div>'
  htmlNewTap += '            </div>'

  htmlNewTap += `            <div id="tap${TAP.length}Size1"></div>`

  htmlNewTap += '            <div class="space"></div>'
  htmlNewTap += '            <div class="row padding">'
  htmlNewTap += '                <div class="col">'
  htmlNewTap += `                    <button class="radius shadow icon full ion-plus-circled text-green grey-800" onclick='saveTap(${TAP.length})'>Salvar</button>`
  htmlNewTap += '                </div>'
  htmlNewTap += '                <div class="col"></div>'
  htmlNewTap += '                <div class="col">'
  htmlNewTap += `                    <button class="radius shadow icon full ion-trash-a text-red grey-800" onclick='delTap(${TAP.length})'>Deletar</button>`
  htmlNewTap += '                </div>'
  htmlNewTap += '            </div>'
  htmlNewTap += '          </div>'
  htmlNewTap += '      </div>'
  htmlNewTap += `      <div id="tapNum${TAP.length + 1}"></div>`

  if (TAP.length >= 2){    
    setIdVisible('saveAllTaps')
  }

  document.getElementById(`tapNum${TAP.length}`).innerHTML = htmlNewTap

  TAP[TAP.length-1].sizes.push({
    "size" : '',
    "price" : ''
  })
}
