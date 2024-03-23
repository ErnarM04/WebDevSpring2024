n = int(input().strip())

if n % 2:
    print("Weird")
elif not n % 2 and n in range(2, 6):
    print("Not Weird")
elif not n % 2 and n in range(6, 21):
    print("Weird")
elif not n % 2 and n > 20:
    print("Not Weird")