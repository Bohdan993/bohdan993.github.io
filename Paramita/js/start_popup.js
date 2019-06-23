'use strict';
$(document).ready(function(){

$.magnificPopup.open({
  items: {
      src: '#start_popup',
      type: 'inline'
     

  },
   mainClass: 'my-mfp-zoom-out',
  closeBtnInside: false,
  closeOnBgClick: false
}),

$(".my-mfp-zoom-out").click(function(e){

});
})