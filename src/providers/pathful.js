// http://pathful.com

var Provider = require('../provider')
  , load     = require('load-script');

module.exports = Provider.extend({

  name : 'Pathful',

  key : 'apiKey',

  defaults : {
    apiKey : null
  },

  initialize : function (options, ready) {
    window.pathful=window.pathful||[];
    window.pathful.load=function(a){
	window.PF_APPID=a;
	var d=document;
	var s=d.createElement('script');
	s.type="text/javascript";
	s.async=true;
	s.src=("https:"==document.location.protocol)?"https://ssl.pathful.com/js/scripts/secure.js":"http://s.pathful.com/js/scripts/capture.turk.user.js";
	document.head.appendChild(s, d);
    };
    window.pathful.load(options.apiKey);

    // Once playdoh is loaded, pathful is good to go!
    ready();
  },

  identify : function (userId, traits) {
      var id = "";
      if(traits.email) id = traits.email;
      else id = userId;

      window.$playdoh.updateIdentity({
            'PATHFUL_ID' : id
        });
      window.pathful.newID = window.$playdoh.segmentor.initData.userid
  },

});
