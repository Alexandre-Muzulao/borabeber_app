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
var USER = {}
var MODULES = {}
var TPPRODS = []
var COMPANY, COMPANYCACH = []
var IMGCAPAS = []
var ALLWHISKY = []
var BEERS, WHISKY, VODKA, CONVENIENCIA, TAP = []
var ADMBEERS, ADMWHISKY, ADMVODKA, ADMCARNES = []
var ALLBEER, ALLWHISKY, ALLVODKA, ALLCARNES = []
var DADOSADM = []
var DEVICES = []
var companyModules = []
var DEFAULTPRINT = {}
var qtdDistance = 0
var DistancePricesSettings = []
var DistanceBaseSettings = {}
var htmlDistance = ''
var beers, carnes, whiskys, vodkas, vinhos, porcoes, espetos, combustiveis, semalcool = []
var isLoged = false
var KEEPLOGIN 
var PAGENAME = {
    name : ''
}
var MAXQTDIMG = 0