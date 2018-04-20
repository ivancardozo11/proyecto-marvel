var $ = window.jQuery;
var MarvelApi = window.MarvelApi;

var key = '19b62fcb015fef703d87076b400c365c';
var api = new MarvelApi(key)

  api.findSeries('avengers').then(function (serie) {
  var serieImage = serie.thumbnail.path + "." + serie.thumbnail.extension;
  $(".layout").css("backgroundImage", serieImage);
  debugger;

  var characters = serie.characters.items;
  var promises = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = characters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var character = _step.value;

      var promise = api.getResourceURI(character.resourceURI);
      promises.push(promise);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return Promise.all(promises);
}).then(function (characters) {
  debugger;
  console.log(characters);
})['catch'](function (err) {
  console.error(err);
});
