                         #  შექმენით რიცხვების სია, სადაც გექნებათ დუბლიკატები.
                         #  გადაუარეთ მას for loop-ით და დაბეჭდეთ მხოლოდ ისეთი რცხვების ჯამი, რომლებიც არ მეორდება სიაში
 
numbers=[2, 6, 4, 4, 12, 33, 7, 3, 7, 6, 5, 17,]

# ცარიელი სია უნიკალური რიცხვებისთვის
sum = 0

# გადავუვლით თითოეულ რიცხვს სიაში
for number in numbers:
    # თუ რიცხვი მხოლოდ ერთხელ გვხვდება სიაში, ვამატებთ ჯამში
    if numbers.count(number) == 1:
        sum += number

print(sum)