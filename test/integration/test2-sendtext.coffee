casper.test.begin "Should create new task", 0, suite = (test) ->
	# Given index page
	casper.start "http://localhost:9000/", ->
		@.viewport 1280, 1024
	# When
	casper.then ->
		@.sendKeys '#new-todo', 'Write integration tests'
		@.sendKeys '#new-todo', @.page.event.key.Enter
	# Then 
	casper.then ->
		test.assertElementCount 'ul#todo-list li', 1
	casper.run ->
		test.done()