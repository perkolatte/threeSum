function threeSum(nums) {
  const numsLength = nums.length;
  const seen = new Map();

  if (numsLength === 3) {
    return [nums];
  }
  for (const num of nums) {
    if (!seen.has(num)) {
      seen.set(num, 1);
    } else {
      seen.set(num, seen.get(num) + 1);
    }
  }

  console.log(seen);
}

export { threeSum };
