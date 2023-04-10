var stModule1, stModule2, stModule3, stModule4, stModule5, stModule6, stModule7, stModule8, stModule9, stModule10,
stModule11, stModule12, stModule13, stModule14, stModule15, stModule16, stModule17, stModule18 = false

var moduleOld = '';

function setViewtpProds(module){
    switch (module) {
        case "TAP Cervejas Artesanais":
            if(!stModule1){
                stModule1 = true
                include('incTAP Cervejas Artesanais', './view/adm/pagesItens/admCervejaArtesanal/admCervejasArtesanais.html')
                showLoader("alertBoraBeberLoader", 'Carregando TAPS, aguarde por gentileza!')
                setTimeout(function(){
                  loadTaps(TAP)
                }, 300)
            }
        break;
        case "Cervejas":
            if(!stModule2){
                stModule2 = true
                include('incCervejas', './view/adm/pagesItens/admCervejasTradicionais/admCervejas.html')
            }
        break;
        
        case "Chopp":
            if(!stModule3){
                stModule3 = true
                include('incChopp', './view/adm/pagesItens/admChoppBarril/admChopps.html')
            }
        break;
        case "Combos":
            if(!stModule4){
                stModule4 = true
                include('incCombos', './view/adm/pagesItens/admCombos/admCombos.html')
            }
        break;
        case "Combustível":
            if(!stModule5){
                stModule5 = true
                include('incCombustível', './view/adm/pagesItens/admCombustiveis/admCombustiveis.html')
            }
        break;
        case "Conveniência":
            if(!stModule6){
                stModule6 = true
                include('incConveniência', './view/adm/pagesItens/admConveniencia/conveniencia.html')
            }
        break;
        case "Drinks":
            if(!stModule7){
                stModule7 = true
                include('incDrinks', './view/adm/pagesItens/admDrinks/admDrinks.html')
            }
        break;
        case "Espetos":
            if(!stModule8){
                stModule8 = true
                include('incEspetos', './view/adm/pagesItens/admEspetos/admEspetos.html')
            }
        break;
        case "Essencias":
            if(!stModule9){
                stModule9 = true
                include('incEssencias', './view/adm/pagesItens/admEssencias/admEssencias.html')
            }
        break;
        case "Hamburguêrs":
            if(!stModule10){
                stModule10 = true
                include('incHamburguêrs', './view/adm/pagesItens/admHamburguers/admHamburguers.html')
            }
        break;
        case "Narguilé":
            if(!stModule11){
                stModule11 = true
                include('incNarguilé', './view/adm/pagesItens/admNarguile/admNarguiles.html')
            }
        break;
        case "Porções":
            if(!stModule12){
                stModule12 = true
                include('incPorções', './view/adm/pagesItens/admPorcoes/admPorcoes.html')
            }
        break;
        case "Promos":
            if(!stModule13){
                stModule13 = true
                include('incPromos', './view/adm/pagesItens/admPromos/promos.html')
            }
        break;
        case "Sem Alcool":
            if(!stModule14){
                stModule14 = true
                include('incSem Alcool', './view/adm/pagesItens/admSemAlcool/admSemAlcool.html')
            }
        break;
        case "Vinhos":
            if(!stModule15){
                stModule15 = true
                include('incVinhos', './view/adm/pagesItens/admVinhos/admVinhos.html')
            }
        break;
        case "Whiskys":
            if(!stModule16){
                stModule16 = true
                include('incWhiskys', './view/adm/pagesItens/admWhiskys/admWhiskys.html')
            }
        break;
        case "Vodkas":
            if(!stModule17){
                stModule17 = true
                include('incVodkas', './view/adm/pagesItens/admVodkas/admVodkas')
            }
        break;
        case "Carnes":
            if(!stModule18){
                stModule18 = true
                include('incCarnes', './view/adm/pagesItens/admCarnes/admCarnes.html')
            }
        break;
    }
    
    // document.getElementById(`btntab${moduleOld}`).className = 
    // document.getElementById(`btntab${moduleOld}`).className.replace(`/(?:^|/s) btntab${moduleOld}(?!/S)/g`, '' )
    // document.getElementById(`tab${moduleOld}`).className = 
    // document.getElementById(`tab${moduleOld}`).className.replace(`/(?:^|/s)tab${moduleOld}(?!/S)/g`, '' )

    document.getElementById(`btntab${module}`).className += " active";
    document.getElementById(`tab${module}`).className += " active";
    openTab(`tab${module}`)

    moduleOld = module
}

function returnToHome(){
    stModule1 = undefined
    stModule2 = undefined
    stModule3 = undefined
    stModule4 = undefined 
    stModule5 = undefined
    stModule6 = undefined
    stModule7 = undefined
    stModule8 = undefined
    stModule9 = undefined
    stModule10 = undefined
    stModule11 = undefined
    stModule12 = undefined
    stModule13 = undefined
    stModule14 = undefined
    stModule15 = undefined
    stModule16 = undefined
    stModule17 = undefined
    stModule18 = undefined
    openPage('./view/adm/main/Itensmain', function(){
        setTimeout(function(){
            openTabs('tabAdmCervejas')
        },300)

        setTimeout(function(){
            setIdHidden('customImgAlert')
        },1000)
    })
}