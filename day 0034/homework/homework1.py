#შექმენით ფუნქცია, რომელიც არგუმენტად მიიღებს string-ს.
#  ამ ფუნქციამ უნდა გაიგოს გადმოცემულ string-ში თითოეული სიმბოლოს რაოდენობა და ჩაამატოს
#  ახალ სიაში(ერთი სიმბოლის რაოდენობა მხოლოდ ერთხელ უნდა ჩაამატოთ.
#  მგალითად თუ string-ში 5 "a" გვხვდება, რიცხვი 5 მასივში მხოლოდ ერთხელ უნდა ჩავამატოთ, 
# მაგრამ სხვა სიმბოლოც თუ გვხვდება იგივე რაოდენობით, მას ვამატებთ ჩვეულებრივ).
#  საბოლოდ დაასორტირეთ მიღებული სია ზრდადობით და დააბრუნეთ
def Understanding_the_number_of_characters(string1):

    count_list = []
    char_count = {}

    for char in string1:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1


    for count in char_count.values():
        if count not in count_list:
            count_list.append(count)

    return sorted(count_list)

print(Understanding_the_number_of_characters("luuukkaaa")) 






    


