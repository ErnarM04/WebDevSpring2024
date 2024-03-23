n = int(input())
if n % 100 and not n % 4:
    print("YES")
elif not n % 400:
    print("YES")
else:
    print("NO")