function print(){
    if(DEFAULTPRINT.name == 'EXBOM IMP-TMP58ABT'){
        printText()
    } else {
        printElem()
    }
}

function printText(){
    // var print  = '          Império Beer' + '\r\n'
    //     print += '          Conveniência' + '\r\n'
    var print  = ''
        print += '      Pedido Nº 000' + PEDIDODETAIL.pedido.nro + ' para ' + '\r\n' 
        print += '        ' + PEDIDODETAIL.user.name + '\r\n'
        print += ' Data e Hora: 21/08/2020' + PEDIDODETAIL.pedido.createdAt + '\r\n'
        print += '============ Itens =============' + '\r\n'
        for (i in PEDIDODETAIL.itens){
            print += text_truncate(PEDIDODETAIL.itens[i].titulo, 26) + ' ' + PEDIDODETAIL.itens[i].medida + '\r\n'
            if (PEDIDODETAIL.itens[i].qtd ==  1){
                print += PEDIDODETAIL.itens[i].qtd + ' Unidade' + '               R$ ' + PEDIDODETAIL.itens[i].precoInt + ',' + PEDIDODETAIL.itens[i].precoCent + '\r\n'
            } else {
                print += PEDIDODETAIL.itens[i].qtd + ' Unidades' + '             R$ ' + PEDIDODETAIL.itens[i].precoInt + ',' + PEDIDODETAIL.itens[i].precoCent + '\r\n'
            }
        }
        print += '========== Pagamento ===========' + '\r\n'
        print += 'Sub Total              R$ ' + PEDIDODETAIL.pagamento.payValueSubTot + '\r\n'
        print += 'Taxa de Entrega        R$ ' + PEDIDODETAIL.pagamento.payDeliveryTaxi + '\r\n'
        print += 'Forma de Pagamento:    ' + PEDIDODETAIL.pagamento.paySelect + '\r\n'
        print += 'Total                  R$ ' + PEDIDODETAIL.pagamento.payValueTot + '\r\n'
        print += '=========== Entrega ============' + '\r\n'
        print += PEDIDODETAIL.entrega.logradouro +', nº '+ PEDIDODETAIL.entrega.nro  + '\r\n'
        print += 'Bairro: ' + PEDIDODETAIL.entrega.bairro +' - CEP: '+ PEDIDODETAIL.entrega.cep + '\r\n'
        print += 'Complemento: ' + PEDIDODETAIL.entrega.complemento + '\r\n'
        print += 'Ponto de Referência: ' + PEDIDODETAIL.entrega.referencia + '\r\n'
        print += '========= Observações ==========' + '\r\n'
        print += ''  + '\r\n'
        print += '================================'  + '\r\n' + '\r\n'
        console.log(print)
        toastCender('Aguarde, imprimindo Cupom...')

        bluetoothSerial.write(
            print,
            showError,
            showReturn,
        );
}

function showError(error) {
    console.log(error);
}

function showReturn(Success) {
    console.log(Success)
}

