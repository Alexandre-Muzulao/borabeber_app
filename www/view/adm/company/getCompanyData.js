function productsOpenPage(){
  showLoader("alertBoraBeberLoader", 'Aguarde por gentileza, <br> trazendo os dados da sua empresa!')
  getCompanyData()
}

function getCompanyData(){
    closeMenu('admMenu')
    MobileUI.ajax.get(url + '/getcompanydata')
    .query('_id=' + IDCOMPANY + '')
    .send()
    .then(function (res){
        DistanceBaseSettings = res.body.data.deliverySettings
        TPPRODS = res.body.data.tpProds
        ADMBEERS = res.body.data.dadosBeer
        VODKA = res.body.data.vodkas
        WHISKY = res.body.data.whiskys
        TAP = res.body.data.tap
        parseAdmBeer(ADMBEERS)
        parseAdmVodka(VODKA)
        parseAdmWhisky(WHISKY)
        openPage('./view/adm/main/main', function(){
            setTimeout(function(){
                setViewtpProds(res.body.data.tpProds[0].subscription)
                document.getElementById(`btntab${res.body.data.tpProds[0].subscription}`).className += " active";
                document.getElementById(`tab${res.body.data.tpProds[0].subscription}`).className += " active";
            },300)
        })

        setIdHidden('customImgAlert')
    })
}
