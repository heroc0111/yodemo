casper.test.begin("Should create new task", 0, function(test) {
  casper.start("http://localhost:9000/");
  casper.then(function() {
    this.sendKeys('#new-todo', 'Write integration tests');
    this.sendKeys('#new-todo', this.page.event.key.Enter);
  });
  casper.then(function() {
    var textfieldVal;
    test.assertElementCount('ul#todo-list li', 1);
    textfieldVal = this.evaluate(function() {
      return $('#new-todo').val();
    });
    test.assertEquals(textfieldVal, '');
  });
  casper.run(function() {
    test.done();
  });
});