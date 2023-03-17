function includeDistanceSetting(){
    include('distanceSetting', './view/adm/requestConfig/includeDistance', function(){

    })
}

function addDistance () {
  qtdDistance++
    htmlDistance += '<div class="item" id="Distance' + qtdDistance + '">'
    htmlDistance += '    <div class="row">'
    htmlDistance += '        <div class="col padding">'
    htmlDistance += '            <div class="item label-float border-grey border-bottom">'
    htmlDistance += '                <label class="icon ion-map"></label>'
    htmlDistance += '                <label style="margin-left: 2em;">Km</label>'
    htmlDistance += '                <input class="text-white" type="number" id="kmDistance' + qtdDistance + '" style="margin-top: 0.8em;">'
    htmlDistance += '            </div>'
    htmlDistance += '        </div>'
    htmlDistance += '        <div class="col padding">'
    htmlDistance += '            <div class="item label-float border-grey border-bottom">'
    htmlDistance += '                <label class="icon ion-clock"></label>'
    htmlDistance += '                <label style="margin-left: 2em;">Min.</label>'
    htmlDistance += '                <input class="text-white" type="number" id="tempoDistance' + qtdDistance + '" style="margin-top: 0.8em;">'
    htmlDistance += '            </div>'
    htmlDistance += '        </div>'
    htmlDistance += '        <div class="col padding">'
    htmlDistance += '            <div class="item label-float border-grey border-bottom">'
    htmlDistance += '                <label class="icon ion-cash"></label>'
    htmlDistance += '                <label style="margin-top: 2px; margin-left: -1em;">R$</label>'
    htmlDistance += '                <input class="text-white" type="number" id="valorDistance' + qtdDistance + '" style="margin-left: 0.5em; margin-top: 0.8em;">'
    htmlDistance += '            </div>'
    htmlDistance += '        </div>'
    htmlDistance += '        <div class="col" style="margin-left: -1em;">'
    htmlDistance += '                <button class="icon ion-minus-circled text-red" style="margin-top: 1.5em;" id="btnRemDistance" onclick="excludeDistance(' + qtdDistance + ')"></button>'
    htmlDistance += '        </div>'
    htmlDistance += '    </div>'
    htmlDistance += '</div>'

    document.getElementById('distanceSetting').innerHTML = htmlDistance
  if (qtdDistance == 1){
    document.getElementById('distanceSetting').innerHTML = htmlDistance
  } else {
    document.getElementById('distanceSetting').innerHTML = htmlDistance
    // for (var i = 1; i <= qtdDistance; i++){
    //   document.getElementById('kmDistance' + (i).toString()).value = DistancePricesSettings[i].km
    //   document.getElementById('tempoDistance' + (i).toString()).value = DistancePricesSettings[i].tempo
    //   document.getElementById('valorDistance' + (i).toString()).value = DistancePricesSettings[i].valor
    // }
  }
}

function includeDistance() {
    for (var i = 0; i <= qtdDistance; i++){
    //   document.getElementById('kmDistance' + (i).toString()).value = DistancePricesSettings[i].km
    //   document.getElementById('tempoDistance' + (i).toString()).value = DistancePricesSettings[i].tempo
    //   document.getElementById('valorDistance' + (i).toString()).value = DistancePricesSettings[i].valor
      if (i == 0) {
          DistancePricesSettings.push({
          "km" : document.getElementById('kmDistance').value,
          "tempo" : document.getElementById('tempoDistance').value,
          "valor" : document.getElementById('valorDistance').value})
      } else {
          DistancePricesSettings.push({
          "km" : document.getElementById('kmDistance' + i).value,
          "tempo" : document.getElementById('tempoDistance' + i).value,
          "valor" : document.getElementById('valorDistance' + i).value})
      }
    }
    DistanceBaseSettings = {
      "_idCompany" : IDCOMPANY,
      "valorMinimo" : document.getElementById('valorMinimoDistance').value,
      "valorFree" : document.getElementById('valorFreeDistance').value,
      "kmFree" : document.getElementById('kmFreeDistance').value,
      DistancePricesSettings
  }
}

function excludeDistance(N) {
  qtdDistance--
  var element = document.getElementById('Distance' + N)
  element.parentNode.removeChild(element)
  htmlDistance = document.getElementById('Distance').innerHTML
  DistancePricesSettings.splice(N, 1)
}