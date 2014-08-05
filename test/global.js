casper.createTask = function(title) {
  this.sendKeys('#new-todo', title);
  return this.sendKeys('#new-todo', this.page.event.key.Enter);
};
