function getAllARTESANAISs(){
    loading('Buscando os cervejas no deposito ...')
    if (ALLARTESANAIS.length == 0){
        MobileUI.ajax.get(url + '/getARTESANAISs').query('marca=todas' + '&' + 'userId=' + IDCOMPANY + '').send().then(function (res){
        if(res.body.errorMessage) {
            closeLoading()
            alert(res.body.errorMessage)
        } else {
            closeLoading()
            openPage('./view/adm/pagesItens/admCervejas/cervejasList', function(){
                ARTESANAISs = []
                ALLARTESANAIS = res.body.data
                searchARTESANAIS(ALLARTESANAIS)
                parseAdmARTESANAIS(ALLARTESANAIS)
            })
        }
        }).catch(function(err) {
            closeLoading()
            alert('Ops! Tive um problema para encontrar a cerveja no Freezer! Vamos tentar novamente daqui a pouco.')
            console.log(err)
        })
    } else {
        closeLoading()
        openPage('./view/adm/pagesItens/admCervejas/cervejasList', function(){
            searchARTESANAIS(ALLARTESANAIS)
            // parseAdmARTESANAIS(ALLARTESANAIS)
        })
    }
}

function searchARTESANAIS(ARTESANAISs){
    ALLARTESANAIS_OLD = ARTESANAISs
    
    $(document).ready(function(){
        $("#marcaARTESANAIS").keyup(function(){
            var searchVal = $("#marcaARTESANAIS").val()
            if (searchVal.length > 0){
                ALLARTESANAIS = []
                for (var i=0 ; i < ALLARTESANAIS_OLD.length ; i++)
                {
                    if (validUndefined(ALLARTESANAIS_OLD[i])){
                        ifARTESANAISExists(ALLARTESANAIS_OLD[i], searchVal, i)
                        // ARTESANAISPushIfNotExist(ifARTESANAISExists(ALLARTESANAIS_OLD[i], searchVal))
                    }
                }
            } else {
                ALLARTESANAIS = ALLARTESANAIS_OLD
            }

        })
    })
}

function ARTESANAISPushIfNotExist(ARTESANAIS){
    for (var i=0; i < ALLARTESANAIS; i++){
        if(ARTESANAIS.tituloARTESANAISPar !== ALLARTESANAIS[i].tituloARTESANAISPar){
            ALLARTESANAIS.push(ARTESANAIS)
        }
        if(ARTESANAIS.tituloARTESANAISImpar !== ALLARTESANAIS[i].tituloARTESANAISImpar){
            ALLARTESANAIS.push(ARTESANAIS)
        }
    }
}

function validUndefined(ARTESANAIS){
    if (ARTESANAIS !== undefined){
        return true
    }
}

function ifARTESANAISExists(item, search, index){
    if (isPar(index) == 'par'){
        if (item.tituloARTESANAISPar.toLowerCase().includes(search.toLowerCase())){
            ALLARTESANAIS.push(item)
        }
        // if (item.tituloARTESANAISImpar.toLowerCase().includes(search.toLowerCase())){
        //     ALLARTESANAIS.push(item)
        // }
    }   
}