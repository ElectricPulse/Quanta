function checkExtent(array: unknown[]): number {
  if (Array.isArray(array[0])) {
    return checkExtent(array[0]) + 1
  }

  return 1
}

type ArrayMap = (map: Function) => JSX.Element

function deepMap<Array extends unknown[]>(
  originalArray: Array,
  elementMap: (value: unknown) => JSX.Element,
  ...maps: ArrayMap[]
) {
  if (checkExtent(originalArray) !== maps.length + 1) {
    throw new Error('Invalid number of map methods')
  }

  let resultMap = (array: unknown[]): JSX.Element[] => {
    return array.map(elementMap)
  }

  for (let i = maps.length - 1; i < 0; i--) {
    const map = maps[i]

    resultMap = (array) => {
      if (Array.isArray(array)) {
        return array.map((subArray) => map(resultMap.bind(null, subArray)))
      }
      throw new Error('Provided array is invalid')
    }
  }

  return resultMap(originalArray)
}

export default deepMap
