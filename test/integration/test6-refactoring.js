var suite;

phantom.injectJs('./test/global.js');

casper.test.begin("Should create new task", 0, suite = function(test) {
  casper.start("http://localhost:9000/", function() {
    return this.viewport(1280, 1024);
  });
  casper.then(function() {
    this.createTask('Code feature 1');
    this.createTask('Code feature 2');
    return this.createTask('Code feature 3');
  });
  casper.then(function() {
    var textfieldVal;
    test.assertElementCount('ul#todo-list li', 3);
    textfieldVal = this.evaluate(function() {
      return $('#new-todo').val();
    });
    return test.assertEquals(textfieldVal, '');
  });
  return casper.run(function() {
    return test.done();
  });
});