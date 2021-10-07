import sys

# Get file name from command line
filename = sys.argv[1]

# Initialize dicitonary for words count
words_count = {}

# Open the file in command with read
with open(filename, 'r') as f:
    # get the content of the file with replace - and . to whitespace
    words = f.read().replace("-", " ").replace(".", " ")

    # For loop on each word
    for word in words.split():
        # Remove punctuation
        word = word.strip(".!?,'\"- ").lower()

        # if word in word_count increase value
        try:
            words_count[word] += 1
        # else initialize by 1
        except:
            words_count[word] = 1

# Open popular_words.txt with write
with open('popular_words.txt', 'w') as f:
    # Loop for 5 times to get the top 5 results
    for i in range(5):
        # Get the word with max count
        max_word = max(words_count, key=words_count.get)
        # Add the word and its count in file
        f.write(f'{max_word}: {words_count[max_word]}\n')
        # delete this word from word_count
        del words_count[max(words_count, key=words_count.get)]