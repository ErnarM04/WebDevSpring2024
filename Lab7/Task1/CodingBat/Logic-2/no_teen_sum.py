def no_teen_sum(a, b, c):
  sum = 0
  if a < 10 or a == 15 or a == 16: sum += a
  if b < 10 or b == 15 or b == 16: sum += b
  if c < 10 or c == 15 or c == 16: sum += c
  return sum
