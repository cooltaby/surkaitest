var flag=0;
function INITFB(){
   function loadscript(callback){
 
	var script4= document.createElement('script');

	script4.src="https://static.kaiads.com/ads-sdk/ads-sdk.v4.min.js";
	    
    script4.onload=function(){callback()};
    
	document.getElementsByTagName('head')[0].appendChild(script4);
      }
  function Init(){
    // Initialize Firebase
    var script= document.createElement('script');
        document.getElementsByTagName('head')[0].appendChild(script);
	  
  }
  // request an ad when the DOM is loaded
      document.addEventListener("DOMContentLoaded", () => {
// getKaiAd( config )
});
 flag=1;
  loadscript(Init);
}