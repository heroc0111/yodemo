x = require('casper').selectXPath;

casper.test.begin("Should create new task", 0, function(test) {
  casper.start("http://localhost:9000/", function() {
    this.viewport(1280, 1024);
    this.sendKeys('#new-todo', 'Write integration for feature X');
    this.sendKeys('#new-todo', this.page.event.key.Enter);
    this.sendKeys('#new-todo', 'Code feature X');
    this.sendKeys('#new-todo', this.page.event.key.Enter);
  });
  casper.then(function() {
    this.click(x("//ul//li[2]/*/input[@type='checkbox']"));
    test.assertElementCount('ul li.completed', 1);
  });
  casper.then(function() {});
  casper.run(function() {
    test.done();
  });
});