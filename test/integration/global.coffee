casper.createTask = (title) ->
	@.sendKeys '#new-todo', title
	@.sendKeys '#new-todo', @.page.event.key.Enter
