function dellSwiperImg(imgOrder, imgCapa){
    var box = '<div class="grey-800 align-center">'
    box += '    <p>Não se preocupe, caso você remova a imagem, você pode adicionar outra sem problemas!</p>'
    box += '    <img src="' + imgCapa + '" style="widows: 100px; height: 100px;">'
    box += '</div>'
    alert({
        title: 'Deseja mesmo remover esta imagem de capa ?',
        message: box,
        class: 'grey-800 radius',
        buttons:[
            {
                label: '',
                class: 'text-big text-red ion-trash-a strong',
                onclick: function(){
                    closeAlert()
                    var imgSwiperDados = {}
                    imgSwiperDados.idBar = COMPANY._id
                    imgSwiperDados.imgOrder = imgOrder

                    // ImgBar.barImgName = $.trim(`${COMPANY.nomeCompany}/swipper/${MAXQTDIMG}`)

                    imgSwiperDados.barImgName = $.trim(`${COMPANY.nomeCompany}/swipper/${imgOrder}`)

                    imgSwiperDados.option = false
                    loading('A imgem de capa está sendo removida, por favor aguarde!')
                    MobileUI.ajax.post(url + '/remswipperbar').send(imgSwiperDados).then(function (res){
                        if(res.body.errorMessage) {
                            closeLoading()
                            alert(res.body.errorMessage)
                        } else {
                            var index = COMPANY.swiperPhotos
                            for (i = 0; i < COMPANY.swiperPhotos.length; i++){
                                if (COMPANY.swiperPhotos[i].imgOrder == imgOrder){
                                    index = i
                                }
                            }
                            if (index > -1) {
                                COMPANY.swiperPhotos.splice(index, 1);
                            }
                            setTimeout(() => {
                                new Swiper('.swipper-gallery', {
                                    pagination: '.swiper-pagination'
                                });
                            }, 400)
                            closeLoading()
                            MAXQTDIMG = parseInt(MAXQTDIMG) - 1
                            alert('Imagem de capa removida com sucesso.','Pronto!')
                        }
                    }).catch(function (err){
                        console.log(err)
                        closeLoading()
                        alert('Erro')
                    })
                }
            },
            {
                label: '',
                class: 'ion-close-round text-big text-white strong',
                onclick: function(){
                    closeAlert()
                }
            }
        ]
    })    
}

function addImgTypes(tpEntrada, tWidth, tHeight, tpImg){
    var tpEnt = ''
    if (tpEntrada == 'cam'){
        tpEnt = 1
    } else {
        tpEnt = 0
    }
        
    var cameraOptions = {
        quality: 100,
        destinationType: 0,
        sourceType: tpEnt,
        allowEdit: false,
        targetWidth: tWidth,
        targetHeight: tHeight,
        correctOrientation: true,
        saveToPhotoAlbum: true,
        direction: 0
    }
    if (MAXQTDIMG <= 6){
        switch (tpImg){
            case 'swipper':
                alertGifMessage(cameraOptions)
            break
            case 'bar':
                alertAddImgBar(cameraOptions)
            break
            case 'barUpdate':
                alertAddImgBarUpdate(cameraOptions)
            break
            case 'beer':
                alertAddBeer(cameraOptions)
            break
            case 'porcao':
                alertAddPorcao(cameraOptions)
            break
            case 'user':
                alertAddImgUser(cameraOptions)
            break
            case 'tap':
                alertAddImgTap(cameraOptions)
            break
        }
    } else {
        alert('Você já cadastrou a quantidade máxima de fotos permitida!')
    }
}

function alertGifMessage(cameraOptions){
    var box = '<div class="grey-800 align-center">'
    box += '    <p>Para ter a melhor foto, por gentileza gire seu dispositivo para a esquerda, o colocando na posição horizontal.</p>'
    box += '    <img src="img/rotate.gif" style="widows: 100px; height: 100px;">'
    box += '</div>'
    alert({
        title: 'Imagens para capa.',
        message: box,
        class: 'grey-800 radius',
        buttons:[
            {
                label: 'Ok',
                class: 'text-grey-50',
                onclick: function(){
                    closeAlert()
                    navigator.camera.getPicture(cameraSuccessPainel, cameraError, cameraOptions)
                }
            }
        ]
    })
}

