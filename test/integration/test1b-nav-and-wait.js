var suite;

casper.test.begin("Should link to Angular main site", 0, suite = function(test) {
  casper.start("http://localhost:9000/");
  casper.then(function() {
    this.click('.quote a');
    return this.then(function() {
      return this.waitForText('HTML enhanced for web apps!');
    });
  });
  casper.then(function() {
    test.assertTextExists('View on GitHub');
  });
  return casper.run(function() {
    return test.done();
  });
});