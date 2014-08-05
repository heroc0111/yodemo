casper.on('remote.message', function(msg) {
  this.echo('>>> ' + msg);
});

casper.once("page.error", function(msg, trace) {
  this.echo('>>> ' + msg + ', trace: ' + trace);
});

casper.test.begin("Should create new task", 0, function(test) {
  casper.start("http://localhost:9000/", function() {
    this.viewport(1280, 1024);
  });
  casper.then(function() {
    this.echo('Hello World!')
    this.capture('tmp/screenshot.png')
    test.assert(this.getHTML().indexOf('todos') != -1);
  });
  casper.run(function() {
    test.done();
  });
});