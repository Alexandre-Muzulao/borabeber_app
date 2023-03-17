function dbDelete(id){
    var sql = 'delete from users where id=?'

    db.transaction(function (txn) {
        txn.executeSql(
            sql,
            [id],
            function (tx, res) {
                // console.log(res)
                listar()
            },
            function (tx, err) {
                // console.log(err)
            }
        )
    })
}