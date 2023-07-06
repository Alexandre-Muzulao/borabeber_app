/* Global Vars */
var S3URLIMAGES = 'https://borabeber-production-serverlessdeploymentbucket-1r44sesmo61it.s3.amazonaws.com/product_group_images'
var URLIMAGEBEERS = `${S3URLIMAGES}/cervejas/`
var URLIMAGECARNES = `${S3URLIMAGES}/carnes/`
var URLIMAGEVODKA = `${S3URLIMAGES}/vodkas/`
var URLIMAGEWHISKY = `${S3URLIMAGES}/whiskys/`
var URLIMAGEVINHO = `${S3URLIMAGES}/vinhos/`
var URLIMAGEESPETO = `${S3URLIMAGES}/espetos/`
var URLIMAGEPORCAO = `${S3URLIMAGES}/porcoes/`
var URLIMAGESEMALCOOL = `${S3URLIMAGES}/semalcool/`
var URLIMAGECOMBUSTIVEL = `${S3URLIMAGES}/combustiveis/`
var URLIMAGETAP = `${S3URLIMAGES}/taps/`
var URLIMAGECERVEJARIA = `${S3URLIMAGES}/cervejarias/`
var IDCOMPANY = ""
var USER = {}, MODULES = {}
var TPPRODS = [], COMPANY = [], COMPANYCACH = [], IMGCAPAS = [], DADOSADM = []
var BEERS = [], WHISKY = [], VODKA = [], CONVENIENCIA = [], TAP = []
var ADMBEERS = [], ADMWHISKY = [], ADMVODKA = [], ADMCARNES = []
var ALLBEER = [], ALLWHISKY = [], ALLVODKAS = [], ALLCARNES = []
var beers = [], carnes = [], whiskys = [], vodkas = [], vinhos = [], porcoes = [], espetos = [], combustiveis = [], semalcool = []
var DEVICES = []
var companyModules = []
var DEFAULTPRINT = {}
var qtdDistance = 0
var DistancePricesSettings = []
var DistanceBaseSettings = {}
var htmlDistance = ''
var isLoged = false
var KEEPLOGIN 
var PAGENAME = {
    name : ''
}
var MAXQTDIMG = 0

window.addEventListener("orientationchange", function(){
    screen.orientation.lock('portrait')
})


document.addEventListener("deviceready", onDeviceReady, false)
var DB
function onDeviceReady(){
    // DB = sqlitePlugin.openDatabase({name: 'borabeber.db', location: 'default'})
    // createTable('impusers')
    // dbGet(function(res){
    //     if(res !== undefined){
    //         if(res.isLoged == 'true'){
    //             var usuario = {
    //                 email: res.user,
    //                 senha: res.passwrd,
    //                 tpLogin: 'manual',
    //                 idFacebook: res.idFacebook
    //             };
    //             loginUser(usuario)
    //         }
    //     }
    // })
    // dbCleanTable('impusers')
    // getItens()
    // setInterval(function(){
    //     getRequests()
    // },10000)
}

function getItens(){
    MobileUI.ajax.get(url + '/conscompany')
        .query('id=' + IDCOMPANY + '&list=listar')
        .send()
        .then(function (res){
            COMPANY = res.body.data
            BEERS = res.body.data.dadosBeer
            VODKA = res.body.data.vodkas
            WHISKY = res.body.data.whiskys
            CHURRAS = res.body.data.churras
            DistanceBaseSettings = res.body.data.deliverySettings
            parseBeer(BEERS)
            parseVodka(VODKA)
            parseWhisky(WHISKY)
            parseConveniencia(CONVENIENCIA)
        })
}

if (isLoged){
    // openPage('./view/user/main/main.html')
    openPage('./view/adm/pedidos/admRequests',function(){
        getRequests()
    })
    // openPage('./view/user/entrega/acompanhar.html', function(){
    //     showPedidoStatus('entregue')
    // })
} else {
    
    // openPage('./view/adm/company/companyCheck/companyCheck', function(){        
    // })
    openPage('./view/login/login.html', function(){
        // MobileUI.formByObject('contentLogin', {
        //     loginEmailName: 'Usr',
        //     loginPswrd: 'A24SD4CX'
        // })
    })
}

function cleanPositionName(item){
    //Pegar um array e remover as palavras Par e Impar
}

function exitApp(){
    // dbCleanTable('impusers')
    setTimeout(() => {
        navigator.app.exitApp();
    }, 300);
}
