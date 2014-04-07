
var exec = require('cordova/exec');

var TapToScroll = function() {
	exec(null, null, "StatusTap", "initListener",[]);  
}

module.exports = new StatusTap();
