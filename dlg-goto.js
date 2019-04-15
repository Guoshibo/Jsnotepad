var $dlgGoto = (function() {
    var DOM = ''
          + '<div class="notepad-dlg-goto">'
            + '<div class="dialogbox">'
              + '<div class="titlebar">'
                + '<p class="title">转到指定行</p>'
                + '<span class="btn-close">✖</span>'
              + '</div>'
              + '<div class="main">'
                + '<label for="">行号(L):</label><br>'
                + '<input class="line-num" type="text" autofocus><br>'
                + '<input class="btn-goto" type="button" value="转到">'
                + '<input class="btn-cancel" type="button" value="取消">'
              + '</div>'
            + '</div>'
          + '</div>';

  var $dlg = $(DOM),
      $btnClose = $dlg.find('.btn-close'),
      $btnCancel = $dlg.find('.btn-cancel'),
      $btnGoto = $dlg.find('.btn-goto'),
      $linenum = $dlg.find('.line-num');
  
  var cfg = {
    lineNum: 1,
    totalLine: 1,
    gotoHandler: null
  };

  function validateLineNum(){
    var n = Number($linenum.val());
    if(n === 0 || n > cfg.totalLine) {
      alert('行数超过了总行数');  
      $linenum.select();
      return false;                      
    } else {
      console.log(Number($linenum.val()))
    }
  }

  function show() {
    $.extend(cfg);
    $('body').append($dlg);
    $dlg.find('.dialogbox').draggable({handle: $dlg.find('.titlebar')});
    $btnClose.click(function() { $dlg.remove();  });
    $btnCancel.click(function() { $dlg.remove();  });     
    $btnGoto.click(function(){
      if(!validateLineNum()) 
      $dlg.remove();
    });
  }
    return {show: show};
})();
