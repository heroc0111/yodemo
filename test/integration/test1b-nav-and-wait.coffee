casper.test.begin "Should link to Angular main site", 0, suite = (test) ->
	casper.start "http://localhost:9000/"
	casper.then ->
		@.click '.quote a'
		@.then ->
			@.waitForText('HTML enhanced for web apps!') 
	casper.then ->
	casper.run ->
		test.done()
