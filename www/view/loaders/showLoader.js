var LOADERSMSG = {
    msg : ''
}

function showLoader(classId, msg){
    LOADERSMSG.msg = msg
    switch (classId) {
        case 'alertBoraBeberLoader':
            include('customImgAlert', './view/loaders/borabeberloader')
        break;
        case 'alertBeer':
            include('customImgAlert', './view/loaders/beerloader')
        break;
        case 'alertGetEndereco':
            include('customImgAlert', './view/loaders/enderecoLoader')
        break;
        case 'checkloader':
            include('customImgAlert', './view/loaders/checkloader')
        break;
        case 'sendRequest':
            include('customImgAlert', './view/loaders/sendRequest')
        break;
    }
    setIdVisible('customImgAlert')
}
