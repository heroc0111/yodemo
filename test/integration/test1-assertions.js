casper.test.begin("Should be about Angular", 0, function(test) {
  casper.start("http://localhost:9000/", function() {
    test.assertTextExists("todos");
    test.assertTextExists("Angular");
    test.assertTextDoesntExist("Backbone");
  });
  casper.run(function() {
    test.done();
  });
});