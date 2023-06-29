function getAllCarnes(){
  showLoader("alertBoraBeberLoader", 'Buscando os cortes na camara fria!')
    if (ALLCARNES.length == 0){
        MobileUI.ajax.get(url + '/getcarnes').query('marca=todas' + '&' + 'userId=' + IDCOMPANY + '').send().then(function (res){
        if(res.body.errorMessage) { 
            alert(res.body.errorMessage)
            setIdHidden('customImgAlert')
        } else { 
            openPage('./view/adm/pagesItens/admCarnes/carnesList', function(){
                CARNES = []
                ALLCARNES = res.body.data
                searchCarne(ALLCARNES)
                parseAdmCarnes(ALLCARNES)
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
            searchCarne(ALLCARNES) 
        })
    }
}

function searchCarne(CARNES){
    ADMCARNES_OLD = CARNES    
    $(document).ready(function(){
        $("#marcaCARNE").keyup(function(){
            var searchVal = $("#marcaCARNE").val()
            if (searchVal.length > 0){
              ALLCARNES = []
                for (var i=0 ; i < ADMCARNES_OLD.length ; i++)
                {
                    if (validUndefined(ADMCARNES_OLD[i])){
                        ifCARNEExists(ADMCARNES_OLD[i], searchVal, i)
                        // CARNEPushIfNotExist(ifCARNEExists(ADMCARNES_OLD[i], searchVal))
                    }
                }
            } else {
              ALLCARNES = ADMCARNES_OLD
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