function printElem()
{
    var divPrint = ''
    divPrint += ' <!DOCTYPE html>'
    divPrint += ' <html lang="en">'
    divPrint += ' <head>'
    divPrint += '     <meta charset="UTF-8">'
    divPrint += '     <meta name="viewport" content="width=device-width, initial-scale=1.0">'
    divPrint += '     <title>Império Beer</title>'
    divPrint += '     <style>'
    divPrint += '         /* table, th, td {'
    divPrint += '         width:100%;'
    divPrint += '         } */'
    divPrint += '         td {'
    divPrint += '             width: 30px;'
    divPrint += '         }'
    divPrint += '         *{'
    divPrint += '             background:transparent !important;'
    divPrint += '             color:#000 !important;'
    divPrint += '             text-shadow:none !important;'
    divPrint += '             /* filter:none !important; */'
    divPrint += '             -ms-filter:none !important;'
    divPrint += '         }'
    divPrint += ' '
    divPrint += '         body {'
    divPrint += '             margin:0;'
    divPrint += '             padding:0;'
    divPrint += '             line-height: 1.4em;'
    divPrint += '         }'
    divPrint += '         @page {'
    divPrint += '             margin: 0.0cm;'
    divPrint += '         }'
    divPrint += '     </style>'
    divPrint += ' </head>'
    divPrint += ' <body>'
    divPrint += '     <table style="width:100%;">'
    divPrint += '         <tr>'
    divPrint += '             <img src="../../../img/logo.png" style="max-width: 9em; margin-left: 2em; filter: brightness(0)">'
    divPrint += '         </tr>'
    divPrint += '         <tr>'
    divPrint += '             <th>Pedido para <strong>' + PEDIDODETAIL.user.name + '</strong></th>'
    divPrint += '             <tr><td><strong>Nº: ' + PEDIDODETAIL.pedido.nro + '</strong></td></tr>'
    divPrint += '             <tr><td>Data e Hora: <strong>' + PEDIDODETAIL.pedido.createdAt + '</strong></td><td><strong>' + PEDIDODETAIL.pedido.createdAt + '</strong></td></tr>'
    divPrint += '         </tr>'
    divPrint += '         <tr>'
    divPrint += '             <th>Itens</th>'
    divPrint += '         </tr>'
    for (i in PEDIDODETAIL.itens){
        divPrint += '         <tr>'
        divPrint += '             <td>' + PEDIDODETAIL.itens[i].titulo + '</td>'
        divPrint += '             <td>' + PEDIDODETAIL.itens[i].medida + '</td>'
        divPrint += '             <tr>'
        divPrint += '                 <td><strong>' + PEDIDODETAIL.itens[i].qtd + '</strong> Unidades</td>'
        divPrint += '                 <td>R$ <strong>' + PEDIDODETAIL.itens[i].precoInt + ',' + PEDIDODETAIL.itens[i].precoCent + '</strong></td>'
        divPrint += '             </tr>'
        divPrint += '         </tr>'
    }
    divPrint += '    <tr>'
    divPrint += '        <th>Pagamento</th>'
    divPrint += '        <tr><td><strong>Sub Total</strong></td><td>R$ ' + PEDIDODETAIL.pagamento.payValueSubTot + '</td></tr>'
    divPrint += '        <tr><td>Taxa de Entrega</td><td>R$ ' + PEDIDODETAIL.pagamento.payDeliveryTaxi + '</td></tr>'
    divPrint += '        <tr><td>Forma de Pagamento:</td><td>' + PEDIDODETAIL.pagamento.paySelect + '</td></tr>'
    divPrint += '        <tr><td><strong>Total</strong></td><td><strong>R$ ' + PEDIDODETAIL.pagamento.payValueTot + '</strong></td></tr>'
    divPrint += '    </tr>'

    divPrint += '    <tr>'
    divPrint += '        <th>Endereço de Entrega</th>'
    divPrint += '        <tr><td>'+ PEDIDODETAIL.entrega.logradouro +', nº '+ PEDIDODETAIL.entrega.nro +'</td></tr>'
    divPrint += '        <tr><td>Bairro:'+ PEDIDODETAIL.entrega.bairro +' - CEP: '+ PEDIDODETAIL.entrega.cep +'</td></tr>'
    divPrint += '        <tr><td>Complemento: '+ PEDIDODETAIL.entrega.complemento +'</td></tr>'
    divPrint += '        <tr><td>Ponto de Referência: '+ PEDIDODETAIL.entrega.referencia +'</td></tr>'
    divPrint += '    </tr>'
    divPrint += '         <table>'
    divPrint += '             <th>Observações: Deixa o crakudo em casa!</th>'
    divPrint += '         </table>'
    divPrint += '     </table>    '
    divPrint += ' </body>'
    divPrint += ' </html>'

    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    // mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    // mywindow.document.write('</head><body >');
    // mywindow.document.write('<h1>' + document.title  + '</h1>');
    // mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write(divPrint);
    // mywindow.document.write('</body></html>');

    // mywindow.document.close(); // necessary for IE >= 10
    // mywindow.focus(); // necessary for IE >= 10*/
    mywindow.print();  


    // var run = new ActiveX.Object('WSCRIPT.Shell').Run("commands to run");
    // var objShell = new ActiveX.Object("shell.application");
    // objShell.ShellExecute("cmd.exe", 'RunDLL32.EXE printui.dll,PrintUIEntry /y /n "MP-4200 TH"', "C:\\WINDOWS\\system32", "open", 1);
    
    // mywindow.close();

    return true;
}