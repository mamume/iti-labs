import math
from random import random
print('Q1')


def get_unique(nums):
    return list(set(nums))


print(get_unique([1, 2, 2, 3, 3]))

print('\nQ2')


def divide_str(string):
    half_index = math.ceil(len(string) / 2)
    front = string[:half_index]
    back = string[half_index:]

    return (front, back)


print(divide_str('abcd'))


def divide_concat(str1, str2):
    (front1, back1) = divide_str(str1)
    (front2, back2) = divide_str(str2)

    return f'{front1}{front2} {back1}{back2}'


print(divide_concat('Mahmoud', 'Mustafa'))


print('\nQ3')


def check_unique(nums):
    if len(nums) == len(set(nums)):
        return True
    else:
        return False


print(check_unique([1, 2, 3, 3]))


print('\nQ4')


def bubble_sort(lst):
    for i in range(len(lst), 0, -1):
        for j in range(i-1):
            if lst[j] > lst[j+1]:
                lst[j], lst[j+1] = lst[j+1], lst[j]

    return lst


print(bubble_sort([2, 3, 5, 100, 0, 3, 8, 0, 3, 2]))

print('\nQ5')
random_num = round(math.floor(random()*100))
try_count = 0
answers = []
score = 0
while try_count < 10:
    print(f'Try {try_count+1}')
    ans = int(input("Guess a number from 0-99: "))

    if ans >= 100:
        print('The answer must be 0-99')
        continue
    if ans in answers:
        print('Answer is entered before')
        continue
    elif ans < random_num:
        print(f'The number is bigger than {ans}')
    elif ans > random_num:
        print(f'The number is smaller than {ans}')
    else:
        score += 1
        print(f'Right! the number is {ans}, now guess another number.')
        random_num = random_num = round(math.floor(random()*100))
        answers.clear()
        try_count = 0
        continue

    try_count += 1
    answers.append(ans)

    if try_count == 10:
        play = input('You have no tries, continue? (y/n): ')
        if play == 'y':
            try_count = 0
        else:
            print(f'Your score is {score}')

print('\nQ6')


def diagonalDifference(arr):
    # Write your code here
    # i 0, 1, 2, 3
    # 0,0 + 1,1 +  2,2 + 3,3
    # 0,3 + 1,2 +  2,1 + 3,0

    sum = 0
    for i in range(len(arr)):
        sum += arr[i][i] - arr[i][len(arr) - i - 1]

    return abs(sum)


arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
print(diagonalDifference(arr))
