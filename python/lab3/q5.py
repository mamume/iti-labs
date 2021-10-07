string = "Hello, World! This is python."

reversed = ""
# Loop on the string words
for word in string.split():
    # Append each word in the beginning of reversed string
    reversed = word + " " + reversed

print(reversed)