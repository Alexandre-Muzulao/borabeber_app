// var tp = 'testU'
var tp = 'Prod'

switch (tp) {
    case 'testU':
        var url = 'http://localhost:3000'
        MobileUI.formByObject('contetInicial', {
            userEmailName: 'Versos e Prosas Bar e Petiscaria',
            userPassword: '123'
        })
    break;
    case 'Prod':
        var url = 'https://g34czjej1b.execute-api.us-east-1.amazonaws.com/production'
    break;
}

function login(){
    var dadosUser = {
        'user': $('#loginEmailName').val(),
        'pass': $('#loginPswrd').val()
    };

    // VALIDAR DADOS
    validatorEmpty(dadosUser);

    //VALIDA LOGIN
    //validatorLoginApi(dadosUser);

    switch (dadosUser.user) {
        case 'Usr':
            loading('Espera que a cachaça aparece!')
            openPage('./view/user/main/main')
            setTimeout(function(){
                closeLoading()
                openTabs('tabCervejas')
            },300)
        break;
        case 'Adm':
            openPage('./view/adm/admIndex/admIndex')
        break;
    }
}

function validatorEmpty(dados) {
    if (dados.user == '' || dados.pass == '') {
        alert('Campo de <b>usuário</b> ou <b>senha</b> vazios !');
        return false;
    }
}