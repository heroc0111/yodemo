casper.on 'remote.message', (msg) -> 
	@.echo('>>> ' + msg)

casper.once "page.error", (msg, trace)->
	@.echo('>>> ' + msg + ', trace: ' + trace)

casper.test.begin "Should create new task", 0, suite = (test) ->
	# Given index page
	casper.start "http://localhost:9000/", ->
		@.viewport 1280, 1024
	# When
	casper.then ->
		@.echo @.getHTML()
		@.capture 'tmp/casper.png'
	casper.run ->
		test.done()