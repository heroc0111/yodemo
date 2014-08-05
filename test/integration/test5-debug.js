var suite;

casper.on('remote.message', function(msg) {
  return this.echo('>>> ' + msg);
});

casper.once("page.error", function(msg, trace) {
  return this.echo('>>> ' + msg + ', trace: ' + trace);
});

casper.test.begin("Should create new task", 0, suite = function(test) {
  casper.start("http://localhost:9000/", function() {
    return this.viewport(1280, 1024);
  });
  casper.then(function() {
    this.echo('Hello World!')
    test.assert(this.getHTML().indexOf('todos') != -1);
  });
  return casper.run(function() {
    return test.done();
  });
});