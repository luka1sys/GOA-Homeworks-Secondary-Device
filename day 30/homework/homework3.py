#შექმენით ფუნქცია manual_len, რომელსაც გადაეცემა სთრინგი ან სია,
#  ხოლო ფუნქციამ უნდა დააბრუნოს გადმოცემული სთრინგის/სიის სიგრძე(არ გამოიყენოთ len-ი)

def manual_len(strings):
    count=0
    for i in strings:
     count+=1
    return count
print(manual_len("luksona"))
