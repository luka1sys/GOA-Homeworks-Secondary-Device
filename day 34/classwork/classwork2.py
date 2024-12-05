# შექმენით manual_join ფუნქცია, რომელსაც გადაეცემა სთინგების სია და ერთი სთრინგი. 
# ამ ფუნქციამ უნდა შეართოს ეს სია და თითოეულ ელემენტს შორის ჩასვას გადმოცემული სთრინგი

#არ გამოიყენოთ .join() ფუნქცია
def manual_join(str_list, string1):

    result = ""

    for i in range(len(str_list)):
        result += str_list[i]  
        if i < len(str_list) - 1:  
            result += string1
    
    return result

strings = ["apple", "banana", "cherry"]
string2 = " "
print(manual_join(strings, string2))
