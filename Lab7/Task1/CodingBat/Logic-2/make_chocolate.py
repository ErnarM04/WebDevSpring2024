def make_chocolate(small, big, goal):
  big*=5
  diff = goal - big
  return diff if small >= diff else -1
