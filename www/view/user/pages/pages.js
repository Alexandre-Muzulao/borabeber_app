var opened1, opened2, opened3, opened4, opened5 = false
function openTabs(tab){
    switch (tab) {
        case 'tabPromos':
            if(!opened1){   
                opened1 = true
                include('includePromos', './view/user/pages/promos/promos')
            }
        break;
        case 'tabCervejas':
            if(!opened2){
                opened2 = true
                include('includeCervejas', './view/user/pages/cervejas/cervejas')
            }
        break;
        case 'tabVodkas':
            if(!opened3){
                opened3 = true
                include('includeVodkas', './view/user/pages/vodkas/vodkas')
            }
        break;
        case 'tabWhiskys':
            if(!opened4){
                opened4 = true
                include('includeWhiskys', './view/user/pages/whiskys/whiskys')
            }
        break;
        case 'tabConveniencia':
            if(!opened5){
                opened5 = true
                include('includeConveniencia', './view/user/pages/conveniencia/conveniencia')
            }
        break;
    }
    openTab(tab)
}

function returnToHome(){
    opened1 = undefined
    opened2 = undefined
    opened3 = undefined
    opened4 = undefined 
    opened5 = undefined
    openPage('./view/user/main/main', function(){
        setTimeout(function(){
            openTabs('tabCervejas')
        },300)

        setTimeout(function(){
            setIdHidden('customImgAlert')
        },1000)
    })
}