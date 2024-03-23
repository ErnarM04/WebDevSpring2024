def lone_sum(a, b, c):
  sum = a + b
  if b == a:
    sum = sum - b - b
  sum+=c
  if c == a or c == b:
    if sum == 0 or sum == c:
      return 0
    sum-=c*2
  return sum
