var ERROR = 'ERROR ***************************************';

function asString(value) {
  function asSymbol(item) {
    return item.match(/^[_a-zA-Z]+/) ? item : asString(item);
  }

  function arrayAsString(item) {
    var string = '[';
    var index;

    for (index = 0; index < item.length; ++index) {
      if (index > 0) {
        string += ', ';
      }

      string += asString(item[index]);
    }

    return string + ']';
  }

  function objectAsString(item) {
    var string = '{';
    var property;

    for (property in item) {
      if (string !== '{') {
        string += ',';
      }

      string += ' ' + asSymbol(property) + ': ' + asString(item[property]);
    }

    return string + ' }';
  }

  if (Array.isArray(value)) {
    return arrayAsString(value);
  }

  switch (typeof value) {
    case 'object':
      return objectAsString(value);
    case 'number':
    case 'boolean':
      return String(value);
    default:
      return "'" + String(value) + "'";
  }
}

function assertEqual(actualValue, expectedValue) {
  function assertArrayEqual(actual, expected) {
    var index;

    if (actual.length !== expected.length) {
      return ERROR;
    }

    for (index = 0; index < actual.length; ++index) {
      if (assertEqual(actual[index], expected[index]) === ERROR) {
        return ERROR;
      }
    }

    return 'ok';
  }

  function assertObjectEqual(actual, expected) {
    var actualKeys = Object.keys(actual).sort();
    var expectedKeys = Object.keys(expected).sort();
    var key;

    if (assertArrayEqual(actualKeys, expectedKeys) === ERROR) {
      return ERROR;
    }

    for (key in actual) {
      if (assertEqual(actual[key], expected[key]) === ERROR) {
        return ERROR;
      }
    }

    return 'ok';
  }

  function assertNumberEqual(actual, expected) {
    var result;
    if (isNaN(actual)) {
      result = isNaN(expected);
    } else if (Number.isFinite(actual)) {
      result = Math.abs(actual - expected) < 0.0000001;
    } else {
      result = (actual === expected);
    }

    return result ? 'ok' : ERROR;
  }

  function assertScalarEqual(actual, expected) {
    return (actual === expected) ? 'ok' : ERROR;
  }

  if (typeof actualValue !== typeof expectedValue) {
    return ERROR;
  } else if (actualValue === null) {
    return expectedValue === null ? 'ok' : ERROR;
  } else if (Array.isArray(actualValue)) {
    return assertArrayEqual(actualValue, expectedValue);
  } else if (typeof actualValue === 'object') {
    return assertObjectEqual(actualValue, expectedValue);
  } else if (typeof actualValue === 'number') {
    return assertNumberEqual(actualValue, expectedValue);
  } else {
    return assertScalarEqual(actualValue, expectedValue);
  }
}

function show(message) {
  var out = document.getElementById('console');

  out.innerHTML += '<br>' + message;
}

function log(actual, expected) {
  var result = assertEqual(actual, expected);

  show('result = ' + String(result));
  if (result !== 'ok') {
    show('      value    = ' + asString(actual));
    show('      expected = ' + asString(expected) + '<br>');
  }
}

function theEnd() {
  show('********************** DONE ***********************');
}
