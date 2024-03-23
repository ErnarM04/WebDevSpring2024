n = int(input())
arr = input().split()
cnt = 0
for i in arr:
    if int(i) > 0:
        cnt+=1
print(cnt)