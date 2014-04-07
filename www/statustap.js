(function(cordova) {

	function StatusTap() {
		exec(null, null, "StatusTap", "initListener", []);
	}

    StatusTap.install = function() {
        if (!window.plugins) {
            window.plugins = {};
        }
        window.plugins.statustap = new StatusTap();
        // backward compatible
        window.statustap = navigator.statustap = window.plugins.statustap;
    };

	if (cordova) cordova.addConstructor(StatusTap.install);

})(window.cordova || window.Cordova || window.PhoneGap);
