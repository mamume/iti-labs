print('Q1')
fname = input('Enter first name: ')
lname = input('Enter last name: ')
print(f"{lname} {fname}")

print('\nQ2')
n = int(input('Sample value of n is '))
print(n + n*10+n + n*100+n*10+n)

print('\nQ3')
print("""a string that you "don't" have to escape
This
is  ...... multi-line
here doc  string ---------> example""")


print('\nQ4')
import math
radius = float(input('Enter sphere radius: '))
volumn = 4 * math.pi * pow(radius, 3) / 3
print(f"Volume of a sphere with raduis {radius} = {round(volumn, 3)}")

print('\nQ5')
base = float(input('Enter base: '))
height = float(input('Enter height: '))
area = height * base / 2
print(f"Triangle area = {area}")

print('\nQ6')
for i in range(5):
    print((i+1) * '*')
for i in range(4, 0, -1):
    print(i * '*')

print('\nQ7')
word = input('Enter a word: ')
for i in range(len(word), 0, -1):
    print(word[i-1], end='')


print('\n\nQ8')
for i in range(0, 7):
    if i == 3 or i == 6:
        continue
    print(i)

print('\nQ9')
n = int(input("Enter fibonacci n: "))
base = 1
fibonacci = 1
for i in range(n-2):
    print(f"{fibonacci} ", end='')
    fibonacci += base
    base = fibonacci - base

print(f"\nfibonacci of {n} = {fibonacci}")

print('\nQ10')
digit_count = 0
alpha_count = 0
string = input('Enter string: ')
for i in range(len(string)):
    if string[i].isalpha():
        alpha_count += 1
    if string[i].isdigit():
        digit_count += 1

print(f"Digits count = {digit_count}")
print(f"Alpha count = {alpha_count}")
