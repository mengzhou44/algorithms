function sort(nums, numberOfBuckets) {
    let buckets = new Map()

    for (let num of nums) {
        let bucketIndex = Math.floor(num / numberOfBuckets)
        if (!buckets.has(bucketIndex)) {
            buckets.set(bucketIndex, [])
        }
        buckets.get(bucketIndex).push(num)
    }

    let array = []
    let keys = Array.from(buckets.keys()).sort((a, b) => a - b)
    for (let key of keys) {
        buckets.get(key).sort((a, b) => a - b)
        for (let item of buckets.get(key)) {
            array.push(item)
        }
    }
    return array
}

console.log(sort([7, 1, 3, 5, 3, 28], 3))
