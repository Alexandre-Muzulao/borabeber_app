/* Global Vars */
var BEERS = []

function openTabs(tab){
    switch (tab) {
        case 'tabPromos':
            include('includePromos', './view/user/pages/promos/promos')
        break;
        case 'tabCervejas':
            include('includeCervejas', './view/user/pages/cervejas/cervejas')
        break;
        case 'tabVodkas':
            include('includeVodkas', './view/user/pages/vodkas/vodkas')
        break;
        case 'tabWhiskys':
            include('includeWhiskys', './view/user/pages/whiskys/whiskys')
        break;
        case 'tabChurrasco':
            include('includeChurrasco', './view/user/pages/churrasco/churrasco')
        break;
    }
    openTab(tab)
}