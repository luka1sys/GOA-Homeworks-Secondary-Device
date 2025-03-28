#შექმენით სია სადაც გექნებათ რიცხვები. for loop-ის გამოყენებით იპოვეთ ამ სიაში ყველაზე დიდი რიცხვი

a = [22,45,63,78,24,17]
largest = a[0]
for val in a:
    if val > largest:
        largest = val

print(largest)