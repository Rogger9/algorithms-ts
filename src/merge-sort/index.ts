function merge<T> (listA: T[], listB: T[]): T[] {
  const merged: T[] = []

  while (listA.length && listB.length) {
    merged.push(listA[0] <= listB[0] ? listA.shift()! : listB.shift()!)
  }

  return [...merged, ...listA, ...listB]
}

function mergeSort<T> (input: T[]): T[] {
  if (input.length < 2) return input

  const half = Math.ceil(input.length / 2)
  const listA = input.slice(0, half)
  const listB = input.slice(half)

  return merge(
    mergeSort(listA),
    mergeSort(listB)
  )
}

export default mergeSort
