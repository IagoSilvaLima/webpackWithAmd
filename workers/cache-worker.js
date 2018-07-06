(function(worker){
	// importScripts('./workers/http-worker.js');

	worker.addEventListener('message', function(e){
		console.log(e);
	})
}(self))