def xor(x, y):
    return int(bool(x-y))
arr = input().split()
print(xor(int(arr[0]), int(arr[1])))