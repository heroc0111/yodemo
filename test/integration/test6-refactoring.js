phantom.injectJs('./test/global.js');

casper.test.begin("Should create new task", 0, function(test) {
  casper.start("http://localhost:9000/");
  casper.then(function() {
    this.createTask('Code feature 1');
    this.createTask('Code feature 2');
    this.createTask('Code feature 3');
  });
  casper.then(function() {
    var textfieldVal;
    test.assertElementCount('ul#todo-list li', 3);
    textfieldVal = this.evaluate(function() {
      return $('#new-todo').val();
    });
    test.assertEquals(textfieldVal, '');
  });
  casper.run(function() {
    test.done();
  });
});