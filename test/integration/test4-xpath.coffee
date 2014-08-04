x = require('casper').selectXPath

casper.test.begin "Should create new task", 0, suite = (test) ->
	# Given index page
	casper.start "http://localhost:9000/", ->
		@.viewport 1280, 1024
		@.sendKeys '#new-todo', 'Write integration for feature X'
		@.sendKeys '#new-todo', @.page.event.key.Enter
		@.sendKeys '#new-todo', 'Code feature X'
		@.sendKeys '#new-todo', @.page.event.key.Enter
	# When
	casper.then ->
		@.click x("//ul//li[2]/*/input[@type='checkbox']")
		test.assertElementCount 'ul li.completed', 1
	# Then 
	casper.then ->
	casper.run ->
		test.done()