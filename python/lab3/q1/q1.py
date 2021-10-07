import sys

filename = sys.argv[1]

words_count = {}
with open(filename, 'r') as f:
    words = f.read().replace("-", " ").replace(".", " ")

    for word in words.split():
        word = word.strip(".!?,'\"- ").lower()

        print(word)
        try:
            words_count[word] += 1
        except:
            words_count[word] = 1

with open('popular_words.txt', 'w') as f:
    for i in range(5):
        max_word = max(words_count, key=words_count.get)
        f.write(f'{max_word}: {words_count[max_word]}\n')
        del words_count[max(words_count, key=words_count.get)]