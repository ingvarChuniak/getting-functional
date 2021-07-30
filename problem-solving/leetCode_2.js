var findMedianSortedArrays = function (nums1, nums2) {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);
  const n = arr.length % 2;
  return n ? arr[arr.length >> 1] : arr[arr.length >> 1] + arr[(arr.length >> 1) - 1];
};

console.log(findMedianSortedArrays([1, 3], [2, 4]));
