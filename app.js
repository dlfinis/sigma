 var childProcess = require('child_process');
  function runScript(scriptPath, callback, title) {

    // keep track of whether callback has been invoked to prevent multiple invocations
    var invoked = false;

    var process = childProcess.fork(scriptPath);

    process.on('data', function(data) {
      console.log(data.toString());
    });

	console.log(process.title);

    // listen for errors as they may prevent the exit event from firing
    process.on('error', function (err) {
      if (invoked) return;
      invoked = true;
      callback(err);
    });

    // execute the callback once the process has finished running
    process.on('exit', function (code) {
      if (invoked) return;
      invoked = true;
      var err = code === 0 ? null : new Error('Exit code ' + code);
      callback(err);
    });

  }

  // Run a script and invoke a callback when complete, e.g.
  console.log('+ API init');
  runScript(__dirname + '/api/app.js', function (err) {
    if (err) console.log(err);
    console.log('+ Finished running API ');
  });

  // Run a script and invoke a callback when complete, e.g.
  console.log('+ Frontend init');
  runScript(__dirname + '/dist/index.js', function (err) {
    if (err) console.log(err);
    console.log('+ Finished running Frontend ');
  });
