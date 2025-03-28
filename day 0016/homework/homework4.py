#შექმენით სია სადაც გექნებათ რიცხვები. for loop-ის გამოყენებით იპოვეთ ამ სიაში ყველაზე პატარა რიცხვი
num=[22,45,67,34,2]
smal=num[0]
for i in num:
    if i<smal:
        smal=i
        print(smal)