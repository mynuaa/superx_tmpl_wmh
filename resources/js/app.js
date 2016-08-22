(function($) {
  'use strict';

  $(function() {
    var $fullText = $('.admin-fullText');
    $('#admin-fullscreen').on('click', function() {
      $.AMUI.fullscreen.toggle();
    });

    $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
      $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
    });
  });
})(jQuery);

function download_hide(){
 document.getElementById("foot_1").style.display="none";
}

function userAgent(){
  // detective useragent
  var UA = navigator.userAgent;
  var isApp = (/my_app/i.test(UA));
  var isIOS = (/iphone|ipad|ipod/i.test(UA));
  var isAndroid = (/android/i.test(UA));
  if(isIOS){
    window.location.href='http://my.nuaa.edu.cn/thread-304740-1-1.html';
  }
  if(isAndroid){
    window.location.href='http://bigapp.youzu.com/mc/silence/dcodeDownload&app_id=7632';
  }
}