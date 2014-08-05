casper.test.begin("Should create new task", 0, function(test) {
  casper.start("http://localhost:9000/");
  casper.then(function() {
    this.sendKeys('#new-todo', 'Write integration tests');
    this.sendKeys('#new-todo', this.page.event.key.Enter);
  });
  casper.then(function() {
    test.assertElementCount('ul#todo-list li', 1);
  });
  casper.run(function() {
    test.done();
  });
});