
function dbInsertTable(colluns, values, qtd, callback){
    var sql = 'insert into impusers ('+ colluns +') values (' + qtd + ')'
    // if (idEditando >= 0){
    //     sql = 'update users set user=?, idFacebook=?, passwrd=? where id=' + idEditando
    // }
    DB.transaction(function (txn) {
        txn.executeSql(
            sql,
            values,
            function (tx, res, error) {
                callback('Dados inceridos: ', res, tx, 'Falha ao inserir dados: ' + error)
                dbGet(function(){
                    console.log(res)
                })
                // idEditando = -1
            }
        )
    })
}