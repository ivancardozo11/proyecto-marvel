var $ = window.jQuery
var MarvelApi = window.MarvelApi

var key = "19b62fcb015fef703d87076b400c365c"
var api = new MarvelApi(key)

api.findSeries('avengers')
.then(function)
.then(function (results){
  var characters = results.data.results[0].characters.items
  var promises = []
  for (var i in characters){
    var character = characters[i]
    var characterUrl = character.resourceURI + '?' + key
    promises.push(Promise.resolve($.get(characterUrl)))
  }
  return Promise.all(promises)
})
.then (function (characters){
console.log(characters)
})
.catch(function (err){
  debugger
  console.error(err)
})
