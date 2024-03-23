def lucky_sum(a, b, c):
  sum = 0
  if a != 13: sum+=a
  else:
    b = 0
    c = 0
  if b != 13: sum+=b
  else:
    c = 0
  if c != 13: sum+=c
  return sum
