def has22(nums):
  return 2 in nums and nums.index(2) != len(nums)-1 and nums[nums.index(2)+1] == 2
