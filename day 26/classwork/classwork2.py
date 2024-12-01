
def manual_title(string1):
    is_space = False

    result = ""

    for i in string1:
        if i == " ":
            result += i
            is_space = True
        elif is_space:
            result += i.upper()
            is_space = False
        else:
            result += i.lower()

    return result[0].upper() + result[1:]


print(manual_title("hello world"))