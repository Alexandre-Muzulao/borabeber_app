function getAllVodkas(){
    showLoader("alertBoraBeberLoader", 'Buscando os Vodkas na depósito')
    if (ALLVODKAS == undefined || ALLVODKAS.length == 0){
        MobileUI.ajax.get(url + '/getvodkas').query('marca=todas' + '&' + 'userId=' + IDCOMPANY + '').send().then(function (res){
        if(res.body.errorMessage) {
            setIdHidden('customImgAlert')
            alert(res.body.errorMessage)
        } else {
            setIdHidden('customImgAlert')
            openPage('./view/adm/pagesItens/admVodkas/VodkasList', function(){
                WHISKY = []
                ALLVODKAS = res.body.data
                searchVodkas(ALLVODKAS)
                parseAdmVodka(ALLVODKAS)
            })
        }
        }).catch(function(err) {
            setIdHidden('customImgAlert')
            alert('Ops! Tive um problema para encontrar a cerveja no Freezer! Vamos tentar novamente daqui a pouco.')
            console.log(err)
        })
    } else {
        setIdHidden('customImgAlert')
        openPage('./view/adm/pagesItens/admVodkas/VodkasList', function(){
            searchVodkas(ALLVODKAS)
            // parseAdmVodka(ALLVODKAS)
        })
    }
}

function searchVodkas(WHISKY){
    ALLVODKAS_OLD = WHISKY
    
    $(document).ready(function(){
        $("#marcaWISKIS").keyup(function(){
            var searchVal = $("#marcaWISKIS").val()
            if (searchVal.length > 0){
                ALLVODKAS = []
                for (var i=0 ; i < ALLVODKAS_OLD.length ; i++)
                {
                    if (validUndefined(ALLVODKAS_OLD[i])){
                        ifWISKISExists(ALLVODKAS_OLD[i], searchVal, i)
                        // WISKISPushIfNotExist(ifWISKISExists(ALLVODKAS_OLD[i], searchVal))
                    }
                }
            } else {
                ALLVODKAS = ALLVODKAS_OLD
            }

        })
    })
}

function WISKISPushIfNotExist(WISKIS){
    for (var i=0; i < ALLVODKAS; i++){
        if(WISKIS.tituloWISKISPar !== ALLVODKAS[i].tituloWISKISPar){
            ALLVODKAS.push(WISKIS)
        }
        if(WISKIS.tituloWISKISImpar !== ALLVODKAS[i].tituloWISKISImpar){
            ALLVODKAS.push(WISKIS)
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
            ALLVODKAS.push(item)
        }
        // if (item.tituloWISKISImpar.toLowerCase().includes(search.toLowerCase())){
        //     ALLVODKAS.push(item)
        // }
    }   
}