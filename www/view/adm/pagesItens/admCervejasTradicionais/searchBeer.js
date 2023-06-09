function getAllBeers(){
    showLoader("alertBoraBeberLoader", 'Buscando os cervejas no deposito!')
    if (ALLBEER.length == 0){
        MobileUI.ajax.get(url + '/getbeers').query('marca=todas' + '&' + 'userId=' + IDCOMPANY)
        .send()
        .then(function (res){
        if(res.body.errorMessage) {
            setIdHidden('customImgAlert')
            alert(res.body.errorMessage)
        } else {
            setIdHidden('customImgAlert')
            openPage('./view/adm/pagesItens/admCervejasTradicionais/cervejasList', function(){              
                beers = []
                ALLBEER = res.body.data
                searchBeer(ALLBEER)
                parseCervejaAdm(ALLBEER)
            })

        }
        }).catch(function(err) {
            setIdHidden('customImgAlert')
            alert('Ops! Tive um problema para encontrar a cerveja no Freezer! Vamos tentar novamente daqui a pouco.')
            console.log(err)
        })
    } else {
        setIdHidden('customImgAlert')
        openPage('./view/adm/pagesItens/admCervejasTradicionais/cervejasList', function(){
            searchBeer(ALLBEER) 
        })
    }
}

function searchBeer(beers){
    ALLBEER_OLD = beers
    
    $(document).ready(function(){
        $("#marcaBeer").keyup(function(){
            var searchVal = $("#marcaBeer").val()
            if (searchVal.length > 0){
                ALLBEER = []
                for (var i=0 ; i < ALLBEER_OLD.length ; i++)
                {
                    if (validUndefined(ALLBEER_OLD[i])){
                        ifBeerExists(ALLBEER_OLD[i], searchVal, i)
                        // beerPushIfNotExist(ifBeerExists(ALLBEER_OLD[i], searchVal))
                    }
                }
            } else {
                ALLBEER = ALLBEER_OLD
            }

        })
    })
}

function beerPushIfNotExist(beer){
    for (var i=0; i < ALLBEER; i++){
        if(beer.tituloBeerPar !== ALLBEER[i].tituloBeerPar){
            ALLBEER.push(beer)
        }
        if(beer.tituloBeerImpar !== ALLBEER[i].tituloBeerImpar){
            ALLBEER.push(beer)
        }
    }
}

function validUndefined(beer){
    if (beer !== undefined){
        return true
    }
}

function ifBeerExists(item, search, index){
    if (isPar(index) == 'par'){
        if (item.tituloBeerPar.toLowerCase().includes(search.toLowerCase())){
            ALLBEER.push(item)
        }
        // if (item.tituloBeerImpar.toLowerCase().includes(search.toLowerCase())){
        //     ALLBEER.push(item)
        // }
    }   
}