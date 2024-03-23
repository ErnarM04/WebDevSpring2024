n = int(input())
arr = input().split()
for i in arr:
    if not int(i) % 2:
        print(i, end=" ")