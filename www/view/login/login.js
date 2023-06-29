var tp = 'dev'
var url = ''
var loginData = ''

switch (tp) {
    case 'dev':
        url = 'http://localhost:3000/production'
        loginData = {
          email: 'Bar do MuzuMuzu 6610',
          senha: '1234',
          tpLogin: 'manual',
          idFacebook: ''
      };
    break;
    case 'hml':
        var url = 'https://1i44ejgddg.execute-api.us-east-1.amazonaws.com/dev'
    break;
    case 'prod':
      var url = 'https://g34czjej1b.execute-api.us-east-1.amazonaws.com/production'
      loginData = {
        email: document.getElementById('loginEmailName').value,
        senha: document.getElementById('loginPswrd').value,
        tpLogin: 'manual',
        idFacebook: ''
    };
    break;
}

function openPageTest(){
  openPage('./view/adm/company/checkout/checkout')
}

function logar(){
  try {
    getUserCompany(loginData)
  } catch (error) {
    console.log('error: ', error)
  }
}

function getUserCompany(loginData){
  loadingElement('btnLogin', 'Efetuando Login, aguarde!')    
  MobileUI.ajax.post(url + '/login')
  .send(loginData)
  .then(function(res){
      // Tratar erros com códigos
      if(res.body.message == "Os dados do login não conferem, verifique e tente novamente." 
      || res.body.message == 'Usuário não cadastrado'){
          resetLoginData()
          alert(res.body.message)
      } else {
          switch (res.body.data.typeAccount){
              case 'company':
                  IDCOMPANY = res.body.data._id
                  loginCompany(loginData)
              break
              case 'user':
                IDCOMPANY = res.body.data._id
                loginUser(loginData)
              break
              case 'deliverymen':
                  
              break
          }
      }
  })
}

function loginCompany(company){
    if (validatorEmpty(company)){
        MobileUI.ajax.get(url + '/getcompanydata')
        .query(`_id=${IDCOMPANY}&consultCompanyTypeParam=companyData`)
        .send()
        .then(function (res){
            COMPANY = res.body.data
            // for(i=0; i<=6; i++){
            //     document.getElementById('weekDay' + DADOSADM.callendar.weekDays[i].day + 'OpenDadosBar').innerHTML = DADOSADM.callendar.weekDays[i].open
            //     document.getElementById('weekDay' + DADOSADM.callendar.weekDays[i].day + 'CloseDadosBar').innerHTML = DADOSADM.callendar.weekDays[i].close
            // }
            openPage('./view/adm/pedidos/admRequests',function(){
                // getRequests()
            })
        })
    }
}

function loginUser(loginData){
    if (validatorEmpty(loginData)){
        loadingElement('btnLogin', 'Efetuando Login, aguarde!')
        MobileUI.ajax.post(url + '/login')
        .send(loginData)
        .then(function(res){
            if(res.body.message == "Os dados do login não conferem, verifique e tente novamente." 
            || res.body.message == 'Usuário não cadastrado'){
                resetLoginData()
                alert(res.body.message)
            } else {                
                if (document.getElementById('keepLoged').checked){
                    loginPersistence(loginData)
                }
                getItens()
                openPage('./view/user/main/main', function(){
                    deliveryTrack()
                    USER = res.body.data
                    setTimeout(function(){
                        openTabs('tabCervejas')
                    },300)
            
                    setTimeout(function(){
                        setIdHidden('customImgAlert')
                    },1000)
                })
            }
        })
    }
}

function loginWithoutData(){
    openPage('./view/user/main/main', function(){
        showLoader('alertBeer')
        getItens()
        USER = {
            cellUser: "",
            emailUser: "",
            imgUser: "./img/icons/drunk.png",
            nomeUser: "Bebedor(a)",
            typeAccount: "user",
            _id: ""
        }
        setTimeout(function(){
            openTabs('tabCervejas')
        },100)

        // setTimeout(function(){
        //     setIdHidden('customImgAlert')
        // },1000)
    })
}

function resetLoginData(){
    // var elem1 = document.getElementById('loginEmailName')
    // elem1.value = ''

    document.getElementById('labelLoginName').blur()
    
    var elem2 = document.getElementById('loginPswrd')
    elem2.value = ''

    document.getElementById('labelLoginSenha').blur()    

    closeLoading('btnLogin')
}

function validatorEmpty(dados) {
    if (dados.email == '' || dados.senha == '') {
        // alert('Informe <b>usuário</b> e/ou <b>senha</b>!');
        toastCender('Informe um <b>usuário</b> e uma <b>senha</b>!')
        return false;
    } else {
        return true;
    }
}

function seePasword() {
    var x = document.getElementById("loginPswrd");
    var y = document.getElementById("seePswButton")
    y.classList.toggle("ion-eye-disabled")
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

function faceBookLogin(){
    // socialmock('facebook', function(res){
    //     var loginData = {
    //         email: res.body.data.email.trim(),
    //         senha: res.body.data.id,
    //         tpLogin: 'facebook',
    //         idFacebook: res.body.data.id
    //     };
    //     loginUser(loginData)
    // })
    faceGetData()
}