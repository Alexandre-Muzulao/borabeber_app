var msgError = ''

function validaLocalEntrega(cep, nro){
    var status = true
    if (nro === ''){
        msgError = 'Número é obrigatório'
        status = false
    }
    if (cep === '' && nro === ''){
        msgError = 'Cep e Número são obrigatórios!'
        status = false
    }
    return status
}
