function productsOpenPage(){
  showLoader("alertBoraBeberLoader", 'Aguarde por gentileza, <br> trazendo os dados da sua empresa!')
  getCompanyData('products')
}

function getCompanyData(consultCompanyType){
    closeMenu('admMenu')
    MobileUI.ajax.get(url + '/getcompanydata')
    .query(`_id=${IDCOMPANY}&consultCompanyTypeParam=${consultCompanyType}`)
    .send()
    .then(function (res){
        DistanceBaseSettings = res.body.data.deliverySettings
        TPPRODS = res.body.data.tpProds

        ADMCARNES = res.body.data.dadosCarnes
        ADMBEERS = res.body.data.dadosBeer
        console.log(res.body.data.dadosWhiskys)
        ADMWHISKY = res.body.data.dadosWhiskys
        console.log(ADMWHISKY)
        VODKA = res.body.data.dadosvodkas
        TAP = res.body.data.tap
        parseAdmCarnes(ADMCARNES)
        parseCervejaAdm(ADMBEERS)
        parseAdmWhisky(ADMWHISKY)
        parseAdmVodka(VODKA)

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
