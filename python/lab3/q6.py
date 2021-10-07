class Str:
    def __init__(self):
        pass

    def get_string(self, string):
        self.string = string

    def print_string(self):
        print(self.string.upper())


str1 = Str()
str1.get_string('hello')
str1.print_string()