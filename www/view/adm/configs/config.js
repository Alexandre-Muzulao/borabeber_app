function getConfig(){
    loading('Carregando Configurações')
    MobileUI.ajax.get(url + '/getcompanydata')
    .query('_id=' + IDCOMPANY + '')
    .send()
    .then(function (res){
        IMGCAPAS = res.body.data.swiperPhotos
        openPage('./view/adm/configs/config.html', function(){
            closeLoading()
            DADOSADM = res.body.data
            
            document.getElementById('nomeNewCompany').value = DADOSADM.nomeCompany
            document.getElementById('xNomeNewCompany').value = DADOSADM.xNomeCompany
            document.getElementById('cnpjNewCompany').value = DADOSADM.cnpjCompany
            document.getElementById('emailNewCompany').value = DADOSADM.emailCompany
            document.getElementById('enderecoCadBar').value = DADOSADM.enderecoCompany
            document.getElementById('numeroCadBar').value = DADOSADM.nroCompany
            document.getElementById('bairroCadBar').value = DADOSADM.bairroCompany
            document.getElementById('tellNewCompany').value = DADOSADM.tellCompany
            document.getElementById('userCompany').value = DADOSADM.userCompany

            for(i=0; i<=6; i++){
                document.getElementById('weekDay' + DADOSADM.callendar.weekDays[i].day + 'OpenDadosBar').innerHTML = DADOSADM.callendar.weekDays[i].open
                document.getElementById('weekDay' + DADOSADM.callendar.weekDays[i].day + 'CloseDadosBar').innerHTML = DADOSADM.callendar.weekDays[i].close
            }
        })

        setTimeout(() => {
            new Swiper('.swipper-gallery', {
                pagination: '.swiper-pagination'
            });
        }, 1000)

        setTimeout(function(){
            setIdHidden('customImgAlert')
        },1000)
    })
}

function updateDadosBar(){
    // console.log(`BARLOCATION: ${BARLOCATION}`)
    var dadosBar = {}
    dadosBar.idBar = USER._id

    // dadosBar.imgBarCompany = document.getElementById('imgDadosBar').src

    dadosBar.nomeNewCompany = document.getElementById('nomeNewCompany').value
    dadosBar.capaImgName = dadosBar.nomeNewCompany + '/capa/' + dadosBar.nomeNewCompany + '_capa'
    dadosBar.xNomeNewCompany = document.getElementById('xNomeNewCompany').value
    dadosBar.cnpjNewCompany = document.getElementById('cnpjNewCompany').value
    dadosBar.emailNewCompany = document.getElementById('emailNewCompany').value
    dadosBar.enderecoNewCompany = document.getElementById('enderecoCadBar').value
    dadosBar.numeroNewCompany = document.getElementById('numeroCadBar').value
    dadosBar.bairroNewCompany = document.getElementById('bairroCadBar').value
    // dadosBar.cidadeNewCompany = BARLOCATION.barCidade
    // dadosBar.estadoNewCompany = BARLOCATION.barEstado
    // dadosBar.paisNewCompany = BARLOCATION.barPais
    // dadosBar.cepNewCompany = BARLOCATION.barCep
    // dadosBar.latLongNewCompany = BARLOCATION.barLatLong
    dadosBar.tellNewCompany = document.getElementById('tellNewCompany').value

    dadosBar.callendarNew = {
        "weekDays": [
            {
                "day": "Sunday",
                "open": document.getElementById('weekDaySundayOpenDadosBar').innerHTML,
                "close": document.getElementById('weekDaySundayCloseDadosBar').innerHTML
            },
            {
                "day": "Monday",
                "open": document.getElementById('weekDayMondayOpenDadosBar').innerHTML,
                "close": document.getElementById('weekDayMondayCloseDadosBar').innerHTML
            },
            {
                "day": "Tuesday",
                "open": document.getElementById('weekDayTuesdayOpenDadosBar').innerHTML,
                "close": document.getElementById('weekDayTuesdayCloseDadosBar').innerHTML
            },
            {
                "day": "Wednesday",
                "open": document.getElementById('weekDayWednesdayOpenDadosBar').innerHTML,
                "close": document.getElementById('weekDayWednesdayCloseDadosBar').innerHTML
            },
            {
                "day": "Thursday",
                "open": document.getElementById('weekDayThursdayOpenDadosBar').innerHTML,
                "close": document.getElementById('weekDayThursdayCloseDadosBar').innerHTML
            },
            {
                "day": "Friday",
                "open": document.getElementById('weekDayFridayOpenDadosBar').innerHTML,
                "close": document.getElementById('weekDayFridayCloseDadosBar').innerHTML
            },
            {
                "day": "Saturday",
                "open": document.getElementById('weekDaySaturdayOpenDadosBar').innerHTML,
                "close": document.getElementById('weekDaySaturdayCloseDadosBar').innerHTML
            }
        ]
    }

    dadosBar.userNewCompany = document.getElementById('userCompany').value
    dadosBar.oldPassword = document.getElementById('passwordOldCompany').value
    dadosBar.newPassword = document.getElementById('passwordNewCompany').value
    dadosBar.oldPassword = 'imperio2020Beto'
    dadosBar.newPassword = 'imperio2020Beto'
    
    console.log(dadosBar.latLongNewCompany)

    dadosBar.latLongNewCompany = {
        "lat" : -23.3943778,
        "lng" : -51.9238558
    }

    if (dadosBar.latLongNewCompany == undefined){
        alert('É obrigatório completar o endereço com a Geolocalização. Verifique.', 'Ops...')
    } else {
        loading('Atalizando seus dados, espera só um pouco!')
        MobileUI.ajax.post(url + '/up').send(dadosBar).then(function (res){
            if(res.body.errorMessage) {
                closeLoading()
                alert(res.body.errorMessage)
            } else {
                closeLoading()
                alert('Top! Os dados foram alterados com sucesso!')
                MAXQTDIMG = res.body.data.swiperPhotos.length
                USER = res.body.data
                IMGCAPAS = res.body.data.swiperPhotos
                openPage('barAdmin', function(){
                    setTimeout(() => {
                        new Swiper('.swipper-gallery', {
                            pagination: '.swiper-pagination'
                        });
                    }, 1000)
                })
            }
        }).catch(function (err){
            closeLoading()
            alert('Eitcha!! Tive um probleminha para alterar seu cadastro! Poderia tentar novamente por gentileza ?')
            console.log(err)
        })
    }
}