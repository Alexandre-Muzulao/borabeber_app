function validCheckoutData(){
    var campoObrigatorio = ""
    var validCreateCompany = true
    if (document.getElementById('companyFrontCardNumber').value == ""){
        campoObrigatorio = "Número do cartão. "
        validCreateCompany = false
    }
    if (document.getElementById('companyImgCardValid').value == ""){
        campoObrigatorio += "Data de expiração do cartão.  "
        validCreateCompany = false
    }
    if (document.getElementById('companyFrontCardCvC').value == ""){
        campoObrigatorio += "Código CVC. "
        validCreateCompany = false
    }
    if (document.getElementById('companyFrontCardName').value == ""){
        campoObrigatorio += "Nome do Titular. "
        validCreateCompany = false
    }
    if (document.getElementById('companyFrontCardDoc').value == ""){
        campoObrigatorio += "CPF ou CNPJ do Titular "
        validCreateCompany = false
    }
    if (validCreateCompany == false){
        alert(`Campos obrigatórios não preenchidos: ${campoObrigatorio}`)
    }
    return validCreateCompany
}
