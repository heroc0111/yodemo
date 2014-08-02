casper.test.begin "Basic Setup Test", 1, suite = (test) ->
  casper.start "http://localhost:9000/", ->
    @echo @getCurrentUrl()
    test.assertTextExists "todos"
    
  casper.run ->
    test.done()
