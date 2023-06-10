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
    var company = {}
    company.typeAccount = 'company'
    company.cnpjCompany = document.getElementById('docCompany').value
    company.nomeCompany = nameCompanyElement
    company.emailCompany = document.getElementById('emailCompany').value
    // company.enderecoCompany = document.getElementById('enderecoCompany').value
    // company.nroCompany = document.getElementById('nroCompany').value
    // company.bairroCompany = document.getElementById('bairroCompany').value
    company.enderecoCompany = 'Avenida Carneiro Leão'
    company.nroCompany = '523'
    company.bairroCompany = 'Zona 01'
    company.tellCompany = document.getElementById('tellCompany').value
    company.tpEstabelecimento = document.getElementById('tpEstabelecimento').value
    company.latLongCompany = {
        "lat" : -23.419834,
        "lng" : -51.949011
    }
    company.cepCompany = "87014-010"
    company.cidadeCompany = "Maringá"
    company.estadoCompany = "Paraná"
    company.paisCompany = "Brasil"
    // company.latLongCompany = BARLOCATION.barLatLong
    // company.cepCompany = BARLOCATION.barCEP
    // company.cidadeCompany = BARLOCATION.barCidade
    // company.estadoCompany = BARLOCATION.barEstado
    // company.paisCompany = BARLOCATION.barPais
    company.dateCadCompany = moment(ts).format()
    company.xNomeCompany = ""    
    company.capacityCompany = document.getElementById('capacityCompany').value
    
    company.callendar = {
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

    company.option = true
    company.capaImgName = nameCompanyElement + '/capa/' + nameCompanyElement + '_capa'
    company.imgCompany = document.getElementById('imgBar').getAttribute('src')
    company.isConected = true
    company.capacityCompany = document.getElementById('capacityCompany').value
    company.aceptReservCompany = document.getElementById('aceptReservCompany').checked

    company.tpProds = companyModules

    company.billings = {
        "recorrente" : 0.00,
        "semestral" : 0.00,
        "descSemestral" : 0.00,
        "anual" : 0.00,
        "descAnual" : 0.00
    }

    company.deliverySettings = {}
    
    company.userNameCompany = document.getElementById('userNameCompany').value
    company.passwordCompany = document.getElementById('passwordCompany').value
    company.passwordConfirmCompany = document.getElementById('passwordConfirmCompany').value
    // if(company.latLongCompany == undefined){
    //     alert('É obrigatório completar o endereço com a Geolocalização. Verifique.', 'Ops...')
    // } else {
    var values = []
    values.push(company.nomeCompany, company.typeAccount, true, company.passwordCompany)
    
    company.dataCards = {
        "cardNumber" : "",
        "cardName" : "",
        "cardExpired" : "",
        "cardCVC" : ""
    }

    COMPANYCACH = company

}

function plansOpenPage(){
    if (validCreateCompanyData()){
        openPage('./view/adm/company/planTypes/planTypes')
    }
}