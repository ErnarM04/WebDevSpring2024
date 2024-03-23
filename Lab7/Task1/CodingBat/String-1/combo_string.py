def combo_string(a, b):
  if min(len(a), len(b)) == len(a):
    return a+b+a
  else:
    return b+a+b
