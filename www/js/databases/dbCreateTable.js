function createTable(tbname){
    try {
                
        var sql = 'CREATE TABLE IF NOT EXISTS ' + tbname + ' ('
                sql+= ' id INTEGER primary key,'
                sql+= ' user TEXT,'
                sql+= ' isLoged BOOLEAN,'
                sql+= ' idFacebook TEXT,'
                sql+= ' passwrd TEXT'
                sql+= ')'
        DB.transaction(function (txn) {
            txn.executeSql(sql)
        }, 
        function (tx, res, err) {
            // console.log(tx, res, err)
        })
    } catch (error) {
        console.log(error)
    }
}