function getPrintConfig(){
    openPage('./view/adm/configs/printConfig.html', function (){
        setIdHidden('devicesList')
        setIdHidden('localPrintName')
        document.querySelector('select').addEventListener('change', function(){
            console.log(this.value)
            conectDevice(searchDevice(this.value), this.value)
        });
    })
}

function getDevices(){
    setIdVisible('devicesList')
    bluetoothSerial.list(
        function(results) {
            DEVICES = results
            console.log(JSON.stringify(results));
        },
        function(error) {
           console.log(JSON.stringify(error));
        }
    );
}

function conectDevice(mac, name){
    loading('Conectando à Impressora...')
    bluetoothSerial.connect(
        mac,  // device to connect to
        openPort(name),    // start listening if you succeed
        connectError    // show the error if you fail
    );
}

function openPort(name){
    closeLoading()
    toastCender('Conectado a impressora ' + name)
    bluetoothSerial.subscribe('\n', function (data) {
        app.clear();
        app.display(data);
    });
}

function connectError(err){
    alert('Erro ao conectar com impressora: ' + err)
}

function searchDevice(name){
    for (i in DEVICES){
        if (DEVICES[i].name == name){
            DEFAULTPRINT = DEVICES[i]
            return DEVICES[i].address
        }
    }
}

function updatePrintSettings(){
    var dadosBar = {}
    dadosBar.idBar = USER._id
    dadosBar.printSettings = DEFAULTPRINT
        
    loading('Salvando sua impressora...')
    MobileUI.ajax.post(url + '/updatedadosbar').send(dadosBar).then(function (res){
        if(res.body.errorMessage) {
            closeLoading()
            alert(res.body.errorMessage)
        } else {
            closeLoading()

            toastCender('Top! Sua impressora padrão ' + DEFAULTPRINT.name + ' foi salva com sucesso!')
            console.log(res.body.data)

            // openPage('barAdmin', function(){

            // })
        }
    }).catch(function (err){
        closeLoading()
        alert('Eitcha!! Tive um probleminha para alterar seu cadastro! Poderia tentar novamente por gentileza ?')
        console.log(err)
    })
}