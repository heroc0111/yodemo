var suite;

casper.test.begin("Should create new task", 0, suite = function(test) {
  casper.start("http://localhost:9000/", function() {
    return this.viewport(1280, 1024);
  });
  casper.then(function() {
    this.sendKeys('#new-todo', 'Write integration tests');
    return this.sendKeys('#new-todo', this.page.event.key.Enter);
  });
  casper.then(function() {
    var textfieldVal;
    test.assertElementCount('ul#todo-list li', 1);
    textfieldVal = this.evaluate(function() {
      return $('#new-todo').val();
    });
    return test.assertEquals(textfieldVal, '');
  });
  return casper.run(function() {
    return test.done();
  });
});