function setIdVisible(id){
    var element = document.getElementById(id).style
    element.visibility = 'visible'
    element.display = 'block'
}

function setIdHidden(id){
    var element = document.getElementById(id).style
    element.visibility = 'hidden'
    element.display = 'none'
}

function toastCenter(msg){
    openToast({
        message: msg,
        position: 'center',
        class: 'full text-big text-strong black-opacity-70 text-white radius',
    })
}

function toastBottom(msg){
    openToast({
        message: msg,
        position: 'bottom',
        class: 'full text-big text-strong black-opacity-70 text-white radius',
    })
}

text_truncate = function(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };


  function setMaskCpfCNPJ(idCampo){
    $(idCampo).keydown(function(){
        try {
            $(idCampo).unmask();
        } catch (e) {}
    
        var tamanho = $(idCampo).val().length;
        if(tamanho < 11){
            $(idCampo).mask("999.999.999-99");
        } else if(tamanho >= 11){
            $(idCampo).mask("99.999.999/9999-99");
        }   
        // ajustando foco
        var elem = this;
        
        setTimeout(function(){
            // mudo a posição do seletor
            elem.selectionStart = elem.selectionEnd = 10000;
        }, 0);
        // reaplico o valor para mudar o foco
        var currentValue = $(this).val();
        $(this).val('');
        $(this).val(currentValue);
    });
}