#შექმენით ცვლადი, სადაც შეინახავთ string-ს. დაბეჭდეთ მისი თითოეული სიმბოლო და გვერდით მიუწერეთ რიგით მერამდენეა ის.

#მგალითად: "Hello" >>> "H - 1", "e - 2"...
def manual_join(str_list, string1):
    result = ""

    index = 1
    for char in str_list:
        result += char + string1 + str(index) + ", "
        index += 1

   
    if result.endswith(", "):
        result = result[:-2]
    
    return result

print(manual_join(list("Python"), " - "))
