function getRequesConfig(){
    loading('Carregando configurações de Entrega...')
    if (DistanceBaseSettings.valorMinimo == undefined){
        MobileUI.ajax.get(url + '/getrequestconfig')
        .query('_id=' + IDCOMPANY + '')
        .send()
        .then(function (res){
            DistanceBaseSettings = res.body.data.deliverySettings
            openPage('./view/adm/requestConfig/requestConfig', function(){
                setDistances()
                closeLoading()
            })
        })
    } else {
        openPage('./view/adm/requestConfig/requestConfig', function(){
            setDistances()
            closeLoading()
        })
    }
}

function setDistances(){
    qtdDistance = DistanceBaseSettings.pricesSettings.length

    document.getElementById('valorMinimoDistance').value = DistanceBaseSettings.valorMinimo
    document.getElementById('valorFreeDistance').value = DistanceBaseSettings.valorFree
    document.getElementById('kmFreeDistance').value = DistanceBaseSettings.kmFree

    document.getElementById('kmDistance').value = DistanceBaseSettings.pricesSettings[0].km
    document.getElementById('tempoDistance').value = DistanceBaseSettings.pricesSettings[0].tempo
    document.getElementById('valorDistance').value = DistanceBaseSettings.pricesSettings[0].valor


    for (i in DistanceBaseSettings.pricesSettings){
        if (i > 0){
            htmlDistance += '<div class="item" id="Distance' + i + '">'
            htmlDistance += '    <div class="row">'
            htmlDistance += '        <div class="col padding">'
            htmlDistance += '            <div class="item label-float border-grey border-bottom">'
            htmlDistance += '                <label class="icon ion-map"></label>'
            htmlDistance += '                <label style="margin-left: 2em;">Km</label>'
            htmlDistance += '                <input class="text-white" type="number" id="kmDistance' + i + '" style="margin-top: 0.8em;" value="' + DistanceBaseSettings.pricesSettings[i].km + '">'
            htmlDistance += '            </div>'
            htmlDistance += '        </div>'
            htmlDistance += '        <div class="col padding">'
            htmlDistance += '            <div class="item label-float border-grey border-bottom">'
            htmlDistance += '                <label class="icon ion-clock"></label>'
            htmlDistance += '                <label style="margin-left: 2em;">Min.</label>'
            htmlDistance += '                <input class="text-white" type="number" id="tempoDistance' + i + '" style="margin-top: 0.8em;" value="' + DistanceBaseSettings.pricesSettings[i].tempo + '">'
            htmlDistance += '            </div>'
            htmlDistance += '        </div>'
            htmlDistance += '        <div class="col padding">'
            htmlDistance += '            <div class="item label-float border-grey border-bottom">'
            htmlDistance += '                <label class="icon ion-cash"></label>'
            htmlDistance += '                <label style="margin-top: 2px; margin-left: -1em;">R$</label>'
            htmlDistance += '                <input class="text-white" type="number" id="valorDistance' + i + '" style="margin-left: 0.5em; margin-top: 0.8em;" value="' + DistanceBaseSettings.pricesSettings[i].valor + '">'
            htmlDistance += '            </div>'
            htmlDistance += '        </div>'
            htmlDistance += '        <div class="col" style="margin-left: -1em;">'
            htmlDistance += '                <button class="icon ion-minus-circled text-red" style="margin-top: 1.5em;" id="btnRemDistance" onclick="excludeDistance(' + i + ')"></button>'
            htmlDistance += '        </div>'
            htmlDistance += '    </div>'
            htmlDistance += '</div>'
        }
    }

    document.getElementById('distanceSetting').innerHTML = htmlDistance
}

function saveRequestConfig(){
    includeDistance()
    MobileUI.ajax.post(url + '/setrequestconfig')
    .send(DistanceBaseSettings)
    .then(function(res){
        // console.log(res.body)
    })
    openToast({
        message: "Alterações Salvas",
        position: 'center',
        class: 'full text-big text-strong black-opacity-70 text-white radius',
    })
    DistancePricesSettings = []
    DistanceBaseSettings = {}
}

