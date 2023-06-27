function getAllCarnes(){
  showLoader("alertBoraBeberLoader", 'Buscando os cortes na camara fria!')
    if (ADMCARNES.length == 0){
        MobileUI.ajax.get(url + '/getcarnes').query('marca=todas' + '&' + 'userId=' + IDCOMPANY + '').send().then(function (res){
        if(res.body.errorMessage) { 
            alert(res.body.errorMessage)
            setIdHidden('customImgAlert')
        } else { 
            openPage('./view/adm/pagesItens/admCarnes/carnesList', function(){
                CARNEs = []
                ADMCARNES = res.body.data
                searchCarne(ADMCARNES)
                parseAdmCarnes(ADMCARNES)
                setIdHidden('customImgAlert')
            })
        }
        }).catch(function(err) { 
            alert('Ops! Tive um problema para encontrar a cerveja no Freezer! Vamos tentar novamente daqui a pouco.')
            console.log(err)
            setIdHidden('customImgAlert')
        })
    } else {
      setIdHidden('customImgAlert')
        openPage('./view/adm/pagesItens/admCarnes/carnesList', function(){
            searchCarne(ADMCARNES) 
        })
    }
}

function searchCarne(CARNEs){
    ADMCARNES_OLD = CARNEs
    
    $(document).ready(function(){
        $("#marcaCARNE").keyup(function(){
            var searchVal = $("#marcaCARNE").val()
            if (searchVal.length > 0){
                ADMCARNES = []
                for (var i=0 ; i < ADMCARNES_OLD.length ; i++)
                {
                    if (validUndefined(ADMCARNES_OLD[i])){
                        ifCARNEExists(ADMCARNES_OLD[i], searchVal, i)
                        // CARNEPushIfNotExist(ifCARNEExists(ADMCARNES_OLD[i], searchVal))
                    }
                }
            } else {
                ADMCARNES = ADMCARNES_OLD
            }

        })
    })
}

function CARNEPushIfNotExist(CARNE){
    for (var i=0; i < ADMCARNES; i++){
        if(CARNE.tituloCARNEPar !== ADMCARNES[i].tituloCARNEPar){
            ADMCARNES.push(CARNE)
        }
        if(CARNE.tituloCARNEImpar !== ADMCARNES[i].tituloCARNEImpar){
            ADMCARNES.push(CARNE)
        }
    }
}

function validUndefined(CARNE){
    if (CARNE !== undefined){
        return true
    }
}

function ifCARNEExists(item, search, index){
    if (isPar(index) == 'par'){
        if (item.tituloCARNEPar.toLowerCase().includes(search.toLowerCase())){
            ADMCARNES.push(item)
        }
        // if (item.tituloCARNEImpar.toLowerCase().includes(search.toLowerCase())){
        //     ADMCARNES.push(item)
        // }
    }   
}