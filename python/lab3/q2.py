from math import sqrt

# Get the 2 points coordinates
x1 = float(input("Enter x1: "))
y1 = float(input("Enter y1: "))
x2 = float(input("Enter x2: "))
y2 = float(input("Enter y1: "))

# Calculate the distance, then print the result
distance = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2))
print(f"Distance = {distance}")