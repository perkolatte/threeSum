function threeSum(nums) {
  // Preprocessing: Sort the input array
  const numsLength = nums.length;
  nums = nums.sort((a, b) => a - b);
  const zeroSumTriplets = [];

  // Pointer/Processing: Iterate and use two pointers to find triplets
  for (let i = 0; i < numsLength; i++) {
    if (nums[i] > 0) {
      break; // No three positive numbers can sum to zero
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue; // Skip duplicate values for i
    }
    const num = nums[i];
    let left = i + 1;
    let right = numsLength - 1;

    while (left < right) {
      const sum = num + nums[left] + nums[right];
      if (sum === 0) {
        zeroSumTriplets.push([num, nums[left], nums[right]]);
        left++;
        right--;
        // Postprocessing: Skip duplicate values for left and right pointers
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  // Postprocessing: Return all unique triplets
  return zeroSumTriplets;
}

//export { threeSum };
