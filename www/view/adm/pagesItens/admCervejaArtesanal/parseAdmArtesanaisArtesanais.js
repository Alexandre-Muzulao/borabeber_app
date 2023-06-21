function loadTaps(taps){
  if (taps !== undefined){
    taps.map(function(taps, i){
     
      let htmlNewTap = ''

      htmlNewTap += `<div class="row" id="tap${i + 1}">`
      htmlNewTap += '          <div class="list no-border">'
      htmlNewTap += '              <div class="row">'
      htmlNewTap += '                  <div class="col-70">'
      htmlNewTap += `                    <h2>Tap #${i + 1}</h2>`
      htmlNewTap += '                      <div class="item border-grey-800 border-bottom" style="height: 40px;">'
      htmlNewTap += `                          <input type="text" class="text-white placeholder-white" placeholder="Cervejaria" id='tapCervejariaName${i+1}'>`
      htmlNewTap += '                      </div>'
      htmlNewTap += '                      <div class="item border-grey-800 border-bottom" style="height: 40px;">'
      htmlNewTap += `                          <input type="text" class="text-white placeholder-white" placeholder="Nome da Cerveja" id='tapTitle${i+1}'>`
      htmlNewTap += '                      </div>'
      htmlNewTap += '                      <div class="item border-grey-800 border-bottom" style="height: 40px;">'
      htmlNewTap += `                          <input type="text" class="text-white placeholder-white" placeholder="Estilo" id='tapStyle${i+1}'>`
      htmlNewTap += '                      </div>'
      htmlNewTap += '                      <div class="item border-grey-800 border-bottom" style="height: 40px;">'
      htmlNewTap += `                          <input type="text" class="text-white placeholder-white" placeholder="Cidade - UF" id='tapOrigin${i+1}'>`
      htmlNewTap += '                      </div>'
      htmlNewTap += '                      <div class="item border-grey-800 border-bottom" style="height: 40px;">'
      htmlNewTap += `                          <input type="text" class="text-white placeholder-white" placeholder="Historia da Cerveja" id='tapHistory${i+1}'>`
      htmlNewTap += '                      </div>'
      htmlNewTap += '                  </div>'
      htmlNewTap += '                  <div class="col-10"></div>'
      htmlNewTap += '                  <div class="col align-center">'
      htmlNewTap += '                      <label class="text-small">Cervejaria</label>'
      htmlNewTap += `                      <img src="img/semImg.jpg" style="width: 100px; height: 100px;" id='cervejariaImg${i+1}'>`
      htmlNewTap += '                      <button class="icon ion-plus-circled text-green text-big" id=`btnAddImgCervejaria${i+1}` onclick="openPopover(`imgOptionsItensArtesanal`)" style="float: right; position: absolute; z-index: 7; margin-top: -2em; margin-left: -1em;"></button>'
      htmlNewTap += '                      <label class="text-small">Cerveja</label>'
      htmlNewTap += `                      <img src="img/semImg.jpg" style="width: 100px; height: 100px;" id='cervejaImg${i+1}'>`
      htmlNewTap += '                      <button class="icon ion-plus-circled text-green text-big" id=`btnAddImgTap${i+1}` onclick="openPopover(`imgOptionsItensArtesanal`)" style="float: right; position: absolute; z-index: 7; margin-top: 3em; margin-left: -4em;"></button>'
      htmlNewTap += '                  </div>'
      htmlNewTap += '              </div>'
      htmlNewTap += '              <div class="row">'
      htmlNewTap += '                <div class="col">'
      htmlNewTap += '                    <div class="row">'
      htmlNewTap += '                        <div class="col" style="margin-right: 5%; width: 72%">'
      htmlNewTap += '                            <div class="item label-fixed border-grey-800 border-bottom">'
      htmlNewTap += `                                <input type="number" class="text-white placeholder-white" placeholder="% Alcoolico" id='tapABV${i+1}'>`
      htmlNewTap += '                                <label style="margin-right: -5em;">% ABV</label>'
      htmlNewTap += '                            </div>'
      htmlNewTap += '                        </div>'
      htmlNewTap += '                        <div class="col">'
      htmlNewTap += '                            <div class="item label-fixed border-grey-800 border-bottom">'
      htmlNewTap += `                                <input type="number" class="text-white placeholder-white" placeholder="Amargor" id='tapIBU${i+1}'>`
      htmlNewTap += '                                <label style="margin-right: -4em;">IBU</label>'
      htmlNewTap += '                            </div>'
      htmlNewTap += '                        </div>'
      htmlNewTap += '                    </div>'
      htmlNewTap += '                </div>'
      htmlNewTap += '            </div>'
          
      taps.sizes.map(function(sizes, n){
        htmlNewTap += `<div class="row" id="tap${i+1}Size${n}Lines">`
        htmlNewTap += '    <div class="col">'
        htmlNewTap += '        <div class="row">'
        htmlNewTap += '            <div class="col" style="margin-right: 5%; width: 84%">'
        htmlNewTap += '                <div class="item label-fixed border-grey-800 border-bottom" style="height: 50px;">'
        htmlNewTap += `                    <input type="number" class="text-white placeholder-white" placeholder="Tamanho" id="tap${i+1}Tamanho${n}">`
        htmlNewTap += '                    <label style="margin-right: -65px;">mL</label>'
        htmlNewTap += '                </div>'
        htmlNewTap += '            </div>'
        htmlNewTap += '            <div class="col">'
        htmlNewTap += '                <div class="item label-fixed border-grey-800 border-bottom" style="height: 50px;">'
        htmlNewTap += '                    <label style="margin-right: -65px; margin-top: 2px;">R$</label>'
        htmlNewTap += `                    <input type="number" step="0,00" class="text-white placeholder-white" placeholder="Preço" id="tap${i+1}Preco${n}">`
        htmlNewTap += '                </div>'
        htmlNewTap += '            </div>'
        htmlNewTap += '        </div>'
        
        htmlNewTap += '    </div>'
        if (n == 0){
          htmlNewTap += '  <div class="col" style="margin-top: 3%;">'
          htmlNewTap += `      <button class="icon ion-plus-circled text-green" id='btnAddRemTap0' onclick='addSizeTap(${i})'></button>`
          htmlNewTap += '  </div>'
        } else {
          htmlNewTap += '    <div class="col" style="margin-top: 3%;">'
          htmlNewTap += `        <button class="icon ion-minus-circled text-red" id="btnAddRemTap" onclick="dellSizeTap(${i+1}, ${n})"></button>`
          htmlNewTap += '    </div>'
        }
        htmlNewTap += '</div>'

        htmlNewTap += `<div id="tap${i}Size${n + 1}"></div>`
      })
    
      htmlNewTap += '            <div class="space"></div>'
      htmlNewTap += '            <div class="row padding">'
      htmlNewTap += '                <div class="col">'
      htmlNewTap += `                    <button class="radius shadow icon full ion-plus-circled text-green grey-800" onclick='saveTap(${i+1})'>Salvar</button>`
      htmlNewTap += '                </div>'
      htmlNewTap += '                <div class="col"></div>'
      htmlNewTap += '                <div class="col">'
      htmlNewTap += `                    <button class="radius shadow icon full ion-trash-a text-red grey-800" onclick='delTap(${i+1})'>Deletar</button>`
      htmlNewTap += '                </div>'
      htmlNewTap += '            </div>'
      htmlNewTap += '          </div>'
      htmlNewTap += '      </div>'
      htmlNewTap += `      <div id="tapNum${i + 2}"></div>`

      document.getElementById(`tapNum${i+1}`).innerHTML = htmlNewTap

      // document.getElementById(`cervejariaImg${i+1}`).src = taps.cervejariaImg 
      // document.getElementById(`cervejaImg${i+1}`).src = taps.cervejaImg 
      document.getElementById(`tapCervejariaName${i+1}`).value = taps.tapCervejariaName 
      document.getElementById(`tapTitle${i+1}`).value = taps.tapTitle 
      document.getElementById(`tapStyle${i+1}`).value = taps.tapStyle 
      document.getElementById(`tapOrigin${i+1}`).value = taps.tapOrigin 
      document.getElementById(`tapHistory${i+1}`).value = taps.tapHistory 
      document.getElementById(`tapABV${i+1}`).value = taps.tapABV 
      document.getElementById(`tapIBU${i+1}`).value = taps.tapIBU

      taps.sizes.map(function(sizes, n){
        document.getElementById(`tap${i+1}Tamanho${n}`).value = sizes.size
        document.getElementById(`tap${i+1}Preco${n}`).value = sizes.price
      })

   })
  }
  setIdHidden('customImgAlert')
}