string = "Hello, World! This is python."

reversed = ""
for word in string.split():
    reversed = word + " " + reversed

print(reversed)