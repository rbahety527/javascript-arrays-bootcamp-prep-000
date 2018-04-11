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
  array = [elementToAdd, ...array]
  return array
}

function addElementToEndOfArray(array, elementToAdd) {
  return [...array, elementToAdd]
}

function destructivelyAddElementToEndOfArray(array, elementToAdd) {
  array = [...array, elementToAdd]
  return array
}