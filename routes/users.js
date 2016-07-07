var express = require('express');
var router = express.Router();
var exec = require('child_process');

/* GET users listing. */
router.get('/', function(req, res, next) {
	var message = 80;

	exec.execFile('./remote',
		['-m', message],
		function (error, stdout, stderr) {
			console.log('stdout: ' + stdout);
			console.log('stderr: ' + stderr);
			if( stdout.indexOf("Got this response") > -1 ){
				var state = stdout.split('Got this response ')[1].split('.')[0];
				
			}


			if (error !== null) {
				console.log('exec error: ' + error);

				

			}
		});

	res.send('respond with a resource');
});

module.exports = router;
