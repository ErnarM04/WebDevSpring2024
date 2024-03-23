import math

bin = input()
bin = bin[::-1]
dec = 0
for i in range(len(bin)):
    dec += (math.pow(2, i) * int(bin[i]))
print(int(dec))