function alertAddImgBar(cameraOptions){
var box = '<div class="grey-800 align-center">'
    box += '    <p>Escolha uma boa imagem para seu estabelecimento!</p>'
    box += '    <p>Pode ser uma logo ou uma imagem de apresentação. Esta irá aparecer na listagem de todos os bares !</p>'
    box += '    <p>Você poderá altera-la aqui sempre que quiser.</p>'
    box += '</div>'
    updateImgBar = true
    alert({
        title: 'Imagens para o Bar',
        message: box,
        class: 'grey-800 radius',
        buttons:[
            {
                label: 'Ok',
                class: 'text-grey-50',
                onclick: function(){
                    closeAlert()
                    navigator.camera.getPicture(cameraSuccessBar, cameraError, cameraOptions)
                }
            }
        ]
    })
}
    
function cameraSuccessBar(imageData){
    var image = document.getElementById('imgBar')
    image.src = "data:image/jpeg;base64," + imageData
    var imgBar = "data:image/jpeg;base64," + imageData
}

function alertAddImgBarUpdate(cameraOptions){
var box = '<div class="grey-800 align-center">'
    box += '    <p>Escolha uma boa imagem para seu estabelecimento!</p>'
    box += '    <p>Pode ser uma logo ou uma imagem de apresentação. Esta irá aparecer na listagem de todos os bares !</p>'
    box += '    <p>Você poderá altera-la aqui sempre que quiser.</p>'
    box += '</div>'
    updateImgBar = true
    alert({
        title: 'Imagens para o Bar',
        message: box,
        class: 'grey-800 radius',
        buttons:[
            {
                label: 'Ok',
                class: 'text-grey-50',
                onclick: function(){
                    closeAlert()
                    navigator.camera.getPicture(cameraSuccessBarUpdate, cameraError, cameraOptions)
                }
            }
        ]
    })
}

function cameraSuccessBarUpdate(imageData){
    var image = document.getElementById('imgDadosBar')
    image.src = "data:image/jpeg;base64," + imageData
    var imgDadosBar = "data:image/jpeg;base64," + imageData
}

function cameraSuccessPainel(imageData){
    var ImgBar = {}
    ImgBar.barName = COMPANY.nomeCompany    
    ImgBar.option = true
    ImgBar.swiperPhotos = {
        "photosCapa": [
            {
                "imgOrder": parseInt(MAXQTDIMG) + 1,
                "base64Photo": "data:image/jpeg;base64," + imageData,
            }
        ]
    }

    MAXQTDIMG = parseInt(MAXQTDIMG) + 1    

    

    window.addEventListener("orientationchange", function(){
        screen.orientation.lock('landscape-primary')

    })
    loading('Por favor aguarde, estou salvando a imagem do seu estabelecimento.')

    MobileUI.ajax.post(url + '/cadimgswipperbar').send(ImgBar).then(function (res){
        if(res.body.errorMessage) {
            closeLoading()
            alert(res.body.errorMessage)
        } else {
            closeLoading()
            MAXQTDIMG = res.body.data.swiperPhotos.length
            COMPANY = res.body.data
            IMGCAPAS = res.body.data.swiperPhotos
            setTimeout(() => {
                new Swiper('.swipper-gallery', {
                    pagination: '.swiper-pagination'
                });
            }, 1000)
        }
    }).catch(function (err){
        closeLoading()
        alert('Ops, tive um probleminha para salvar seu cadastro! Tente novamente por gentileza.')
    })
    window.addEventListener("orientationchange", function(){
        screen.orientation.lock('portrait')
    })
}

function cameraError(){
    alert(message)
}