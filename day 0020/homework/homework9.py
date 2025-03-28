               #შექმენით ფუნქცია, რომელსაც გადაეცემა რიცხვების სია.
               #  გადაუარეთ ამ სიას for ციკლით და ჩაამატეთ მხოლოდ ლუწი რიცხვები ახალ სიაში. საბოლოოდ დააბრუნეთ ეს სია
def list1(numbers_list):
    even_numbers = [] 
    for num in numbers_list:
        if num % 2 == 0: 
            even_numbers.append(num)
    return even_numbers  
print(list1([22, 12, 45, 13, 6, 8, 7, 11, 24, 88]))