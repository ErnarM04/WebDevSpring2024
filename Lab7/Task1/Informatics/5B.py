import math


def power(a, n):
    return math.pow(a, n)

arr = input().split()
print(power(int(arr[0]), int(arr[1])))