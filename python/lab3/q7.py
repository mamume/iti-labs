from math import pi

class Circle:
    def __init__(self, radius):
        self.radius = radius

    def get_area(self):
        return pi * self.radius * self.radius

    def get_perimeter(self):
        return 2 * pi * self.radius


c1 = Circle(3)
print(c1.get_area(), c1.get_perimeter())