function maximumSubarray (list: number[]): number[] {
  let maxSum = -Infinity
  let currentSum = 0
  let maxStartIndex = 0
  let maxEndIndex = list.length - 1
  let currentStartIndex = 0

  list.forEach((elem, index) => {
    currentSum += elem
    if (maxSum < currentSum) {
      maxSum = currentSum
      maxStartIndex = currentStartIndex
      maxEndIndex = index
    }
    if (currentSum < 0) {
      currentSum = 0
      currentStartIndex = index + 1
    }
  })

  return list.slice(maxStartIndex, maxEndIndex + 1)
}

export default maximumSubarray
