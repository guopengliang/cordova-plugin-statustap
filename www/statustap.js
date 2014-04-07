
var exec = require('cordova/exec');

var StatusTap = function() {
	exec(null, null, "StatusTap", "initListener",[]);  
}

module.exports = new StatusTap();
