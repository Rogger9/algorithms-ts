function binarySeach<T> (list: T[], target: T): number {
  let start = 0
  let end = list.length - 1

  while (start <= end) {
    const half = Math.ceil((start + end) / 2)
    const elem = list[half]
    if (elem === target) return half
    if (elem < target) start = half + 1
    if (elem > target) end = half - 1
  }

  return -1
}

export default binarySeach
