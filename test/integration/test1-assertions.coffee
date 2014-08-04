casper.test.begin "Should be about Angular", 0, suite = (test) ->
	casper.start "http://localhost:9000/", ->
		test.assertTextExists "todos"
		test.assertTextExists "AngularJS"
		test.assertTextDoesntExist "Backbone"
		
	casper.run ->
		test.done()
