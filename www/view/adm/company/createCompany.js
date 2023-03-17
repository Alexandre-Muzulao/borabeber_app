function createCompany() {
    openPage('./view/adm/company/createCompany', function() {        
        MobileUI.formByObject('formCreateBar', {
            docCompany : '38708579000114',
            nomeCompany : `Bar do MuzuMuzu ${Math.floor(Math.random() * 10000).toString()}`,
            emailCompany : 'ale.muzulao@gmail.com',
            tellCompany : '44991569743',
            userNameCompany : 'Alexandre Muzulão',
            passwordCompany : '1234',
            passwordConfirmCompany : '1234'
        })

        $("#tellCompany").mask("(99) 9 9999 - 9999")
        document.getElementById('dadosEndCadBar').style.display='none'
        document.getElementById('dadosEndBairroCadBar').style.display='none'
        setMaskCpfCNPJ('#docCompany')
        
    })
}

function cadCompany(){
    setPlanRecorrence()
    showLoader("alertBoraBeberLoader", 'Por favor aguarde, salvando os dados da sua empresa!')
        MobileUI.ajax.post(url + '/register').send(COMPANYCACH).then(function (res){
        if(res.body.errorMessage) {
            setIdHidden('customImgAlert')
            alert(res.body.errorMessage)
        } else {
            openPage('./view/adm/pedidos/admRequests',function(){
                setIdHidden('customImgAlert')
                getRequests(res.body.data)
            })
        }
    }).catch(function (err){
        console.log(err)
        setIdHidden('customImgAlert')
        alert('Ops, tive um probleminha para salvar seu cadastro! Tente novamente por gentileza.')
    })
}

function setCompanyCach(){
    var ts = new Date()
    var nameCompanyElement = document.getElementById('nomeCompany').value
    var dadosBar = {}
    dadosBar.typeAccount = 'company'
    dadosBar.cnpjCompany = document.getElementById('docCompany').value
    dadosBar.nomeCompany = nameCompanyElement
    dadosBar.emailCompany = document.getElementById('emailCompany').value
    // dadosBar.enderecoCompany = document.getElementById('enderecoCompany').value
    // dadosBar.nroCompany = document.getElementById('nroCompany').value
    // dadosBar.bairroCompany = document.getElementById('bairroCompany').value
    dadosBar.enderecoCompany = 'Avenida Carneiro Leão'
    dadosBar.nroCompany = '523'
    dadosBar.bairroCompany = 'Zona 01'
    dadosBar.tellCompany = document.getElementById('tellCompany').value
    dadosBar.tpEstabelecimento = document.getElementById('tpEstabelecimento').value
    dadosBar.latLongCompany = {
        "lat" : -23.419834,
        "lng" : -51.949011
    }
    dadosBar.cepCompany = "87014-010"
    dadosBar.cidadeCompany = "Maringá"
    dadosBar.estadoCompany = "Paraná"
    dadosBar.paisCompany = "Brasil"
    // dadosBar.latLongCompany = BARLOCATION.barLatLong
    // dadosBar.cepCompany = BARLOCATION.barCEP
    // dadosBar.cidadeCompany = BARLOCATION.barCidade
    // dadosBar.estadoCompany = BARLOCATION.barEstado
    // dadosBar.paisCompany = BARLOCATION.barPais
    dadosBar.dateCadCompany = moment(ts).format()
    dadosBar.xNomeCompany = ""    
    dadosBar.capacityCompany = document.getElementById('capacityCompany').value
    
    dadosBar.callendar = {
        "weekDays": [
            {
                "day": "Sunday",
                "open": document.getElementById('weekDayDomOpen').innerHTML,
                "close": document.getElementById('weekDayDomClose').innerHTML
            },
            {
                "day": "Monday",
                "open": document.getElementById('weekDaySegOpen').innerHTML,
                "close": document.getElementById('weekDaySegClose').innerHTML
            },
            {
                "day": "Tuesday",
                "open": document.getElementById('weekDayTerOpen').innerHTML,
                "close": document.getElementById('weekDayTerClose').innerHTML
            },
            {
                "day": "Wednesday",
                "open": document.getElementById('weekDayQuaOpen').innerHTML,
                "close": document.getElementById('weekDayQuaClose').innerHTML
            },
            {
                "day": "Thursday",
                "open": document.getElementById('weekDayQuiOpen').innerHTML,
                "close": document.getElementById('weekDayQuiClose').innerHTML
            },
            {
                "day": "Friday",
                "open": document.getElementById('weekDaySexOpen').innerHTML,
                "close": document.getElementById('weekDaySexClose').innerHTML
            },
            {
                "day": "Saturday",
                "open": document.getElementById('weekDaySabOpen').innerHTML,
                "close": document.getElementById('weekDaySabClose').innerHTML
            }
        ]
    }

    dadosBar.option = true
    dadosBar.capaImgName = nameCompanyElement + '/capa/' + nameCompanyElement + '_capa'
    dadosBar.imgCompany = document.getElementById('imgBar').getAttribute('src')
    dadosBar.isConected = true
    dadosBar.capacityCompany = document.getElementById('capacityCompany').value
    dadosBar.aceptReservCompany = document.getElementById('aceptReservCompany').checked

    dadosBar.tpProds = companyModules

    dadosBar.billings = {
        "recorrente" : 0.00,
        "semestral" : 0.00,
        "descSemestral" : 0.00,
        "anual" : 0.00,
        "descAnual" : 0.00
    }
    
    dadosBar.userNameCompany = document.getElementById('userNameCompany').value
    dadosBar.passwordCompany = document.getElementById('passwordCompany').value
    dadosBar.passwordConfirmCompany = document.getElementById('passwordConfirmCompany').value
    // if(dadosBar.latLongCompany == undefined){
    //     alert('É obrigatório completar o endereço com a Geolocalização. Verifique.', 'Ops...')
    // } else {
    var values = []
    values.push(dadosBar.nomeCompany, dadosBar.typeAccount, true, dadosBar.passwordCompany)
    
    dadosBar.dataCards = {
        "cardNumber" : "",
        "cardName" : "",
        "cardExpired" : "",
        "cardCVC" : ""
    }

    COMPANYCACH = dadosBar

}

function plansOpenPage(){
    if (validCreateCompanyData()){
        openPage('./view/adm/company/planTypes/planTypes')
    }
}