function dbGet(callback){
    var sql = 'select * from impusers order by id desc'

    DB.transaction(function (txn) {
        txn.executeSql(
            sql,
            [],
            function (tx, res, error) {
                callback(res.rows.item(0), 'Erro ao Listar: ' + error, ' tx: ' + tx)
            }
        )
    })
}