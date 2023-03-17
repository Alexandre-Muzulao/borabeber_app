function dbUpdate(id){
    var sql = 'select * from users where id=?'

    db.transaction(function (txn) {
        txn.executeSql(
            sql,
            [id],
            function (tx, res) {
                document.getElementById('nome').value = res.rows.item(0).user
                document.getElementById('typeAccount').value = res.rows.item(0).typeAccount
                document.getElementById('idFacebook').value = res.rows.item(0).idFacebook
                document.getElementById('passwrd').value = res.rows.item(0).passwrd
                idEditando = res.rows.item(0).id
            },
            function (tx, err) {
                console.log(err)
            }
        )
    })
}