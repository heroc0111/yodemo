casper.test.begin("Should be about Angular", 0, suite = function(test) {
  casper.start("http://localhost:9000/", function() {
    test.assertTextExists("todos");
    test.assertTextExists("Angular");
    return test.assertTextDoesntExist("Backbone");
  });
  return casper.run(function() {
    return test.done();
  });
});