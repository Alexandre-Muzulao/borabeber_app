function validCreateCompanyData(){
    var campoObrigatorio = ""
    var validCreateCompany = true
    if (document.getElementById('docCompany').value == ""){
        campoObrigatorio = "CPF ou CNPJ "
        validCreateCompany = false
    }
    if (document.getElementById('nomeCompany').value == ""){
        campoObrigatorio += "Nome do seu estabelecimento "
        validCreateCompany = false
    }
    if (document.getElementById('emailCompany').value == ""){
        campoObrigatorio += "E-mail do seu estabelecimento "
        validCreateCompany = false
    }
    // if (document.getElementById('localizacao').value == ""){
    //     campoObrigatorio = "CPF ou CNPJ "
    // validCreateCompany = false
    // }
    if (document.getElementById('tpEstabelecimento').value == ""){
        campoObrigatorio = "CPF ou CNPJ"
    validCreateCompany = false
    }
    if (document.getElementById('userNameCompany').value == ""){
        campoObrigatorio += "Nome do Usuário "
        validCreateCompany = false
    }
    if (document.getElementById('passwordCompany').value == ""){
        campoObrigatorio += "Senha de acesso "
        validCreateCompany = false
    }
    if (document.getElementById('passwordConfirmCompany').value == ""){
        campoObrigatorio += "Confirmação da senha de acesso "
        validCreateCompany = false
    }
    if (validCreateCompany == false){
        alert(`Campos obrigatórios não preenchidos: ${campoObrigatorio}`)
    }

    if (validCreateCompany) setCompanyCach();

    return validCreateCompany
}
