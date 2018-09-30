  /**
   *     Service Worker registration
   */

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Service Worker is registered');
	})
	.catch(function() {
		console.log('Service Worker failed!');
	});
}