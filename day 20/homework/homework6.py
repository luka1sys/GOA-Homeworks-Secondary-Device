         #შექმენით ფუნქცია, რომელსაც გადაეცემა სიმბოლოების სია.
         #  ფუნქციამ უნდა დააბრუნოს ეს სია პირველი და ბოლო ელემენტების გარეშე, გამოიყენეთ slicing-ი

def list1(symbol_list):
    return symbol_list[1:-1]
print(list1([22,12,45,6,7,18]))