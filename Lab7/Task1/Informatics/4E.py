n = int(input())
arr = input().split()
cnt = 0
for i in range(1, n):
    if int(arr[i-1]) == int(arr[i]):
        cnt+=1
if cnt != 0:
    print("YES")
else:
    print("NO")