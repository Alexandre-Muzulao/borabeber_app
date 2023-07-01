function getAllWhiskys(){
    showLoader("alertBoraBeberLoader", 'Buscando os Whiskys na depósito')
    if (ALLWHISKY.length == 0 || ALLWHISKY == undefined){
        MobileUI.ajax.get(url + '/getwhiskys').query('marca=todas' + '&' + 'userId=' + IDCOMPANY + '').send().then(function (res){
        if(res.body.errorMessage) {
            setIdHidden('customImgAlert')
            alert(res.body.errorMessage)
        } else {
            setIdHidden('customImgAlert')
            openPage('./view/adm/pagesItens/admWhiskys/whiskysList', function(){
                WHISKY = []
                ALLWHISKY = res.body.data
                searchWhiskys(ALLWHISKY)
                parseAdmWhisky(ALLWHISKY)
            })
        }
        }).catch(function(err) {
            setIdHidden('customImgAlert')
            alert('Ops! Tive um problema para encontrar a cerveja no Freezer! Vamos tentar novamente daqui a pouco.')
            console.log(err)
        })
    } else {
        setIdHidden('customImgAlert')
        openPage('./view/adm/pagesItens/admWhiskys/whiskysList', function(){
            searchWhiskys(ALLWHISKY)
            // parseAdmWhisky(ALLWHISKY)
        })
    }
}

function searchWhiskys(WHISKY){
    ALLWHISKY_OLD = WHISKY
    
    $(document).ready(function(){
        $("#marcaWISKIS").keyup(function(){
            var searchVal = $("#marcaWISKIS").val()
            if (searchVal.length > 0){
                ALLWHISKY = []
                for (var i=0 ; i < ALLWHISKY_OLD.length ; i++)
                {
                    if (validUndefined(ALLWHISKY_OLD[i])){
                        ifWISKISExists(ALLWHISKY_OLD[i], searchVal, i)
                        // WISKISPushIfNotExist(ifWISKISExists(ALLWHISKY_OLD[i], searchVal))
                    }
                }
            } else {
                ALLWHISKY = ALLWHISKY_OLD
            }

        })
    })
}

function WISKISPushIfNotExist(WISKIS){
    for (var i=0; i < ALLWHISKY; i++){
        if(WISKIS.tituloWISKISPar !== ALLWHISKY[i].tituloWISKISPar){
            ALLWHISKY.push(WISKIS)
        }
        if(WISKIS.tituloWISKISImpar !== ALLWHISKY[i].tituloWISKISImpar){
            ALLWHISKY.push(WISKIS)
        }
    }
}

function validUndefined(WISKIS){
    if (WISKIS !== undefined){
        return true
    }
}

function ifWISKISExists(item, search, index){
    if (isPar(index) == 'par'){
        if (item.tituloWISKISPar.toLowerCase().includes(search.toLowerCase())){
            ALLWHISKY.push(item)
        }
        // if (item.tituloWISKISImpar.toLowerCase().includes(search.toLowerCase())){
        //     ALLWHISKY.push(item)
        // }
    }   
}