let htmlNewTap = ''
let tap = []

function addNewTap(){

  tap.push({
    "cervejaria" : "",
    "imgcervejaria" : "",
    "cerveja" : "",
    "imgcerveja" : "",
    "Estilo" : "",
    "Origem" : "",
    "Historia" : "",
    "abv" : "",
    "ibu" : "",
    "tamanhos" : 
    [
      {"1" : 1.00},
      {"1" : 1.00},
      {"1" : 1.00},
      {"1" : 1.00},
      {"1" : 1.00}
    
    ]
  })

  console.log(tap.tamanhos)

  qtdTap++

  htmlNewTap += '<div class="row">'
  htmlNewTap += '          <div class="list no-border">'
  htmlNewTap += '              <div class="row">'
  htmlNewTap += '                  <div class="col-70">'
  htmlNewTap += `                    <h2>Tap #${qtdTap}</h2>`
  htmlNewTap += '                      <div class="item border-grey-800 border-bottom" style="height: 40px;">'
  htmlNewTap += `                          <input type="text" class="text-white placeholder-white" placeholder="Cervejaria" id='tapCervejariaName${qtdTap}''>`
  htmlNewTap += '                      </div>'
  htmlNewTap += '                      <div class="item border-grey-800 border-bottom" style="height: 40px;">'
  htmlNewTap += `                          <input type="text" class="text-white placeholder-white" placeholder="Nome da Cerveja" id='tapTitle${qtdTap}'>`
  htmlNewTap += '                      </div>'
  htmlNewTap += '                      <div class="item border-grey-800 border-bottom" style="height: 40px;">'
  htmlNewTap += `                          <input type="text" class="text-white placeholder-white" placeholder="Estilo" id='tapStyle${qtdTap}'>`
  htmlNewTap += '                      </div>'
  htmlNewTap += '                      <div class="item border-grey-800 border-bottom" style="height: 40px;">'
  htmlNewTap += `                          <input type="text" class="text-white placeholder-white" placeholder="Origem" id='tapOrigin${qtdTap}'>`
  htmlNewTap += '                      </div>'
  htmlNewTap += '                      <div class="item border-grey-800 border-bottom" style="height: 40px;">'
  htmlNewTap += `                          <input type="text" class="text-white placeholder-white" placeholder="Historia da Cerveja" id='tapHistory${qtdTap}'>`
  htmlNewTap += '                      </div>'
  htmlNewTap += '                  </div>'
  htmlNewTap += '                  <div class="col-10"></div>'
  htmlNewTap += '                  <div class="col align-center">'
  htmlNewTap += '                      <label class="text-small">Cervejaria</label>'
  htmlNewTap += `                      <img src="img/semImg.jpg" style="width: 100px; height: 100px;" id='cervejariaImg${qtdTap}'>`
  htmlNewTap += '                      <button class="icon ion-plus-circled text-green text-big" id=`btnAddImgCervejaria${qtdTap}` onclick="openPopover(`imgOptionsItensArtesanal`)" style="float: right; position: absolute; z-index: 7; margin-top: -2em; margin-left: -1em;"></button>'
  htmlNewTap += '                      <label class="text-small">Cerveja</label>'
  htmlNewTap += `                      <img src="img/semImg.jpg" style="width: 100px; height: 100px;" id='cervejaImg${qtdTap}'>`
  htmlNewTap += '                      <button class="icon ion-plus-circled text-green text-big" id=`btnAddImgTap${qtdTap}` onclick="openPopover(`imgOptionsItensArtesanal`)" style="float: right; position: absolute; z-index: 7; margin-top: 3em; margin-left: -4em;"></button>'
  htmlNewTap += '                  </div>'
  htmlNewTap += '              </div>'
  htmlNewTap += '              <div class="row">'
  htmlNewTap += '                <div class="col">'
  htmlNewTap += '                    <div class="row">'
  htmlNewTap += '                        <div class="col" style="margin-right: 5%; width: 72%">'
  htmlNewTap += '                            <div class="item label-fixed border-grey-800 border-bottom">'
  htmlNewTap += `                                <input type="number" class="text-white placeholder-white" placeholder="% Alcoolico" id='tapABV${qtdTap}'>`
  htmlNewTap += '                                <label style="margin-right: -5em;">% ABV</label>'
  htmlNewTap += '                            </div>'
  htmlNewTap += '                        </div>'
  htmlNewTap += '                        <div class="col">'
  htmlNewTap += '                            <div class="item label-fixed border-grey-800 border-bottom">'
  htmlNewTap += `                                <input type="number" class="text-white placeholder-white" placeholder="Amargor" id='tapIBU${qtdTap}'>`
  htmlNewTap += '                                <label style="margin-right: -4em;">IBU</label>'
  htmlNewTap += '                            </div>'
  htmlNewTap += '                        </div>'
  htmlNewTap += '                    </div>'
  htmlNewTap += '                    <div class="row">'
  htmlNewTap += '                        <div class="col" style="margin-right: 5%; width: 84%">'
  htmlNewTap += '                            <div class="item label-fixed border-grey-800 border-bottom"'
  htmlNewTap += '                                style="height: 50px;">'
  htmlNewTap += `                                <input type="number" class="text-white placeholder-white" placeholder="Tamanho" id='tapTamanho${qtdTap}'>`
  htmlNewTap += '                                <label style="margin-right: -4em;">mL</label>'
  htmlNewTap += '                            </div>'
  htmlNewTap += '                        </div>'
  htmlNewTap += '                        <div class="col">'
  htmlNewTap += '                            <div class="item label-fixed border-grey-800 border-bottom"'
  htmlNewTap += '                                style="height: 50px;">'
  htmlNewTap += '                                <label style="margin-right: -4em; margin-top: 2px;">R$</label>'
  htmlNewTap += `                                <input type="number" step="0,00" class="text-white placeholder-white" placeholder="Preço" id='tapPreco${qtdTap}'>`
  htmlNewTap += '                            </div>'
  htmlNewTap += '                        </div>'
  htmlNewTap += '                    </div>'
  htmlNewTap += '                </div>'
  htmlNewTap += '                <div class="col" style="margin-top: 14%;">'
  htmlNewTap += `                    <button class="icon ion-plus-circled text-green" id='btnAddRemTap${qtdTap}' onclick='addSizeTap(${qtdTap})'></button>`
  htmlNewTap += '                </div>'
  htmlNewTap += '            </div>'

  htmlNewTap += `            <div id="tapSize${qtdTap}"></div>`

  htmlNewTap += '            <div class="space"></div>'
  htmlNewTap += '            <div class="row padding">'
  htmlNewTap += '                <div class="col">'
  htmlNewTap += '                    <button class="radius shadow icon full ion-plus-circled text-green grey-800" onclick="saveTap(`tap`)">Salvar</button>'
  htmlNewTap += '                </div>'
  htmlNewTap += '                <div class="col"></div>'
  htmlNewTap += '                <div class="col">'
  htmlNewTap += '                    <button class="radius shadow icon full ion-trash-a text-red grey-800" onclick="cancelAddItem(``)">Deletar</button>'
  htmlNewTap += '                </div>'
  htmlNewTap += '            </div>'
  htmlNewTap += '          </div>'
  htmlNewTap += '      </div>'

  document.getElementById('newTap').innerHTML = htmlNewTap

}
