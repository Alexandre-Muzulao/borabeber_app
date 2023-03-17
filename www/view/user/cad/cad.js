function openNewCadUser(){
    if (USER._id == ""){
        openPage('./view/user/cad/guestByPed', function(){
            $("#cellGuest").mask("(99) 9 9999 - 9999")
            openPage('createUser', function() {
                })
        })
    } else {
        confirmSendPedido()
    }
}

function openCadUser(){
    openPage('./view/user/cad/cad', function(){
        $("#cellUser").mask("(99) 9 9999 - 9999")
        
        openPage('createUser', function() {
               MobileUI.formByObject('formCreateUser', {
                   nomeUser : 'Ale Muzulão',
                   emailUser : 'alexandre_muzulao@hotmail.com',
                   tellUser : '44997451735',
                   passwordUser : '123',
                   passwordConfirmUser : '123'
               })            
        })   

        // setTimeout(function(){
        //     $("#cellUser").mask("(99) 9 9999 - 9999")
        // },300)
    })
}

function cadUser(){
    var dadosUser = {}
    dadosUser.typeAccount = 'user'
    dadosUser.nomeUser = document.getElementById('nomeUser').value
    dadosUser.emailUser = document.getElementById('emailUser').value
    dadosUser.cellUser = document.getElementById('cellUser').value
    dadosUser.passwordUser = document.getElementById('passwordUser').value
    dadosUser.passwordConfirmUser = document.getElementById('passwordConfirmUser').value
    dadosUser.imgUser = document.getElementById('imgUser').getAttribute('src')
    dadosUser.createdAt = moment().format(),
    // dadosUser.idFacebook = idFacebook
    dadosUser.isConected = true
    // dadosUser.option = true

    var values = []
    values.push(dadosUser.nomeUser, dadosUser.typeAccount, dadosUser.isConected, dadosUser.idFacebook, dadosUser.passwordUser)
    // loginPersistence(values)
    
    loading('Por favor aguarde, estou salvando seus dados de bebedor(a)!')
    MobileUI.ajax.post(url + '/register').send(dadosUser).then(function (res){
        if(res.body.message !== 'Sucesso ao cadastrar') {
            closeLoading()
            console.log(res.body.errorMessage)
            alert('Falha ao realizar o cadastro')
        } else {
            // loginPersistence('users', values)
            USER = res.body.data
            openPage('./view/user/main/main', function(){
                closeLoading()
                setTimeout(function(){
                    openTabs('tabCervejas')
                },300)
    
                setTimeout(function(){
                    setIdHidden('customImgAlert')
                },1000)
            })
        }
    }).catch(function (err){
        closeLoading()
        console.log(err)
        alert('Falha ao realizar o cadastro, tente novamente.')
    })
}
