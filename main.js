requirejs.config({
	baseUrl: '/',
	// waitSeconds:120,
	paths: {
		angular: 'bower_components/angular/angular'
	},
	shim: {
		angular: {
			exports: 'angular'
		}
	},
	deps: ['app']
})