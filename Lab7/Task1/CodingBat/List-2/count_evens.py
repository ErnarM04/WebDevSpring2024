def count_evens(nums):
  cnt = 0
  for i in nums:
    if not i % 2:
      cnt+=1
  return cnt
