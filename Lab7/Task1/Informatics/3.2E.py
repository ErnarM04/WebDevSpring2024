import math

n = int(input())
power = 0
while math.pow(2, power) < n:
    power+=1
print(power)