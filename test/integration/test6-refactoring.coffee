phantom.injectJs './test/integration/global.coffee'

casper.test.begin "Should create new task", 0, suite = (test) ->
	# Given index page
	casper.start "http://localhost:9000/", ->
		@.viewport 1280, 1024
	# When
	casper.then ->
		@.createTask('Code feature 1')
		@.createTask('Code feature 2')
		@.createTask('Code feature 3')
	# Then 
	casper.then ->
		test.assertElementCount 'ul#todo-list li', 3
		textfieldVal = @.evaluate ->
			$('#new-todo').val()
		test.assertEquals textfieldVal, ''
	casper.run ->
		test.done()