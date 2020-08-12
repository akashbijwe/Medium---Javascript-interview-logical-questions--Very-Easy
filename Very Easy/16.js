function getSumOfItems(arr) {
  var sum = 0;
  arr.map((e) => sum += e );
  return sum;
}