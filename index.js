function map(collection, callback) {
  const result = []

  for (let i = 0, n = collection.length; i < n; i++) {
    result.push(callback(collection[i]))
  }

  return result;
}
