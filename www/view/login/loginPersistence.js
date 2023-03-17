function loginPersistence(usuario){
    var values = []
    values.push(usuario.email,
        document.getElementById('keepLoged').checked, 
        '3213', usuario.senha)
    try{
        dbInsertTable(
            'user, isLoged, idFacebook, passwrd',
            values,
            '?,?,?,?', 
            function(res, error){
                // console.log(res, error)
            }
        )
    } catch (err){
        console.log('Persistence Err:', err)
    }
}
