var chocolateBars = 
[
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, elementToAdd) {
  return [elementToAdd, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, elementToAdd) {
  array.unshift(elementToAdd)
  return array
}

function addElementToEndOfArray(array, elementToAdd) {
  return [...array, elementToAdd]
}

function destructivelyAddElementToEndOfArray(array, elementToAdd) {
  array.push(elementToAdd)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

