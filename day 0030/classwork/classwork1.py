def manual_find(word, symbol):
    if symbol not in word:
        return -1

    index = 0

    for i in word:
        if i == symbol:
            return index
        index += 1


print(manual_find("nika", "a"))
