;(function(){
	var index = location.href.indexOf("/", location.href.length - 1);

	var dojoConfig = window.dojoConfig = {
		async: true,
		packages: [
			{
				name: "src",
				location: location.href.substr(0, index) + '/myMap'
			}
		],
		//baseUrl: '',
	};
})();