function dbCleanTable(tableName){
    // db = sqlitePlugin.openDatabase({name: 'mydb.db', location: 'default'});
    var sql = 'drop table if exists ' + tableName+ ''
    DB.transaction(function (txn) {
        txn.executeSql(
            sql,
            [],
            function (tx, res, err) {
                // console.log('Sucesso ao Limpar a tabela ' + tableName, res, 'Erro ao Limpar a tabela ' + tableName, err)
            }
        )
    })
}
