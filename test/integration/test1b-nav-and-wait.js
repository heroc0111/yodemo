casper.test.begin("Should link to Angular main site", 0, function(test) {
  casper.start("http://localhost:9000/");
  casper.then(function() {
    this.click('.quote a');
    this.then(function() {
      this.waitForText('HTML enhanced for web apps!');
    });
  });
  casper.then(function() {
    test.assertTextExists('View on GitHub');
  });
  casper.run(function() {
    test.done();
  });
});