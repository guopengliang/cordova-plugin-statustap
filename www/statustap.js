// runs

var channel = require('cordova/channel'),
	exec = require('cordova/exec');

channel.onCordovaReady.subscribe(function() {
    exec(null, null, "StatusTap", "initListener", []);
});
