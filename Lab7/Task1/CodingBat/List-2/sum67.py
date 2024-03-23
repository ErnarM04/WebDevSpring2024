def sum67(nums):
  sum = 0
  stop = False
  for i in nums:
    if not stop and i != 6:
      sum+=i
    if i == 7:
      stop = False
    if i == 6:
      stop = True
  return sum