/* Write a program to determine if the the parentheses (),
the brackets [], and the braces {}, in a string are balanced.

For example:

{{)(}} is not balanced because ) comes before (

({)} is not balanced because ) is not balanced between {}
     and similarly the { is not balanced between ()

[({})] is balanced

{}([]) is balanced

{()}[[{}]] is balanced
*/

function balancedNesting (stringInput) {  // eslint-disable-line no-unused-vars
  var brackets = ['[', ']']
  var bracketsRegExp = ['\\x5B', '\\x5D']
  var braces = ['{', '}']
  var bracesRegExp = ['\\x7B', '\\x7D']
  var parentheses = ['(', ')']
  var parenthesesRegExp = ['\\x28', '\\x29']
  var validCharacters = brackets.concat(braces).concat(parentheses)
  var validCharactersRegExp = bracketsRegExp.concat(bracesRegExp).concat(parenthesesRegExp)
  var regex, aCoincidences, aCategoryElements, numberCorrect
  // Check that we receive one parameter
  if (stringInput === undefined) return false
  // Check that the parameter received is a string
  if (typeof stringInput !== 'string') return false
  // Check that there is ONLY brackets, braces or parentheses
  regex = new RegExp(validCharactersRegExp.join('|'), 'g')
  if (stringInput.match(regex) === null) return false
  // Check that we have the same number of open elements than the closing elements for each category: brackets, braces and parentheses
  for (var i = 0; i < validCharactersRegExp.length; i += 2) {
    var numberOpen, numberClose
    regex = new RegExp(validCharactersRegExp[i], 'g')
    numberOpen = (stringInput.match(regex) === null) ? 0 : stringInput.match(regex).length
    regex = new RegExp(validCharactersRegExp[i + 1], 'g')
    numberClose = (stringInput.match(regex) === null) ? 0 : stringInput.match(regex).length
    if (numberOpen !== numberClose) return false
  }
  // Check that we don't found first a closing element than a open element for each category: brackets, braces and parentheses
  for (var j = 0; j < validCharactersRegExp.length; j += 2) {
    if (stringInput.indexOf(validCharacters[j]) > stringInput.indexOf(validCharacters[j + 1])) return false
  }
  // Check that we have the same number of open and closing elements for each category: brackets, braces and parentheses between the elements of a different cathegory
  for (var k = 0; k < validCharactersRegExp.length - 2; k += 2) {
    regex = new RegExp(validCharactersRegExp[k] + '.' + validCharactersRegExp[k + 1], 'g')
    aCoincidences = stringInput.match(regex)
    if (aCoincidences !== null) {
      numberCorrect = true
      aCoincidences.forEach(function (element) {
        for (var m = k + 2; m < validCharactersRegExp.length; m += 2) {
          aCategoryElements = []
          for (var l = 0; l < 2; l++) {
            regex = new RegExp(validCharactersRegExp[m + l], 'g')
            aCategoryElements.push((element.match(regex) === null) ? 0 : element.match(regex).length)
          }
          if (aCategoryElements.reduce(function (acc, currentValue, currentIndex) {
            return acc + Math.pow((-1), currentIndex) * currentValue
          }, 0) !== 0) numberCorrect = false
        }
      })
      if (!numberCorrect) return false
    }
  }
  return true
}
/*  var numberSquareOpen, numberSquareClose, numberCurvyOpen, numberCurvyClose, numberParenOpen, numberParenClose, aCoincidences, curvyCondition, parenCondition

  // Groups between {}
    curvyCondition = true
    // console.log('Input: ' + stringInput + 'Coincidences: ' + aCoincidences)
      regex = new RegExp('\\x7B', 'g')
      regex = new RegExp('\\x7D', 'g')
      numberCurvyClose = (element.match(regex) === null) ? 0 : element.match(regex).length
      if (numberCurvyOpen !== numberCurvyClose) curvyCondition = false
    })
    if (!curvyCondition) return false

    parenCondition = true
    aCoincidences.forEach(function (element) {
      regex = new RegExp('\\x28', 'g')
      numberParenOpen = (element.match(regex) === null) ? 0 : element.match(regex).length
      regex = new RegExp('\\x29', 'g')
      numberParenClose = (element.match(regex) === null) ? 0 : element.match(regex).length
      if (numberParenOpen !== numberParenClose) parenCondition = false
    })
    if (!parenCondition) return false
  }

  // Groups between ()
  regex = new RegExp('\\x7B.\\x7D', 'g')
  aCoincidences = stringInput.match(regex)
  if (aCoincidences !== null) {
    parenCondition = true
    aCoincidences.forEach(function (element) {
      regex = new RegExp('\\x28', 'g')
      numberParenOpen = (element.match(regex) === null) ? 0 : element.match(regex).length
      regex = new RegExp('\\x29', 'g')
      numberParenClose = (element.match(regex) === null) ? 0 : element.match(regex).length
      if (numberParenOpen !== numberParenClose) parenCondition = false
    })
    if (!parenCondition) return false
  }
  return true
}
*/
/*
  version 1

function balancedNesting (stringInput) {  // eslint-disable-line no-unused-vars
  var regex, numberSquareOpen, numberSquareClose, numberCurvyOpen, numberCurvyClose, numberParenOpen, numberParenClose, aCoincidences, curvyCondition, parenCondition
  if (stringInput === undefined) return false
  if (typeof stringInput !== 'string') return false
  // \x5B = [, \x5D = ], \x7B = {, \x7D = }, \x28 = (, \x29 =)
  regex = new RegExp('\\x5B|\\x5D|\\x7B|\\x7D|\\x28|\\x29', 'g')
  if (stringInput.match(regex) === null) return false
  if (stringInput.match(regex).length !== stringInput.length) return false
  regex = new RegExp('\\x5B', 'g')
  numberSquareOpen = (stringInput.match(regex) === null) ? 0 : stringInput.match(regex).length
  regex = new RegExp('\\x5D', 'g')
  numberSquareClose = (stringInput.match(regex) === null) ? 0 : stringInput.match(regex).length
  if (numberSquareOpen !== numberSquareClose) return false
  regex = new RegExp('\\x7B', 'g')
  numberCurvyOpen = (stringInput.match(regex) === null) ? 0 : stringInput.match(regex).length
  regex = new RegExp('\\x7D', 'g')
  numberCurvyClose = (stringInput.match(regex) === null) ? 0 : stringInput.match(regex).length
  if (numberCurvyOpen !== numberCurvyClose) return false
  regex = new RegExp('\\x28', 'g')
  numberParenOpen = (stringInput.match(regex) === null) ? 0 : stringInput.match(regex).length
  regex = new RegExp('\\x29', 'g')
  numberParenClose = (stringInput.match(regex) === null) ? 0 : stringInput.match(regex).length
  if (numberParenOpen !== numberParenClose) return false
  if (stringInput.indexOf(']') < stringInput.indexOf('[')) return false
  if (stringInput.indexOf('}') < stringInput.indexOf('{')) return false
  if (stringInput.indexOf(')') < stringInput.indexOf('(')) return false

  // Groups between {}
  regex = new RegExp('\\x5B.\\x5D', 'g')
  aCoincidences = stringInput.match(regex)
  if (aCoincidences !== null) {
    curvyCondition = true
    // console.log('Input: ' + stringInput + 'Coincidences: ' + aCoincidences)
    aCoincidences.forEach(function (element) {
      regex = new RegExp('\\x7B', 'g')
      numberCurvyOpen = (element.match(regex) === null) ? 0 : element.match(regex).length
      regex = new RegExp('\\x7D', 'g')
      numberCurvyClose = (element.match(regex) === null) ? 0 : element.match(regex).length
      if (numberCurvyOpen !== numberCurvyClose) curvyCondition = false
    })
    if (!curvyCondition) return false

    parenCondition = true
    aCoincidences.forEach(function (element) {
      regex = new RegExp('\\x28', 'g')
      numberParenOpen = (element.match(regex) === null) ? 0 : element.match(regex).length
      regex = new RegExp('\\x29', 'g')
      numberParenClose = (element.match(regex) === null) ? 0 : element.match(regex).length
      if (numberParenOpen !== numberParenClose) parenCondition = false
    })
    if (!parenCondition) return false
  }

  // Groups between ()
  regex = new RegExp('\\x7B.\\x7D', 'g')
  aCoincidences = stringInput.match(regex)
  if (aCoincidences !== null) {
    parenCondition = true
    aCoincidences.forEach(function (element) {
      regex = new RegExp('\\x28', 'g')
      numberParenOpen = (element.match(regex) === null) ? 0 : element.match(regex).length
      regex = new RegExp('\\x29', 'g')
      numberParenClose = (element.match(regex) === null) ? 0 : element.match(regex).length
      if (numberParenOpen !== numberParenClose) parenCondition = false
    })
    if (!parenCondition) return false
  }
  return true
}
*/
