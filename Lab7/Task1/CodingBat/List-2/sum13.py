def sum13(nums):
  sum = 0
  for i in nums:
    if i != 13: sum+=i
    else: break
  return sum
